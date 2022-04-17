<script setup lang="ts">
import { actions } from '@/store';

actions.initialize();
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<router-view />
</template>
