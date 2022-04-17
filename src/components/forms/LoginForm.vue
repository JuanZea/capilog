<script setup lang="ts">
import VInput from '@/components/inputs/VInput.vue';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/vue/solid'
</script>

<template>
	<div class="bg-white p-4">
		<h1 class="text-center text-2xl font-semibold text-gray-600">Inicio de sesión</h1>
		<hr />
		<div class="mt-8 flex flex-col gap-4">
			<VInput label="Identificación" />
			<VInput type="password" label="Contraseña" />
			<div class="flex flex-col mt-4">
				<button class="btn btn-primary font-semibold text-white grid grid-cols-3">
					<span class="col-start-2">Entrar</span>
					<div class="flex justify-end"><ArrowRightIcon class="h-5"/></div>
				</button>
				<button class="btn btn-dark font-semibold text-white grid grid-cols-3">
					<div class="flex justify-start"><ArrowLeftIcon class="h-5"/></div>
					<span>Volver</span>
				</button>
			</div>
		</div>
	</div>
</template>
