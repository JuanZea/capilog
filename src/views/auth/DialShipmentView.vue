<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import { PencilIcon } from '@heroicons/vue/outline';
import Alert from '@/components/Alert.vue';
import { ref } from 'vue';
import { orderService } from '@/services';
import VSelect from '@/components/selects/VSelect.vue';

const label = ref();
const order = ref();
const orders = ref();

const refreshOrders = async () => (orders.value = await orderService.all());
refreshOrders();

// const refreshTrucks = async () => (orders.value = await orderService.truck());
// refreshOrders();

const dialIn = () => {
	const confirm = window.confirm('Confirmar entrada');
	if (confirm) orderService.markArriveDate(order.value);
	label.value = 'Entrada marcada';
};

const dialOut = () => {
	const confirm = window.confirm('Confirmar salida');
	if (confirm) orderService.markExitDate(order.value);
	label.value = 'Salida marcada';
};

const dialExitIn = () => {
	const confirm = window.confirm('Confirmar entrada');
	if (confirm) orderService.markDestinationArriveDate(order.value);
	label.value = 'Entrada marcada';
};

const dialExitOut = () => {
	const confirm = window.confirm('Confirmar salida');
	if (confirm) orderService.markDestinationExitDate(order.value);
	label.value = 'Salida marcada';
};
</script>

<template>
	<AuthLayout title="Marcar envío">
		<Alert v-if="label" :text="label" />
		<div class="grid max-w-xl grid-cols-2 items-end gap-4">
			<div class="col-span-2 grid grid-cols-2">
				<VSelect
					v-if="orders"
					v-model="order"
					label="Id de la orden"
					id="order"
					class="col-span-2 sm:col-span-1"
				>
					<option v-for="item in orders.map((order: any) => order.idOrder)" :key="item">{{ item }}</option>
				</VSelect>
			</div>
			<div class="col-span-2 text-2xl font-semibold text-gray-600">Finca de recogida</div>
			<button
				@click="dialIn"
				class="btn btn-primary col-span-2 flex gap-2 font-semibold text-white sm:col-span-1"
			>
				<PencilIcon class="h-5" />
				Marcar entrada
			</button>
			<button @click="dialOut" class="btn btn-dark col-span-2 flex gap-2 font-semibold text-white sm:col-span-1">
				<PencilIcon class="h-5" />
				Marcar salida
			</button>
			<div class="col-span-2 text-2xl font-semibold text-gray-600">Finca de entrega</div>
			<button
				@click="dialExitIn"
				class="btn btn-primary col-span-2 flex gap-2 font-semibold text-white sm:col-span-1"
			>
				<PencilIcon class="h-5" />
				Marcar entrada
			</button>
			<button
				@click="dialExitOut"
				class="btn btn-dark col-span-2 flex gap-2 font-semibold text-white sm:col-span-1"
			>
				<PencilIcon class="h-5" />
				Marcar salida
			</button>
		</div>
	</AuthLayout>
</template>
