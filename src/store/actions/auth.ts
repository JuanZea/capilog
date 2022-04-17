import state from "../state";
import router from "@/router";
import { AuthResponse } from "@/types/adapters";
import { updateToken } from "@/services/instanceManager";
import { authService } from "@/services";

export const login = (credentials: AuthResponse) => {
	state.user = credentials.user;
	updateToken(credentials.accessToken);
	localStorage.setItem('userId', credentials.user.dni);
	localStorage.setItem('authToken', credentials.accessToken);
	router.push({ name: 'home' });
};

export const logout = () => {
	authService.logout();
	localStorage.clear();
	delete state.user;
	router.push({ name: 'login' });
};
