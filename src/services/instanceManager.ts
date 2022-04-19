import axios from 'axios';
import { state } from '@/store';

// const URL = 'http://localhost:8000';
const URL = 'http://192.168.1.194:8000';
// const URL = 'https://capilog.herokuapp.com/';
export const capilogApiInstance = axios.create({
	baseURL: URL,
	headers: { 'Content-Type': 'application/json' },
});

capilogApiInstance.interceptors.response.use(undefined, (error) => {
	if (!error.response) state.errors.server = true;
	console.log(state.errors.server)
	return Promise.reject(error);
});

export const updateToken = (token: string) =>
	(capilogApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
