import { addComponentsDir, createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'

import { generate } from '@graphql-codegen/cli'
import { addImportsDir } from 'nuxt/kit'
import { dirname } from 'pathe'
import { config } from './codegen'

export default defineNuxtModule({
    meta: { name: 'timetracking' },
    setup: async (options, nuxt) => {
        const resolver = createResolver(import.meta.url)

        addImportsDir(resolver.resolve('./runtime/utils'))

        extendPages((pages) => {
            pages.push({
                name: 'timetracking',
                path: '/timetracking',
                file: resolver.resolve('./runtime/pages/dashboard.vue'),
            })
        })

        nuxt.options.alias['#timetracking'] = resolver.resolve('./runtime')
        nuxt.options.alias['#timetracking/types'] = resolver.resolve('./types')
    },
    hooks: {
        'prepare:types': async () => generate(config),
        'builder:watch': async (event, path) => {
            if (dirname(path).endsWith('graphql')) {
                await generate(config)
            }
        },
    },
})
