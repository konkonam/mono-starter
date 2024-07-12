import { join } from 'pathe';

const rootDir = join(__dirname, '../..')

export default {
    rootDir: rootDir,
    distDir: join(rootDir, 'dist'),
    apps: {
        rootDir: join(rootDir, 'apps'),
        web: join(rootDir, 'apps/web'),
        native: join(rootDir, 'apps/native'),
    },
    dev: {
        rootDir: join(rootDir, 'dev'),
        cloudDir: join(rootDir, 'dev/cloud'),
        configsDir: __dirname,
    },
    packages: {
        rootDir: join(rootDir, 'packages'),
    },
    envDirs: {
        prod: join(rootDir, 'dev/.env'),
        dev: join(rootDir, 'dev/.env.development'),
    },
    temporaryDirs: {
        node_modules: join(rootDir, 'node_modules'),
        dist: join(rootDir, 'dist'),
        nuxt: join(rootDir, 'apps/web/.nuxt'),
        generated: join(rootDir, 'dev/generated'),
    },
} as const
