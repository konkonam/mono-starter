<script setup lang="ts">
import type { ColorName } from '~/types'

enum Size {
	small = 'px-1 py-0.5 text-sm',
	medium = 'px-2 py-1',
	large = 'px-4 py-2 text-lg',
}

const props = defineProps<{
	color?: ColorName
	size?: keyof typeof Size
	noPop?: boolean
}>()

const selectedColor = computed(() => `bg-${props.color ?? 'primary'}`)
const selectedSize = computed(() => Size[props.size ?? 'medium'])
</script>

<template>
    <button :class='[
        props.noPop ? "" : "pop-up",
        selectedColor,
        selectedSize,
        "rounded-md",
    ]'>

        <slot />
    </button>
</template>
