import LoginView from '@/views/guest/LoginView.vue';
import WelcomeView from '@/views/guest/WelcomeView.vue';
import { Route } from '@/types/router';
import { guest } from '../middlewares';

const routes: Route[] = [
	{
		name: 'welcome',
		path: '/',
		component: WelcomeView,
	},
	{
		name: 'login',
		path: '/login',
		component: LoginView,
	},
];

const mappedRoutes = routes.map((route) => ({ ...route, beforeEnter: [guest] }));

export default mappedRoutes;
