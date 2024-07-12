import consola from 'consola';

consola.wrapStd()

Bun.spawn({
    cmd: [
        'bun',
        '--bun',
        'run',
        `--filter=./../apps/web`,
        'build',
    ],
    stdout: 'inherit',
    onExit(subprocess, exitCode, signalCode, error) {
        if (error) {
            subprocess.kill()
            consola.error(`could not build the web app!`, error)
        }

        subprocess.kill()
        consola.success(`successfully built the web app!`)
    },
})
