<script setup lang="ts">
const { navItems, isActive, getName, getIcon } = useNavigation()
</script>

<template>
    <div class="flex flex-row items-center gap-x-4">
        <ElButton
            v-for="route in navItems"
            :key="route.name"
            size="small"
            :color="isActive(route) ? 'primary' : 'transparent'"
            @click.prevent="navigateTo(route)"
        >
            <component :is="getIcon(route)" class="size-4" />

            <template v-if="!route.meta?.showOnlyIcon">
                {{ getName(route) }}
            </template>
        </ElButton>
    </div>
</template>
