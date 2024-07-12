import project from '../configs/project';
import consola from 'consola';

consola.start("generating graphql types...");

Bun.spawn({
    cmd: [
        'bunx',
        '--bun',
        'graphql-codegen',
        '--config',
        `${project.dev.configsDir}/codegen.ts`,
    ],
    stdout: null,
    onExit(subprocess, exitCode, signalCode, error) {
        if (error) {
            subprocess.kill()
            consola.error(`could not generate graphql types!`, error)
        }

        subprocess.kill()
        consola.success(`all types generated!`)
    },
})
