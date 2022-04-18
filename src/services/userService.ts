import { getUserFromUserResponse, getUsersFromUsersResponse } from './adapters/user';
import { capilogApiInstance as service } from './instanceManager';

export const userService = {
	all: () => service.get(`users`).then(getUsersFromUsersResponse),
	one: (dni: string) => service.get(`users/${dni}`).then(getUserFromUserResponse),
	create: (data: Object) => service.post(`users`, data),
	destroy: (dni: string) => service.delete(`users/${dni}`).then((response) => response.data),
};
