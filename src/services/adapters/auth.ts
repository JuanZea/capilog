import { AuthResponse } from '@/types/adapters';
import { AxiosResponse } from 'axios';

export const getAuthFromLoginResponse = ({ data: { data } }: AxiosResponse<{ data: AuthResponse }>): AuthResponse => ({
	user: data.user,
	accessToken: data.accessToken,
});
