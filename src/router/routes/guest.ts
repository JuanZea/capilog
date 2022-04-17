import { guest } from '../middlewares';
import WelcomeView from '@/views/guest/WelcomeView.vue';
import LoginView from '@/views/guest/LoginView.vue';

const routes = [
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

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [guest] });
});
