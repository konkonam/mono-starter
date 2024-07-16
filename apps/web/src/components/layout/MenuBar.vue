<script setup lang="ts">
const router = useRouter()
</script>

<template>
	<div class="flex flex-row justify-between items-center">
		<div v-for="route in router.getRoutes()">
		    {{ route.name }}
		</div>
	</div>
</template>
