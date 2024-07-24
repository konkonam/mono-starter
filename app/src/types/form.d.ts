import type { ZodError, ZodTypeAny } from 'zod'

export type FormField = {
    name: string
    type: string
    value?: string
    validation: ZodTypeAny
    ref?: Ref<HTMLInputElement | undefined>
    errors?: ZodError['errors']
}
