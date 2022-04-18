<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import RequestShipmentForm from '@/components/forms/RequestShipmentForm.vue';
</script>

<template>
	<AuthLayout title="Solicitar envío">
		<p class="text-gray-500">Solicite envios entre las fincas.</p>
		<div>
			<RequestShipmentForm />
		</div>
	</AuthLayout>
</template>
