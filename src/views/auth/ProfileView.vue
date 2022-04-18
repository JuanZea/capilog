<script setup lang="ts">
import { state } from '@/store';
import { capitalize } from 'lodash';
import AuthLayout from '../layouts/AuthLayout.vue';
</script>

<template>
	<AuthLayout :title="`${state.user.name} ${state.user.lastname}`">
		<div v-if="state.user" class="flex flex-col gap-4">
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Correo electrónico:</span>
				<span class="text-gray-500">{{ state.user.email }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Identificación:</span>
				<span class="text-gray-500">{{ state.user.dni }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Teléfono:</span>
				<span class="text-gray-500">{{ state.user.phone }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Rol:</span>
				<span v-if="state.user.role.role === 'ADMIN'" class="text-gray-500">Administrador</span>
				<span v-else class="text-gray-500">{{ capitalize(state.user.role.role) }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Finca:</span>
				<span class="text-gray-500">{{
					`${capitalize(state.user.farm.farm)} (${capitalize(state.user.farm.location)})`
				}}</span>
			</div>
		</div>
	</AuthLayout>
</template>
