<script setup lang="ts">
import { orderService } from '@/services';
import { ref } from 'vue';
import { capitalize } from 'lodash';
import { orderStatus } from '@/constants';
import { MapIcon } from '@heroicons/vue/outline';
import OrderDetailModal from '../modals/OrderDetailModal.vue';

const orders = ref();
const data = ref();

const openModal = (payload: any) => {
	data.value = payload;
}

const refreshOrders = async () => (orders.value = await orderService.all());
refreshOrders();
const getBagColor = (status: string): string => {
	switch (status) {
		case orderStatus.FINISHED: {
			return 'border-green-600 bg-green-500';
		}
		case orderStatus.CANCELED: {
			return 'border-red-600 bg-red-500';
		}
		case orderStatus.ASSIGNED: {
			return 'border-blue-600 bg-blue-500';
		}
		default: {
			return 'border-gray-900 bg-gray-800';
		}
	}
};
</script>

<template>
	<OrderDetailModal :data="data" @close="data = undefined" />
	<div class="flex flex-col gap-4">
		<button
			v-for="order in orders"
			class="flex items-center justify-between gap-4 overflow-auto rounded border border-gray-300 bg-gray-200 px-4 py-2"
			@click="openModal(order)"
		>
			<div class="flex divide-x-2 divide-gray-400">
				<MapIcon class="h-5 pr-2" />
				<span class="truncate pl-2 font-medium">{{
					`De ${capitalize(order.firstFarm.farm)} a ${capitalize(order.lastFarm.farm)}`
				}}</span>
			</div>
			<div class="flex gap-4">
				<span
					:class="getBagColor(order.statement.description)"
					class="flex items-center justify-center rounded border px-4 text-sm font-medium text-white shadow"
					>{{ capitalize(order.statement.description) }}</span
				>
			</div>
		</button>
	</div>
</template>
