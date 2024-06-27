export type DependenciesFormat = Record<string, unknown>

export type FrameworkContext<T, D extends DependenciesFormat> = {
    setup: (dependencies: D) => T
    dependencies: D
}