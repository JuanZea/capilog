<script setup lang="ts">
import { actions } from '@/store';
import ErrorConnectionView from './views/errors/ErrorConnectionView.vue';
actions.initialize();
</script>

<template>
	<ErrorConnectionView />
	<router-view />
</template>
