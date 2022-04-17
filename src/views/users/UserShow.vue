<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import UsersTab from '@/components/tabs/UsersTab.vue';
</script>

<template>
	<AuthLayout title="Usuarios">
		<p class="text-gray-500">Gestione los usuarios de capilog.</p>
		<UsersTab class="my-4"/>
		<div class="flex max-w-sm rounded-xl bg-gray-200 p-4">
			<div>1</div>
			<div>2</div>
		</div>
	</AuthLayout>
</template>
