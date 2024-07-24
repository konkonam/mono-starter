import type { PublicRuntimeConfig } from 'nuxt/kit'
import type { BttContext } from '#timetracking/types'

export type AppContext = {
    language: string
    allLanguages: string[]
    publicConfig: PublicRuntimeConfig
    btt: BttContext
}
