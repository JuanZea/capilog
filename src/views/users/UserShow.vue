<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import UsersTab from '@/components/tabs/UsersTab.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { userService } from '@/services';
import { TrashIcon } from '@heroicons/vue/solid';
import { capitalize } from 'lodash';

const router = useRouter();
const route = useRoute();
const { params } = route;

const user = ref();

userService.one(params.document as string).then((response) => (user.value = response));

const destroy = () => {
	const confirm = window.confirm(`¿Estas seguro que quieres eliminar a ${user.value.name}?`);
	if (!confirm) return;
	userService.destroy(user.value.dni);
	router.push({ name: 'users.index' });
};
</script>

<template>
	<AuthLayout title="Usuarios">
		<p class="text-gray-500">Gestione los usuarios de capilog.</p>
		<UsersTab class="my-4" />
		<div v-if="user" class="flex flex-col gap-4 p-4">
			<h2 class="text-3xl font-semibold">{{ `${user.name} ${user.lastname}` }}</h2>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Correo electrónico:</span>
				<span class="text-gray-500">{{ user.email }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Identificación:</span>
				<span class="text-gray-500">{{ user.dni }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Teléfono:</span>
				<span class="text-gray-500">{{ user.phone }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Rol:</span>
				<span v-if="user.role.role === 'ADMIN'" class="text-gray-500">Administrador</span>
				<span v-else class="text-gray-500">{{ capitalize(user.role.role) }}</span>
			</div>
			<div class="flex gap-2">
				<span class="font-semibold text-gray-900">Finca:</span>
				<span class="text-gray-500">{{
					`${capitalize(user.farm.farm)} (${capitalize(user.farm.location)})`
				}}</span>
			</div>
			<div>
				<button @click="destroy" class="btn btn-danger flex gap-2 font-semibold text-white">
					<TrashIcon class="h-7" />
					Eliminar
				</button>
			</div>
		</div>
	</AuthLayout>
</template>
