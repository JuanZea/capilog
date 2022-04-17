<script setup lang="ts">
import GuestLayout from '../layouts/GuestLayout.vue';
import CapilogTitle from '@/components/CapilogTitle.vue';
import LoginForm from '@/components/forms/LoginForm.vue';

</script>

<template>
	<GuestLayout>
		<div class="flex flex-col gap-6 h-full">
			<CapilogTitle class="mt-10 text-center text-4xl" />
			<div class="max-w-xs mx-auto w-full shadow rounded-xl overflow-hidden"><LoginForm /></div>
			<div class="flex-grow flex justify-center items-end pb-4">
				<span class="text-gray-400">Versión 2.0.0</span>
			</div>
		</div>
	</GuestLayout>
</template>
