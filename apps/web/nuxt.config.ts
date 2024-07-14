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
			{ path: '~/components', pathPrefix: false },
		],
	},
})
