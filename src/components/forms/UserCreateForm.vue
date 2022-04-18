<script setup lang="ts">
import VInput from '@/components/inputs/VInput.vue';
import VSelect from '../selects/VSelect.vue';
import { ref } from 'vue';
import { userService } from '@/services';
import { PlusIcon } from '@heroicons/vue/solid';
import { setLocale, object, string } from 'yup';
import { useField, useForm } from 'vee-validate';
import * as yupEs from '@/lang/yupEs';
import { state } from '@/store';
import { capitalize } from 'lodash';
import Alert from '../Alert.vue';

setLocale(yupEs);
const created = ref(false);

const { resetForm, handleSubmit, errors } = useForm<any>({
	validationSchema: object({
		name: string().min(2).max(20).required().label('El nombre'),
		lastName: string().min(2).max(20).required().label('El apellido'),
		email: string().email().required().label('El correo electrónico'),
		document: string().min(6).max(20).required().label('El documento'),
		phone: string().min(10).max(15).required().label('El telefono'),
		farm: string().required().label('La finca'),
		role: string().required().label('El rol'),
		password: string().min(8).max(256).required().label('La contraseña'),
		passwordConfirm: string().min(8).max(256).required().label('La confirmación de contraseña'),
	}),
});

const { value: name } = useField<string>('name');
const { value: lastName } = useField<string>('lastName');
const { value: email } = useField<string>('email');
const { value: document } = useField<string>('document');
const { value: role } = useField<string>('role');
const { value: farm } = useField<string>('farm');
const { value: phone } = useField<string>('phone');
const { value: password } = useField<string>('password');
const { value: passwordConfirm, setErrors } = useField<string>('passwordConfirm');

const submit = handleSubmit((values) => {
	if (values.password !== values.passwordConfirm) {
		setErrors('Las claves no coinciden')
		return;
	}
	const data = {
		dni: values.document,
		name: values.name,
		lastname: values.lastName,
		role: (<string>values.role).toUpperCase(),
		password: values.password,
		phone: values.phone,
		email: values.email,
		farm: (<string>values.farm).toUpperCase(),
	};
	userService.create(data).then(() => {
		resetForm();
		created.value = true;
	});
});


</script>

<template>
	<Alert v-if="created" text="Usuario creado exitosamente" />
	<div class="max-w-3xl bg-white px-4 py-5 sm:p-6">
		<div class="mt-2 md:col-span-2 md:mt-0">
			<form id="create" @submit.prevent="submit" action="#" method="POST">
				<div class="grid grid-cols-2 gap-6">
					<div class="col-span-2 grid grid-cols-2 gap-6">
						<div class="col-span-2 sm:col-span-1">
							<VInput id="document" v-model="document" label="Identificación" :error="errors.document" />
						</div>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="name" v-model="name" label="Nombre" :error="errors.name" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="lastName" v-model="lastName" label="Apellido" :error="errors.lastName" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="email" v-model="email" label="Correo electrónico" :error="errors.email" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="phone" v-model="phone" label="Teléfono" :error="errors.phone" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VSelect id="farm" v-model="farm" label="Finca" :error="errors.farm">
							<option v-for="item in state.farms" :key="item.idFarm">{{ capitalize(item.farm) }}</option>
						</VSelect>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VSelect id="role" v-model="role" label="Rol" :error="errors.role">
							<option v-for="item in state.roles" :key="item.id">{{ capitalize(item.role) }}</option>
						</VSelect>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput
							id="password"
							v-model="password"
							type="password"
							label="Contraseña"
							:error="errors.password"
						/>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput
							id="passwordConfirm"
							v-model="passwordConfirm"
							type="password"
							label="Confirmar contraseña"
							:error="errors.passwordConfirm"
						/>
					</div>
				</div>
				<div class="flex justify-center py-6">
					<button form="create" class="btn btn-primary flex gap-2 font-semibold text-white">
						<PlusIcon class="h-5" />
						Crear nuevo usuario
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
