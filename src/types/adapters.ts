import { User } from '@/types/models';

export interface AuthResponse {
	user: User;
	accessToken: string;
}
