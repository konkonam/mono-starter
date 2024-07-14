<script setup lang="ts">
import type { AllowedColors } from '~/types'

const props = defineProps<{
	name: string
	color: AllowedColors
}>()
</script>

<template>
    <span :class='[
        `bg-${color}`,
        "p-2",
    ]'>
        <slot />
    </span>
</template>
