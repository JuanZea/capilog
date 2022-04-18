<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue';
import { capitalize } from 'lodash';
import { formatDistance, format } from 'date-fns';
import { es } from 'date-fns/locale';

defineEmits<{ (event: 'close'): void }>();

defineProps<{
	data: any;
}>();
</script>

<template>
	<TransitionRoot appear v-if="!!data" :show="!!data" as="template">
		<Dialog as="div" @close="$emit('close')">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="fixed inset-0 bg-black opacity-30" />
					</TransitionChild>

					<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div
							class="my-8 inline-block w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								{{ `De ${capitalize(data.firstFarm.farm)} a ${capitalize(data.lastFarm.farm)}` }}
								<span class="pl-2 text-sm text-gray-400">
									{{ data.isBill ? 'Facturable' : '' }}
								</span>
								<p class="flex mt-2 items-center justify-center rounded border px-4 text-sm font-medium text-white shadow border-gray-900 bg-gray-800">
									{{ data.statement.description }}
								</p>
							</DialogTitle>
							<div class="mt-2">
								<div class="">
									<p class="truncate text-sm font-semibold underline">Punto de recogida</p>
									<p class="truncate text-sm font-semibold">Entrada:</p>
									<p
										v-if="data.arriveDate"
										class="flex items-center gap-2 truncate text-sm font-semibold"
									>
										<span class="text-sm">{{ format(new Date(data.arriveDate), 'hh:mm a') }}</span>
										<span class="text-sm font-normal">{{
											format(new Date(data.arriveDate), 'dd/MM/yyyy')
										}}</span>
										<span class="text-sm font-normal">{{
											`( ${formatDistance(new Date(data.arriveDate), new Date(), {
												locale: es,
												addSuffix: true,
											})} )`
										}}</span>
									</p>
									<p v-else class="truncate text-sm">Sin registrar</p>
									<p class="mt-2 truncate text-sm font-semibold">Salida:</p>
									<p
										v-if="data.exitDate"
										class="flex items-center gap-2 truncate text-sm font-semibold"
									>
										<span class="text-sm">{{ format(new Date(data.exitDate), 'hh:mm a') }}</span>
										<span class="text-sm font-normal">{{
											format(new Date(data.exitDate), 'dd/MM/yyyy')
										}}</span>
										<span class="text-sm font-normal">{{
											`( ${formatDistance(new Date(data.exitDate), new Date(), {
												locale: es,
												addSuffix: true,
											})} )`
										}}</span>
									</p>
									<p v-else class="truncate text-sm">Sin registrar</p>
									<p class="mt-4 truncate text-sm font-semibold underline">Punto de entrega</p>
									<p class="truncate text-sm font-semibold">Entrada:</p>
									<p
										v-if="data.destinationArriveDate"
										class="flex items-center gap-2 truncate text-sm font-semibold"
									>
										<span class="text-sm">{{
											format(new Date(data.destinationArriveDate), 'hh:mm a')
										}}</span>
										<span class="text-sm font-normal">{{
											format(new Date(data.destinationArriveDate), 'dd/MM/yyyy')
										}}</span>
										<span class="text-sm font-normal">{{
											`( ${formatDistance(new Date(data.destinationArriveDate), new Date(), {
												locale: es,
												addSuffix: true,
											})} )`
										}}</span>
									</p>
									<p v-else class="truncate text-sm">Sin registrar</p>
									<p class="mt-2 truncate text-sm font-semibold">Salida:</p>
									<p
										v-if="data.destintionExitDate"
										class="flex items-center gap-2 truncate text-sm font-semibold"
									>
										<span class="text-sm">{{
											format(new Date(data.destintionExitDate), 'hh:mm a')
										}}</span>
										<span class="text-sm font-normal">{{
											format(new Date(data.destintionExitDate), 'dd/MM/yyyy')
										}}</span>
										<span class="text-sm font-normal">{{
											`( ${formatDistance(new Date(data.destintionExitDate), new Date(), {
												locale: es,
												addSuffix: true,
											})} )`
										}}</span>
									</p>
									<p v-else class="truncate text-sm">Sin registrar</p>
									<div v-if="data.truck">
										<p class="mt-4 truncate text-sm font-semibold underline">Camión</p>
										<span class="mr-2 truncate text-sm font-semibold">Placa:</span>
										<span class="truncate text-sm">{{ data.truck.license }}</span>
										<div>
											<span class="mr-2 truncate text-sm font-semibold">Identificación:</span>
											<span class="truncate text-sm">{{ data.truck.dniDriver }}</span>
										</div>
										<div>
											<span class="mr-2 truncate text-sm font-semibold">Conductor:</span>
											<span class="truncate text-sm">{{ data.truck.driverName }}</span>
										</div>
										<div>
											<span class="mr-2 truncate text-sm font-semibold">Externo:</span>
											<span class="truncate text-sm">{{
												data.truck.isExternal ? 'Si' : 'No'
											}}</span>
										</div>
									</div>
									<p v-else class="mt-4 truncate text-sm font-semibold underline">
										Sin camión asignado
									</p>
								</div>
							</div>

							<div class="mt-4 w-full">
								<button class="btn btn-danger w-full font-semibold text-white" @click="$emit('close')">
									Cerrar
								</button>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
