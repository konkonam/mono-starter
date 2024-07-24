import type Snippets from '~/configs/lang'
import type { AppContext, SnippetKey } from '~/types'

export const tl = (snippetName: SnippetKey<typeof Snippets> | string) => {
    const runtimeConfig = useRuntimeConfig()
    const context = inject<AppContext>('context')

    return computed<string>(() => {
        const [groupKey, key] = snippetName.split('.')

        const group =
            runtimeConfig?.public.snippets[groupKey as keyof typeof runtimeConfig.public.snippets]
        if (!group) return 'undefined key'

        const property = group[key as keyof typeof group]
        if (!property) return 'undefined property'

        const value = property?.[context?.language ?? runtimeConfig.public.defaultLanguage]

        return value ?? 'undefined'
    })
}
