import { join, dirname } from 'pathe'

const projectRoot = dirname(Bun.env.npm_package_json ?? './package.json')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    devtools: {
        enabled: false,
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                types: [ 'bun' ],
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
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
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
        configPath: join(projectRoot, 'tailwind.ts'),
    },
})
