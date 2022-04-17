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
		class="mb-2 flex gap-2 rounded border bg-opacity-70 text-sm"
		:class="[
			slim ? 'px-2 py-1' : 'px-6 py-3',
			error ? 'border-red-600 bg-red-50 text-red-600' : 'border-green-600 bg-green-50 text-green-600',
		]"
	>
		<ExclamationIcon v-if="error" class="h-5" />
		<CheckIcon v-else class="h-5" />
		<span>{{ text }}</span>
	</div>
</template>
