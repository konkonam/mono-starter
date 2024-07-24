<script setup lang="ts">
import type { FormField } from '~/types'

import { watchDebounced } from '@vueuse/core'
import z from 'zod'

const props = defineProps<{
    id: string
    prefixedLabel?: boolean
    submitOnChange?: boolean
    fields: FormField[]
    onSubmit: (payload: Record<string, unknown>, currentFields: FormField[]) => void
    onError?: () => void
}>()

const schema = z.object({})
const formFields = ref<FormField[]>(props.fields)
const hasErrors = computed(() => formFields.value.some((value) => value?.errors?.length))

formFields.value.map((field) => {
    schema.setKey(field.name, field.validation)
})

const submit = async () => {
    const payload = formFields.value.reduce((acc: Record<string, unknown>, field) => {
        return {
            ...acc,
            ...{ [field.name]: field.value },
        }
    }, {})

    return schema
        .safeParseAsync(payload)
        .then(() => props.onSubmit(payload, formFields.value as FormField[]))
        .catch(() => props.onError?.())
}

onMounted(() => {
    for (const field of formFields.value) {
        watch(
            () => field.value,
            (value) => {
                const result = field.validation.safeParse(value)
                field.errors = result?.error?.errors ?? []
            },
        )

        if (props.submitOnChange) {
            watchDebounced(
                () => field.value,
                async () => {
                    if (hasErrors.value) return

                    await submit()
                },
                { debounce: 300 },
            )
        }
    }
})
</script>

<template>
    <div
        :class="[
            'flex flex-col gap-4 text-black',
            'w-full max-w-form',
        ]"
    >
        <FormFields
            :fields="formFields as FormField[]"
            :prefix="props.prefixedLabel"
        />

        <slot
            name="submit"
            :has-errors="hasErrors"
            :on-submit="submit"
        >
            <ElButton
                :id="props.id"
                :class="[
                    'd-btn-primary w-full',
                    { '!text-white/50 pointer-events-none': hasErrors },
                ]"
                :disabled="hasErrors"
                @click="submit"
            >
                submit
            </ElButton>
        </slot>
    </div>
</template>
