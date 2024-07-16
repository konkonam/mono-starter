<script setup lang="ts">
</script>

<template>
  <ElBox name="typography" class="flex flex-col gap-1.5">
    <div>
      <p class="text-sm">text-sm</p>
      <p>text-regular</p>
      <p class="text-lg">text-lg</p>
    </div>
    
    <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
  </ElBox>
  
  <ElBox name="buttons" class="flex flex-row gap-1.5">
    <ElButton color="primary" size="small">
      primary
    </ElButton>

    <ElButton color="success" size="small">
      success
    </ElButton>

    <ElButton color="error" size="small">
      error
    </ElButton>

    <ElButton color="dark" size="small">
      dark
    </ElButton>
  </ElBox>
</template>
