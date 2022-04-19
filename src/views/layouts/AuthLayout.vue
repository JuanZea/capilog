<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import NavItems from '@/components/NavItems.vue';
import CapilogTitle from '@/components/CapilogTitle.vue';
import { ref } from 'vue';
import { capitalize } from 'lodash';
import { state, actions } from '@/store';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/vue/outline';
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';

const sidebarOpen = ref(false);

defineProps<{
	title: string;
}>();
</script>

<template>
	<div>
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="fixed inset-0 z-40 flex md:hidden" @close="sidebarOpen = false">
				<TransitionChild
					as="template"
					enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>
				<TransitionChild
					as="template"
					enter="transition ease-in-out duration-300 transform"
					enter-from="-translate-x-full"
					enter-to="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leave-from="translate-x-0"
					leave-to="-translate-x-full"
				>
					<div class="bg-sidebar relative flex w-full max-w-xs flex-1 flex-col">
						<TransitionChild
							as="template"
							enter="ease-in-out duration-300"
							enter-from="opacity-0"
							enter-to="opacity-100"
							leave="ease-in-out duration-300"
							leave-from="opacity-100"
							leave-to="opacity-0"
						>
							<div class="absolute top-0 right-0 -mr-12 pt-2">
								<button
									type="button"
									class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									@click="sidebarOpen = false"
								>
									<span class="sr-only">Close sidebar</span>
									<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
								</button>
							</div>
						</TransitionChild>
						<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
							<div class="flex flex-shrink-0 items-center px-4">
								<button @click="$router.push({ name: 'home' })">
									<CapilogTitle class="text-3xl" clear />
								</button>
							</div>
							<NavItems />
						</div>
						<div class="flex flex-shrink-0 border-t border-gray-600 bg-gray-800 p-4">
							<div class="group block w-full flex-shrink-0">
								<div class="flex items-center">
									<button @click="$router.push({ name: 'profile' })" class="flex items-center">
										<div>
											<Avatar :name="state.user?.name" />
										</div>
										<div class="ml-3">
											<p class="text-sm font-medium text-white">
												{{ capitalize(state.user?.name) }}
											</p>
											<p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">
												Ver perfil
											</p>
										</div>
									</button>
									<div class="ml-auto">
										<button
											class="btn btn-danger flex gap-2 px-2 font-semibold text-white ring-offset-gray-800"
											@click="actions.auth.logout"
										>
											Salir
											<LogoutIcon class="h-5" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TransitionChild>
				<div class="w-14 flex-shrink-0"></div>
			</Dialog>
		</TransitionRoot>

		<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
			<div class="bg-sidebar flex min-h-0 flex-1 flex-col">
				<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
					<div class="flex flex-shrink-0 items-center px-4">
						<button @click="$router.push({ name: 'home' })">
							<CapilogTitle class="text-3xl" clear />
						</button>
					</div>
					<NavItems />
				</div>
				<div class="flex flex-shrink-0 border-t border-gray-600 bg-gray-800 p-4">
					<div class="group block w-full flex-shrink-0">
						<div class="flex items-center">
							<button @click="$router.push({ name: 'profile' })" class="flex items-center">
								<div>
									<Avatar :name="state.user?.name" />
								</div>
								<div class="ml-3">
									<p class="truncate text-sm font-medium text-white">
										{{ capitalize(state.user?.name) }}
									</p>
									<p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">
										Ver perfil
									</p>
								</div>
							</button>
							<div class="ml-auto">
								<button
									class="btn btn-danger flex gap-2 px-2 font-semibold text-white ring-offset-gray-800"
									@click="actions.auth.logout"
								>
									Salir
									<LogoutIcon class="h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-1 flex-col md:pl-64">
			<div class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
				<button
					type="button"
					class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
					@click="sidebarOpen = true"
				>
					<span class="sr-only">Open sidebar</span>
					<MenuIcon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<main class="flex-1">
				<div class="py-6">
					<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
					</div>
					<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
						<div class="py-4">
							<slot />
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
