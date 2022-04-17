<template>
	<div class="bg-scrap h-screen bg-gray-100">
		<div class="flex h-full lg:flex-col">
			<div class="w-8 bg-gray-800 bg-opacity-90 lg:h-8 lg:w-full" />
			<div class="flex-grow">
				<slot />
			</div>
			<div class="w-8 bg-gray-800 bg-opacity-90 lg:h-8 lg:w-full" />
		</div>
	</div>
</template>
