import project from '../configs/project';
import consola from 'consola';

consola.wrapStd()

Bun.spawn({
    cmd: [
        'bun',
        '--bun',
        `--env-file=${project.envDirs.dev}`,
        'run',
        `--filter=./../apps/native`,
        'dev',
    ],
    stdout: 'inherit',
    onExit(subprocess, exitCode, signalCode, error) {
        if (error) {
            subprocess.kill()
            consola.error(`could not start the native app!`, error)
        }

        subprocess.kill()
    },
})
