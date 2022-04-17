import next from './next';
import users from './users';
import shipments from './shipments';
import HomeView from '@/views/auth/HomeView.vue';
import ProfileView from '@/views/auth/ProfileView.vue';
import { auth } from '../middlewares';
import { Route } from '@/types/router';

const routes: Route[] = [
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

const mappedRoutes = routes.map((route) => {
	let middlewares = [auth];
	if (route.beforeEnter) middlewares = [auth, ...route.beforeEnter];
	return { ...route, beforeEnter: middlewares };
});

export default mappedRoutes;
