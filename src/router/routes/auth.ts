import { auth } from '../middlewares';
import HomeView from '@/views/auth/HomeView.vue';
import ProfileView from '@/views/auth/ProfileView.vue';
import users from './users';
import shipments from './shipments';
import next from './next';

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
	...users,
	...shipments,
	...next,
];

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [auth] });
});
