<script setup lang="ts">
const reset = () => (window.location.href = '/');
</script>

<template>
	<div class="bg-scrap fixed z-50 flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
		<h1 class="mb-6 animate-pulse text-center text-4xl font-semibold">Error 404: Página no encontrada</h1>
		<div class="flex justify-center">
			<img class="w-96" src="/src/assets/illustrations/notFound.svg" alt="Error server image" />
		</div>
		<button @click="reset" class="btn btn-primary mt-6 mb-32 text-white font-semibold">Volver al inicio</button>
	</div>
</template>
