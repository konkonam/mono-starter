import type { Types } from '@graphql-codegen/plugin-helpers'

const API_ENDPOINT = Bun.env.BTT_API_ENDPOINT ?? 'https://api.time.bestit.de/graphql'

export const config = {
    schema: API_ENDPOINT,
    overwrite: true,
    ignoreNoDocuments: true,
    silent: true,
    generates: {
        './.nuxt/types/btt/graphql.d.ts': {
            plugins: ['typescript', 'typescript-operations'],
            config: {
                avoidOptionals: true,
                maybeValue: 'T | undefined',
                namingConvention: 'keep',
                preResolveTypes: true,
                nonOptionalTypename: true,
                skipTypeNameForRoot: true,
            },
        },
    },
} satisfies Types.Config & {
    cwd?: string
}
