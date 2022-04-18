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
</script>

<template>
	<AuthLayout title="Marcar envío">
		<Alert v-if="label" :text="label" />
		<div class="grid grid-cols-3 gap-4 items-end max-w-xl">
			<VSelect v-if="orders" v-model="order" label="Id de la orden" id="order" class="col-span-3 sm:col-span-1">
				<option v-for="item in orders.map((order: any) => order.idOrder)" :key="item">{{ item }}</option>
			</VSelect>
			<button @click="dialIn" class="btn btn-primary flex gap-2 font-semibold text-white col-span-3 sm:col-span-1">
				<PencilIcon class="h-5" />
				Marcar entrada
			</button>
			<button @click="dialOut" class="btn btn-dark flex gap-2 font-semibold text-white col-span-3 sm:col-span-1">
				<PencilIcon class="h-5" />
				Marcar salida
			</button>
		</div>
	</AuthLayout>
</template>
