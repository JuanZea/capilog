<script setup lang="ts">
import Alert from '../Alert.vue';

const emit = defineEmits<{ (event: 'update:modelValue', value?: string): void }>();

defineProps<{
	id: string;
	label?: string;
	placeholder?: string;
	modelValue?: string;
	error?: string;
}>();

const updateModelValue = (event: Event) => {
	emit('update:modelValue', (<HTMLInputElement>event.target).value);
};
</script>

<template>
	<div>
		<label v-if="label" :for="id" :class="error ? 'text-red-700' : 'text-gray-700'" class="mb-1 block font-medium">
			{{ label }}
		</label>
		<div class="flex flex-col">
			<select
				:class="
					error
						? 'border-red-300 bg-red-50 text-red-500 focus:border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
				"
				class="block w-full rounded-md shadow-sm sm:text-sm"
			>
				<slot />
			</select>
			<Alert v-if="error" class="mt-1" :text="error" slim error />
		</div>
	</div>
</template>
