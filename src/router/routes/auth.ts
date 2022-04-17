import { auth } from '../middlewares';
import HomeView from '@/views/auth/HomeView.vue';
import ProfileView from '@/views/auth/ProfileView.vue';

const routes = [
	{
		name: 'home',
		path: '/home',
		component: HomeView,
	},
	{
		name: 'profile',
		path: '/profile',
		component: ProfileView,
	},
];

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [auth] });
});
