import project from '../configs/project';
import consola from 'consola';

consola.wrapStd()

Bun.spawn({
    cmd: [
        'bun',
        '--bun',
        `--env-file=${project.envDirs.prod}`,
        'test',
        `--filter=${project.apps.rootDir}`,
        '--parallel',
    ],
    stdout: 'inherit',
})
