<script setup lang="ts">
import VInput from '@/components/inputs/VInput.vue';
import VSelect from '../selects/VSelect.vue';
import { PlusIcon } from '@heroicons/vue/solid';
</script>

<template>
	<div class="max-w-3xl bg-white px-4 py-5 sm:p-6">
		<div class="mt-2 md:col-span-2 md:mt-0">
			<form action="#" method="POST">
				<div class="grid grid-cols-2 gap-6">
					<div class="col-span-2 grid grid-cols-2 gap-6">
						<div class="col-span-2 sm:col-span-1">
							<VInput id="1" label="Identificación" />
						</div>
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" label="Nombre" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" label="Apellido" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" label="Correo electrónico" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" label="Teléfono" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VSelect id="1" label="Finca" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VSelect id="1" label="Rol" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" type="password" label="Contraseña" />
					</div>

					<div class="col-span-2 sm:col-span-1">
						<VInput id="1" type="password" label="Confirmar contraseña" />
					</div>
				</div>
				<div class="flex justify-center py-6">
					<button class="btn btn-primary font-semibold text-white flex gap-2">
						<PlusIcon class="h-5"/>
						Crear nuevo usuario
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
