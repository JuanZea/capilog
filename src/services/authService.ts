import { formatLoginData } from './adapters/request/auth';
import { getAuthFromLoginResponse } from './adapters/response/auth';
import { capilogApiInstance as service } from './instanceManager';

export const authService = {
	login: (data: { document: string; password: string }) => service.post('auth/login', formatLoginData(data)).then(getAuthFromLoginResponse),
	logout: () => service.post('auth/logout'),
	refresh: () => service.get('auth/refresh'),
};
