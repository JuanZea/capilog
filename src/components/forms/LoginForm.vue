<script setup lang="ts">
import VInput from '@/components/inputs/VInput.vue';
import { ref } from 'vue';
import { actions } from '@/store';
import { authService } from '@/services';
import { useForm, useField } from 'vee-validate';
import { object, string, setLocale } from 'yup';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/solid';
import * as yupEs from '@/lang/yupEs';
import Alert from '../Alert.vue';

setLocale(yupEs);

const { meta, errors, resetForm, handleSubmit } = useForm<{ document: string; password: string }>({
	validationSchema: object({
		document: string().min(6).max(20).required().label('El documento'),
		password: string().min(8).max(256).required().label('La contraseña'),
	}),
});

const { value: document } = useField<string>('document');
const { value: password } = useField<string>('password');

const invalidData = ref(false);

const submit = handleSubmit((values) => {
	const data = {
		dni: values.document,
		password: values.password,
	};
	authService
		.login(data)
		.then(actions.auth.login)
		.catch(() => {
			invalidData.value = true;
			resetForm();
		});
});
</script>

<template>
	<div class="bg-white p-4">
		<h1 class="text-center text-2xl font-semibold text-gray-600">Inicio de sesión</h1>
		<hr />
		<Alert
			v-if="invalidData && !meta.dirty"
			class="mt-4"
			error
			text="Datos erróneos. Por favor, inténtelo otra vez."
		/>
		<form id="login" @submit.prevent="submit" class="mt-4 flex flex-col gap-4">
			<VInput v-model="document" id="document" label="Identificación" :error="errors.document" />
			<VInput v-model="password" id="password" type="password" label="Contraseña" :error="errors.password" />
			<div class="mt-4 flex flex-col">
				<button
					form="login"
					:class="{ 'pointer-events-none opacity-50 grayscale': !meta.valid }"
					:disabled="!meta.valid"
					class="btn btn-primary grid grid-cols-3 font-semibold text-white"
				>
					<span class="col-start-2 text-center">Entrar</span>
					<div class="flex justify-end"><ArrowRightIcon class="h-5" /></div>
				</button>
				<router-link :to="{ name: 'welcome' }" class="btn btn-dark grid grid-cols-3 font-semibold text-white">
					<div class="flex justify-start"><ArrowLeftIcon class="h-5" /></div>
					<span class="text-center">Volver</span>
				</router-link>
			</div>
		</form>
	</div>
</template>
