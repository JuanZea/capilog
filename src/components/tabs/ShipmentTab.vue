<script setup lang="ts">
import VInput from '../inputs/VInput.vue';
import VSelect from '../selects/VSelect.vue';
import { computed, ref } from 'vue';
import { orderService } from '@/services';
import { format } from 'date-fns';
import { PencilIcon } from '@heroicons/vue/outline'

const orders = ref();

const order = ref();
const date = ref(format(Date.now(), 'yyyy-MM-dd'));
const time = ref(format(Date.now(), 'HH:mm'));

const sendData = () => {
	console.log(date.value, time.value, order.value)
}

const refreshOrders = async () => (orders.value = await orderService.all());
refreshOrders();

const enter = ref(true);

const tabs = computed(() => [
	{ name: 'Registrar entrada de camión', current: enter.value },
	{ name: 'Registrar salida de camión', current: !enter.value },
]);

const switchTab = (tab: string) => {
	if (tab === 'Registrar entrada de camión') enter.value = true;
	else enter.value = false;
};

const changeTab = (event: Event) => {
	if (tabs.value[(<HTMLSelectElement>event.target).options.selectedIndex].name === 'Registrar entrada de camión')
		enter.value = true;
	else enter.value = false;
};
</script>

<template>
	<div>
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select a tab</label>
			<select
				id="tabs"
				name="tabs"
				class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
				@change="changeTab"
			>
				<option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
			</select>
		</div>
		<div class="hidden sm:block">
			<div class="border-b border-gray-200">
				<nav class="-mb-px flex space-x-8" aria-label="Tabs">
					<button
						v-for="tab in tabs"
						@click="switchTab(tab.name)"
						:key="tab.name"
						:class="[
							tab.current
								? 'border-gray-500 text-gray-600'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
							'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
						]"
						:aria-current="tab.current ? 'page' : undefined"
					>
						{{ tab.name }}
					</button>
				</nav>
			</div>
		</div>
		<div class="mt-4 max-w-md grid grid-cols-3 mx-auto gap-6">
			<VSelect v-if="orders" v-model="order" label="Id de la orden" id="order" class="col-span-3 sm:col-span-1">
				<option v-for="item in orders.map((order: any) => order.idOrder)" :key="item">{{ item }}</option>
			</VSelect>
			<VInput label="Fecha" id="date" type="date" v-model="date" class="col-span-3 sm:col-span-1" />
			<VInput label="Hora" id="time" type="time" v-model="time" class="col-span-3 sm:col-span-1" />
		</div>
		<div class="flex justify-center mt-4">
			<button @click="sendData" class="flex gap-2 btn btn-dark font-semibold text-white">
				<PencilIcon class="h-5" />
				Marcar
			</button>
		</div>
	</div>
</template>
