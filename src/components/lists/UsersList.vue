<script setup lang="ts">
import Avatar from '../Avatar.vue';
import { ref } from 'vue';
import { userService } from '@/services';
import { ChevronRightIcon, MailIcon, HomeIcon } from '@heroicons/vue/solid';
import { capitalize } from 'lodash';

const users = ref();
const refreshUsers = async () => users.value = await userService.all();
refreshUsers();
</script>

<template>
	<div class="overflow-hidden bg-white sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			<li v-for="user in users" :key="user.dni">
				<router-link
					:to="{ name: 'users.show', params: { document: user.dni } }"
					class="block w-full hover:bg-gray-50"
				>
					<div class="flex items-center px-4 py-4 sm:px-6">
						<div class="flex min-w-0 flex-1 items-center">
							<div class="flex-shrink-0">
								<Avatar class="h-full p-8 text-2xl" :name="`${user.name} ${user.lastname}`" />
							</div>
							<div class="min-w-0 flex-1 px-4">
								<div>
									<p class="truncate text-left text-sm font-medium text-gray-600">
										{{ `${user.name} ${user.lastname}` }}
									</p>
									<p class="mt-2 flex items-center text-sm text-gray-500">
										<MailIcon
											class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<span class="truncate">{{ user.email }}</span>
									</p>
									<p class="mt-2 flex items-center text-sm text-gray-500">
										<HomeIcon
											class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<span class="truncate">{{ capitalize(user.farm.farm) }}</span>
									</p>
								</div>
							</div>
						</div>
						<div>
							<ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
