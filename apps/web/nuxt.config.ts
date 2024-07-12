import project from '@mono/dev/configs/project'
import { join } from 'pathe'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    devtools: {
        enabled: false,
    },
    devServer: {
        https: {
            key: join(project.dev.rootDir, 'localhost-key.pem'),
            cert: join(project.dev.rootDir, 'localhost.pem'),
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/eslint',
        '@pinia/nuxt',
    ],
    components: {
        dirs: [
            {
                path: '~/components',
                pathPrefix: false,
            },
        ],
    },
    tailwindcss: {
        configPath: join(project.dev.rootDir, 'tailwind.ts'),
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: false,
                quotes: 'single',
                arrowParens: false,
            },
        },
    },
})
