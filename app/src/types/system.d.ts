import 'vue-router'

export type SnippetKey<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${K & string}.${Extract<keyof T[K], string>}`
        : never
}[keyof T]

declare module 'vue-router' {
    interface RouteMeta {
        navigation?: {
            name?: string
            icon?: string
            onlyIcon?: boolean
            exclude?: boolean
            order?: number
        }
    }
}
