<script setup lang="ts">
import { getNameInitials } from '@/helpers';

defineProps<{
	name: string;
}>();
</script>

<template>
	<div class="flex items-center justify-center bg-gray-600 font-bold text-white shadow h-9 w-9 rounded-full">
		<span>{{ getNameInitials(name) }}</span>
	</div>
</template>
