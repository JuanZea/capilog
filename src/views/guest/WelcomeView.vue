<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/outline';
import GuestLayout from '@/views/layouts/GuestLayout.vue';
import CapilogTitle from '@/components/CapilogTitle.vue';
</script>

<template>
	<GuestLayout>
		<div class="flex flex-col gap-6 h-full">
			<CapilogTitle class="mt-10 text-center text-4xl" />
			<div class="flex flex-col text-center font-semibold text-gray-600 lg:text-2xl">
				<span>Sistema de logística interna de envíos</span>
				<span>Flores El Capiro</span>
			</div>
			<div class="flex justify-center">
				<router-link :to="{ name: 'login' }" class="btn btn-primary flex items-center gap-2 text-white">
					<UserCircleIcon class="h-6" />
					<span>Iniciar Sesión</span>
				</router-link>
			</div>
			<div class="flex-grow flex justify-center items-end pb-4">
				<span class="text-gray-400">Versión 2.0.0</span>
			</div>
		</div>
	</GuestLayout>
</template>
