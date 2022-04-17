import { getUsersFromUsersResponse } from './adapters/response/users';
import { capilogApiInstance as service } from './instanceManager';

export const userService = {
	all: () => service.get(`users`).then(getUsersFromUsersResponse),
	show: (dni: string) => service.get(`users/${dni}`),
	create: (data: Object) => service.post(`users`, data),
	destroy: (dni: string) => service.delete(`users/${dni}`).then((response) => response.data),
};
