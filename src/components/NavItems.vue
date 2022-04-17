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

const adminNavs = [
	{ name: 'Usuarios', to: '#', icon: UsersIcon, current: true },
	{ name: 'Rutas', to: '#', icon: GlobeIcon, current: false },
	{ name: 'Reportes', to: '#', icon: ChartBarIcon, current: false },
	{ name: 'Registrar entrada', to: '#', icon: ClipboardCopyIcon, current: false },
	{ name: 'Registrar salida', to: '#', icon: ClipboardCheckIcon, current: false },
];

const manageNavs = [
	{ name: 'Solicitudes pendientes', to: '#', icon: FolderIcon, current: true },
	{ name: 'Solicitar envío', to: '#', icon: TicketIcon, current: false },
	{ name: 'Revisar envíos', to: '#', icon: TruckIcon, current: false },
];

const shippingManagementNavs = [
	{ name: 'Solicitudes pendientes', to: '#', icon: FolderIcon, current: true },
	{ name: 'Reportes', to: '#', icon: ChartBarIcon, current: false },
];

const shippingNavs = [
	{ name: 'Solicitar envío', to: '#', icon: TicketIcon, current: true },
	{ name: 'Revisar envíos', to: '#', icon: TruckIcon, current: false },
];

const tracingNavs = [
	{ name: 'Registrar entrada', to: '#', icon: ClipboardCopyIcon, current: true },
	{ name: 'Registrar salida', to: '#', icon: ClipboardCheckIcon, current: false },
];

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
