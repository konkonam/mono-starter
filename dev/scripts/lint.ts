import consola from 'consola'
import { join } from 'pathe'
import project from '../configs/project'

consola.wrapStd()

Bun.spawn({
	cmd: ['bunx', '@biomejs/biome', 'lint', '--diagnostic-level=warn'],
	stdout: 'inherit',
	onExit(subprocess, exitCode, signalCode, error) {
		if (error) {
			subprocess.kill()
		}

		subprocess.kill()
	},
})
