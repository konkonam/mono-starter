<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const props = defineProps<{ name?: string }>()
const attrs = useAttrs()
</script>

<template>
    <div class="flex flex-col gap-0.5">
        <span v-if="props.name" class="block ml-1.5 text-sm">
            {{ props.name }}
        </span>

        <div v-bind="attrs" class="bg-darker p-1.5 rounded-md">
            <slot />
        </div>
    </div>
</template>
