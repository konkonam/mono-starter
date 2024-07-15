import { dirname, join } from 'pathe'

const projectRoot = dirname(Bun.env.npm_package_json ?? './package.json')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: 'src/',
	ssr: false,
	devtools: { enabled: false },

	typescript: {
		tsConfig: {
			include: ['tailwind.config.ts'],
			compilerOptions: {
				types: ['bun'],
			},
		},
	},

	vite: {
		cacheDir: '.nuxt/cache',
		server: {
			hmr: {
				protocol: 'ws',
				host: 'localhost',
			},
		},
	},

	hooks: {
		'vite:extendConfig': (viteInlineConfig, env) => {
			viteInlineConfig.server = {
				...viteInlineConfig.server,
				hmr: {
					protocol: 'ws',
					host: 'localhost',
				},
			}
		},
	},

	devServer: {
		https: {
			key: join(projectRoot, 'dev/localhost-key.pem'),
			cert: join(projectRoot, 'dev/localhost.pem'),
		},
	},

	modules: ['@nuxtjs/tailwindcss'],

	tailwindcss: {
		exposeConfig: true,
	},

	components: {
		dirs: [
			{ path: '~/components/elements', pathPrefix: false, prefix: 'El' },
			{ path: '~/components/icons', pathPrefix: false, prefix: 'Icon' },
			{ path: '~/components/layout', pathPrefix: false, prefix: 'Layout' },
			{ path: '~/components/navigation', pathPrefix: false, prefix: 'Nav' },
			{ path: '~/components/navigation/items', pathPrefix: false, prefix: 'Item' },
			{ path: '~/components', pathPrefix: false },
		],
	},
})
