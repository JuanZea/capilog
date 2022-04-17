export * as auth from './auth'
export * as roles from './roles'

let resolver: () => void;
export const isInitialized = new Promise((resolve) => (resolver = () => resolve(true)));

export const initialize = async () => {
	// await rememberAuth();
	resolver();
	console.log('[capilog]: initialized');
};
