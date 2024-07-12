import project from '../configs/project';
import consola from 'consola';

consola.start("cleaning repository...");

for (const [ key, value ] of Object.entries(project.temporaryDirs)) {
    Bun.spawn({
        cmd: `rm -rf ${value}`.split(' '),
        stdout: null,
        onExit(subprocess, exitCode, signalCode, error) {
            if (error) {
                subprocess.kill()
                consola.error(`could not clean '${key}'`, error)
            }

            subprocess.kill()
            consola.info(`successfully cleaned '${key}'`)
        },
    })
}
