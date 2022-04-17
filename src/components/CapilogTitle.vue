<script setup lang="ts">
defineProps<{
	clear?: boolean;
	hoverable?: boolean;
}>();
</script>

<template>
	<div :class="{ 'duration-100 hover:scale-75': hoverable }" class="select-none font-bold">
		<span :class="clear ? 'text-white' : 'text-gray-800'">CAPI</span>
		<span class="text-capi">LOG</span>
	</div>
</template>
