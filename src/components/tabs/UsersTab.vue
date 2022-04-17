<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { name } = route;

const tabs = [
	{ name: 'Listado de usuarios', to: { name: 'users.index' }, current: name === 'users.index' },
	{ name: 'Crear un nuevo usuario', to: { name: 'users.create' }, current: name === 'users.create' },
];

const go = (event: Event) => {
	router.push(tabs[(<HTMLSelectElement>event.target).options.selectedIndex].to);
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
				@change="go"
			>
				<option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
			</select>
		</div>
		<div class="hidden sm:block">
			<div class="border-b border-gray-200">
				<nav class="-mb-px flex space-x-8" aria-label="Tabs">
					<router-link
						v-for="tab in tabs"
						:key="tab.name"
						:to="tab.to"
						:class="[
							tab.current
								? 'border-gray-500 text-gray-600'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
							'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
						]"
						:aria-current="tab.current ? 'page' : undefined"
					>
						{{ tab.name }}
					</router-link>
				</nav>
			</div>
		</div>
	</div>
</template>
