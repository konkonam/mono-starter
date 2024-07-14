<script setup lang="ts">
const props = defineProps<{ name: string }>()
const attrs = useAttrs()
</script>

<template>
    <div class="flex flex-col gap-1">
        <span v-if="props.name" class="block ml-1.5 text-sm">
            {{ props.name }}
        </span>

        <div v-bind="attrs" class="bg-darker p-1.5 rounded-md">
            <slot />
        </div>
    </div>
</template>
