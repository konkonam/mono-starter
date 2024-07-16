import type { CodegenConfig } from '@graphql-codegen/cli'

import { join } from 'pathe'
import project from './project'

const API_ENDPOINT = Bun.env.BTT_API_ENDPOINT ?? 'https://api.time.bestit.de/graphql'
const FILE_PATH = join(project.temporaryDirs.generated, 'graphql.d.ts')

export default {
	schema: API_ENDPOINT,
	documents: join(project.rootDir, '**/*.gql.ts'),
	overwrite: true,

	ignoreNoDocuments: true,
	generates: {
		[FILE_PATH]: {
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
} as const satisfies CodegenConfig
