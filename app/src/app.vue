<script setup lang="ts">
import '@fontsource-variable/sono'

const runtimeConfig = useRuntimeConfig()
const context = reactive({
    language: 'en',
    allLanguages: Object.keys(runtimeConfig.public.snippets.languages),
    publicConfig: runtimeConfig.public,
})

provide('context', context)
</script>

<template>
    <NuxtLoadingIndicator />

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>