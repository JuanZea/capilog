<script setup lang="ts">
defineProps<{ clear?: boolean }>();
</script>

<template>
	<div class="select-none font-bold">
		<span :class="clear ? 'text-white' : 'text-gray-800'">CAPI</span>
		<span class="text-capi">LOG</span>
	</div>
</template>
