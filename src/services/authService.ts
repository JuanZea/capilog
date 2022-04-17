import { getAuthFromLoginResponse } from './adapters/auth';
import { capilogApiInstance as service } from './instanceManager';

export const authService = {
	login: (data: { dni: string; password: string }) => service.post('auth/login', data).then(getAuthFromLoginResponse),
	logout: () => service.post('auth/logout'),
	refresh: () => service.get('auth/refresh'),
};
