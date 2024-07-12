import consola from 'consola';

consola.wrapStd()

Bun.spawn({
    cmd: [
        'bun',
        '--bun',
        'run',
        `--filter=./../apps/native`,
        'build',
    ],
    stdout: 'inherit',
    onExit(subprocess, exitCode, signalCode, error) {
        if (error) {
            subprocess.kill()
            consola.error(`could not build the native app!`, error)
        }

        subprocess.kill()
        consola.success(`successfully built the native app!`)
    },
})
