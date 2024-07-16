<script setup lang="ts">
const router = useRouter()
const currentRoute = useRoute()
</script>

<template>
  <div class="flex flex-row items-center gap-x-4">
    <template
        v-for="route in router.getRoutes()"
        :key="route.name"
    >
      <ElButton
          size="small"
          :color="route.name === currentRoute.name ? 'primary' : 'transparent'"
          @click.prevent="navigateTo(route)"
      >
        {{ route.name }}
      </ElButton>
    </template>
  </div>
</template>
