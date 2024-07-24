<script setup lang="ts">
definePageMeta({
    navigation: {
        name: 'dashboard',
        order: -1,
    },
})
</script>

<template>
    <ElBox name="test" class="flex flex-row gap-2">
        <ElButton color="primary" size="small">
            test
        </ElButton>

      <ElButton color="success" size="small">
        test
      </ElButton>

      <ElButton color="error" size="small">
        test
      </ElButton>

      <ElButton color="dark" size="small">
        test
      </ElButton>
    </ElBox>
</template>>
