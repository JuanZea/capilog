<script setup lang="ts">
import { actions } from '@/store';
import { navSections } from '@/constants';
import {
	ClipboardCheckIcon,
	TruckIcon,
	ChartBarIcon,
	FolderIcon,
	TicketIcon,
	ClipboardCopyIcon,
	UsersIcon,
	GlobeIcon,
} from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';

const route = useRoute();
const { name } = route;

const sections = [
	{
		nav: navSections.ADMIN,
		role: actions.roles.isAdmin,
	},
	{
		nav: navSections.MANAGEMENT,
		role: actions.roles.isAdmin,
	},
	{
		nav: navSections.SHIPPING_MANAGEMENT,
		role: actions.roles.isCoordinator,
	},
	{
		nav: navSections.SHIPPING,
		role: actions.roles.isSupervisor,
	},
	{
		nav: navSections.TRACING,
		role: actions.roles.isDoorman,
	},
];

const navs = {
	users: { name: 'Usuarios', to: { name: 'users.index' }, icon: UsersIcon, current: name === 'users.index' },
	routes: { name: 'Rutas', to: { name: 'routes' }, icon: GlobeIcon, current: name === 'routes' },
	reports: { name: 'Reportes', to: { name: 'reports' }, icon: ChartBarIcon, current: name === 'reports' },
	dialIn: { name: 'Registrar entrada', to: { name: 'dialIn' }, icon: ClipboardCopyIcon, current: name === 'dialIn' },
	dialOut: {
		name: 'Registrar salida',
		to: { name: 'dialOut' },
		icon: ClipboardCheckIcon,
		current: name === 'dialOut',
	},
	pendingRequests: {
		name: 'Solicitudes pendientes',
		to: { name: 'pendingRequests' },
		icon: FolderIcon,
		current: name === 'pendingRequests',
	},
	requestShipment: {
		name: 'Solicitar envío',
		to: { name: 'requestShipment' },
		icon: TicketIcon,
		current: name === 'requestShipment',
	},
	checkShipments: {
		name: 'Revisar envíos',
		to: { name: 'checkShipments' },
		icon: TruckIcon,
		current: name === 'checkShipments',
	},
};

const adminNavs = [navs.users, navs.routes, navs.reports, navs.dialIn, navs.dialOut];
const manageNavs = [navs.pendingRequests, navs.requestShipment, navs.checkShipments];
const shippingManagementNavs = [navs.pendingRequests, navs.reports];
const shippingNavs = [navs.requestShipment, navs.checkShipments];
const tracingNavs = [navs.dialIn, navs.dialOut];

const navigation = {
	[navSections.ADMIN]: adminNavs,
	[navSections.MANAGEMENT]: manageNavs,
	[navSections.SHIPPING_MANAGEMENT]: shippingManagementNavs,
	[navSections.SHIPPING]: shippingNavs,
	[navSections.TRACING]: tracingNavs,
};
</script>

<template>
	<nav>
		<div v-for="section in sections">
			<div class="py-4" v-if="section.role()">
				<div class="bg-gray-900 py-2 px-4 text-center font-semibold text-white shadow shadow-gray-700">
					{{ section.nav }}
				</div>
				<div class="mt-2 space-y-1 px-2">
					<router-link
						v-for="item in navigation[section.nav]"
						:key="item.name"
						:to="item.to"
						:class="[
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'group flex items-center rounded-md px-2 py-2 text-base font-medium',
						]"
					>
						<component
							:is="item.icon"
							:class="[
								item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
								'mr-4 h-6 w-6 flex-shrink-0',
							]"
							aria-hidden="true"
						/>
						{{ item.name }}
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>
