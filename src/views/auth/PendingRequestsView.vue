<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import ShipmentList from '@/components/lists/ShipmentList.vue';
import { orderStatus } from '@/constants';
</script>

<template>
	<AuthLayout title="Solicitudes pendientes">
		<ShipmentList :status="orderStatus.REQUESTED" />
	</AuthLayout>
</template>
