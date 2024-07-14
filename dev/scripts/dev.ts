import project from '../configs/project';
import consola from 'consola';

consola.wrapStd()

Bun.spawn({
    cmd: [
        'bun',
        '--bun',
        `--env-file=${project.envDirs.dev}`,
        'run',
        '--filter=./../apps/web',
        'dev',
    ],
    stdout: 'inherit',
    onExit(subprocess, exitCode, signalCode, error) {
        if (error) {
            subprocess.kill()
            consola.error("could not start the web app!", error)
        }

        subprocess.kill()
    },
})
