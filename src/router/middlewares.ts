import { state, actions, isInitialized } from '@/store';

const isAuth = () => state.user;

export const initialize = async (to: any, from: any, next: () => void) => {
	await isInitialized;
	next();
};

export const auth = (to: any, from: any, next: (payload?: any) => void) => {
	if (isAuth()) next();
	else next({ name: 'login' });
};

export const guest = (to: any, from: any, next: (payload?: any) => void) => {
	if (!isAuth()) next();
	else next({ name: 'home' });
};

export const admin = (to: any, from: any, next: (payload?: any) => void) => {
	if (actions.roles.isAdmin()) next();
	else next({ name: 'home' });
};

export const coordinator = (to: any, from: any, next: (payload?: any) => void) => {
	if (actions.roles.isAdmin() || actions.roles.isCoordinator()) next();
	else next({ name: 'home' });
};

export const supervior = (to: any, from: any, next: (payload?: any) => void) => {
	if (actions.roles.isAdmin() || actions.roles.isCoordinator() || actions.roles.isSupervisor()) next();
	else next({ name: 'home' });
};

export const doorman = (to: any, from: any, next: (payload?: any) => void) => {
	if (actions.roles.isAdmin() || actions.roles.isDoorman()) next();
	else next({ name: 'home' });
};
