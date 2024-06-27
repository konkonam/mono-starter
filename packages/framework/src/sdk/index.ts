import type { DependenciesFormat, FrameworkContext } from '../types'

export const useFramework = () => {
    const prepare = <D extends DependenciesFormat>(dependencies: D) => {
        return <T>(
            setup: (dependencies: D) => T,
        ): T & { _context: FrameworkContext<T, D> } => {
            return {
                ...setup(dependencies),
                _context: { setup, dependencies },
            }
        }
    }

    return {
        implement: <T>(
            setup: (args: { prepare: typeof prepare }) => T,
        ) => setup({ prepare })

    }
}
