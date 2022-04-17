<script setup lang="ts">
import { CheckIcon, ExclamationIcon } from '@heroicons/vue/outline';

defineProps<{
	text: string;
	error?: boolean;
	slim?: boolean;
}>();
</script>

<template>
	<div
		class="mb-2 flex gap-2 rounded border bg-opacity-70 text-sm items-center"
		:class="[
			slim ? 'px-2 py-1' : 'px-6 py-3',
			error ? 'border-red-600 bg-red-50 text-red-600' : 'border-green-600 bg-green-50 text-green-600',
		]"
	>
		<ExclamationIcon v-if="error" :class="slim ? 'h-5' : 'h-7'" />
		<CheckIcon v-else :class="slim ? 'h-5' : 'h-7'" />
		<span>{{ text }}</span>
	</div>
</template>
