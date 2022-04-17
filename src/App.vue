<script setup lang="ts">
import { actions } from '@/store';

actions.initialize();
</script>

<template>
	<router-view />
</template>
