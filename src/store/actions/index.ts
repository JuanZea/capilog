import { authService, userService } from '@/services';
import { updateToken } from '@/services/instanceManager';
import state from '../state';

export * as auth from './auth'
export * as roles from './roles'

let resolver: () => void;
export const isInitialized = new Promise((resolve) => (resolver = () => resolve(true)));

export const initialize = async () => {
	await rememberAuth();
	resolver();
	console.log('[capilog]: initialized');
};

const rememberAuth = async () => {
	const token = localStorage.getItem('authToken');
	const userId = localStorage.getItem('userId');
	if (!token || !userId) return;
	updateToken(token);
	const response = await authService.refresh().catch((error) => error);
	if (response.response) localStorage.clear();
	else {
		localStorage.setItem('authToken', response.data.data.accessToken);
		updateToken(response.data.data.accessToken);
		state.user = (await userService.show(userId)).data.data;
	}
};
