<script setup lang="ts">
import type { FormField } from '~/types'

const props = defineProps<{
    fields: FormField[]
    prefix?: boolean
}>()
</script>

<template>
    <template
        v-for="field in props.fields"
        :key="field.name"
    >
        <label
            :class="[
                'flex grow items-center gap-2 p-2 rounded-md',
                'w-full bg-dark border border-transparent',
                { '!border-error': field.errors?.length },
            ]
        ">
            
            <span
                v-if="props.prefix"
                class="block min-w-20 text-xs opacity-30 pointer-events-none text-white"
            >
                {{ field.name }}<span v-if="!field.validation.isOptional()">*</span>
            </span>
            <input
                v-model="field.value"
                :type="field.type"
                :placeholder="field.name"
                class="grow text-sm overflow-hidden bg-inherit text-white outline-none"
                :value="field.value"
            >
        </label>
        <FormErrors :errors="field.errors ?? []" />
    </template>
</template>
