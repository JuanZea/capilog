<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import UsersTab from '@/components/tabs/UsersTab.vue';
import UsersList from '../../components/lists/UsersList.vue';
</script>

<template>
	<AuthLayout title="Usuarios">
		<p class="text-gray-500">Gestione los usuarios de capilog.</p>
		<UsersTab class="my-4"/>
		<UsersList />
	</AuthLayout>
</template>
