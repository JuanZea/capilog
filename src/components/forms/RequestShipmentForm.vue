<script setup lang="ts">
import { ref } from 'vue';
import { state } from '@/store';
import { capitalize } from 'lodash';
import { TicketIcon } from '@heroicons/vue/outline';
import VSelect from '../selects/VSelect.vue';
import VInput from '../inputs/VInput.vue';
import Alert from '../Alert.vue';
import { useField, useForm } from 'vee-validate';
import { object, setLocale, string } from 'yup';
import { format } from 'date-fns';
import * as yupEs from '@/lang/yupEs';
import VTextArea from '../inputs/VTextArea.vue';
import { orderService } from '../../services/orderService';

const requested = ref(false);

setLocale(yupEs);

const { meta, errors, resetForm, handleSubmit } = useForm<any>({
	validationSchema: object({
		startSite: string().required().label('El lugar de recogida'),
		endSite: string().required().label('El lugar de entrega'),
		date: string().required().label('La fecha de recogida'),
		time: string().required().label('La hora de recogida'),
		description: string().max(256).label('La descripción'),
	}),
	initialValues: {
		startSite: '',
		endSite: '',
		date: format(Date.now(), 'yyyy-MM-dd'),
		time: format(Date.now(), 'HH:mm'),
		description: '',
	},
});

const { value: startSite } = useField<string>('startSite');
const { value: endSite } = useField<string>('endSite');
const { value: date } = useField<string>('date');
const { value: time } = useField<string>('time');
const { value: description } = useField<string>('description');

const submit = handleSubmit((values) => {
	const data = {
		firstFarm: values.startSite,
		lastFarm: values.endSite,
		startDate: `${values.date} ${values.time}`,
		description: values.description,
	};
	console.log(data)
	orderService.create(data).then(() => {
		resetForm();
		requested.value = true;
	});
});
</script>

<template>
	<Alert v-if="requested" text="Solicitud creado exitosamente" />
	<div class="max-w-3xl bg-white px-4 py-5 sm:p-6">
		<div class="mt-2 md:col-span-2 md:mt-0">
			<form id="request" @submit.prevent="submit" action="#" method="POST">
				<div class="grid grid-cols-2 gap-6">
					<div class="col-span-2 sm:col-span-1">
						<VSelect id="farm" v-model="startSite" label="Finca de recogida" :error="errors.startSite">
							<option v-for="item in state.farms" :key="item.idFarm">{{ capitalize(item.farm) }}</option>
						</VSelect>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VSelect id="farm" v-model="endSite" label="Finca de entrega" :error="errors.endSite">
							<option v-for="item in state.farms" :key="item.idFarm">{{ capitalize(item.farm) }}</option>
						</VSelect>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="date" v-model="date" label="Fecha de recogida" type="date" :error="errors.date" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="time" v-model="time" label="Hora de recogida" type="time" :error="errors.time" />
					</div>

					<div class="col-span-2">
						<VTextArea
							id="description"
							v-model="description"
							label="Descripción"
							:error="errors.description"
						/>
					</div>
				</div>
				<div class="flex justify-center py-6">
					<button form="request" class="btn btn-primary flex gap-2 font-semibold text-white">
						<TicketIcon class="h-5" />
						Solicitar envío
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
