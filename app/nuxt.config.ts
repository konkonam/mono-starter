import { join } from 'pathe'
import snippets from './src/configs/lang'

const projectRoot = Bun.env.npm_config_local_prefix ?? '.'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    devtools: { enabled: false },
    compatibilityDate: '2023-06-01',

    alias: {
        '@mono/*': join(projectRoot, 'node_modules/@mono/*'),
    },

    typescript: {
        tsConfig: {
            include: ['tailwind.config.ts'],
            compilerOptions: {
                baseUrl: '.',
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

    runtimeConfig: {
        public: {
            translationFallback: 'snippet not found',
            defaultLanguage: 'en',
            snippets: snippets,
            apiEndpoint: 'https://time.bestit.de/graphql',
        },
    },

    modules: ['@nuxtjs/tailwindcss', '~/modules/timetracking'],

    tailwindcss: {
        exposeConfig: true,
    },

    plugins: ['~/plugins/emitter', '~/plugins/apollo'],

    components: {
        dirs: [
            { path: '~/components/elements', pathPrefix: false, prefix: 'El' },
            { path: '~/components/icons', pathPrefix: false, prefix: 'Icon', global: true },
            { path: '~/components/forms', pathPrefix: false, prefix: 'Form' },
            { path: '~/components/layout', pathPrefix: false, prefix: 'Layout' },
            { path: '~/components/navigation', pathPrefix: false, prefix: 'Nav' },
            { path: '~/components/navigation/items', pathPrefix: false, prefix: 'Item' },
            { path: '~/components', pathPrefix: false },
        ],
    },

    imports: {
        presets: [
            {
                from: '@vueuse/core',
                imports: ['useAnimate'],
            },
        ],
    },
})
