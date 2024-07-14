<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <span v-if="props.name" class="block ml-2">
            {{ props.name }}
        </span>

        <div class="bg-darker p-2 rounded-md">
            <slot />
        </div>
    </div>
</template>
