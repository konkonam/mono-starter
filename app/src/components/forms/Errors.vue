<script setup lang="ts">
import type { ZodError } from 'zod'

const props = defineProps<{
    errors: ZodError['errors']
}>()
</script>

<template>
    <div
        v-if="errors.length"
        class="d-label flex flex-col gap-2 px-4"
    >
        <span
            v-for="error in props.errors"
            :key="error.code"
            class="d-label-text text-error text-center"
        >
            {{ tl('errors.message').value }}
        </span>
    </div>
</template>
