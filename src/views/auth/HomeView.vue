<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
</script>

<template>
	<AuthLayout title="Inicio">
		<p>
			<span class="font-bold">Capilog</span> es una herramienta web para facilitar la comunicación entre los
			actores del proceso logistico (gestión de solicitudes de transporte) en la empresa
			<a target="_blank" class="text-green-600 underline" href="https://www.capiro.co/">Capiro</a>.

			<iframe class="w-full h-[700px] mt-4" src="https://www.capiro.co/blog/">
				Fallback text for non-supported browsers
			</iframe>
		</p>
	</AuthLayout>
</template>
