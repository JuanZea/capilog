<template>
	<div class="bg-scrap flex lg:flex-col">
		<div class="w-8 bg-gray-800 bg-opacity-90 lg:h-8 lg:w-full" />
		<div class="min-h-screen flex-grow">
			<div class="flex h-full lg:flex-col">
				<div class="flex-grow">
					<slot />
				</div>
			</div>
		</div>
		<div class="w-8 bg-gray-800 bg-opacity-90 lg:h-8 lg:w-full" />
	</div>
</template>
