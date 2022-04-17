import UserShow from '@/views/users/UserShow.vue';
import UserIndex from '@/views/users/UserIndex.vue';
import UserCreate from '@/views/users/UserCreate.vue';
import { admin } from '../middlewares';
import { Route } from '@/types/router';

const routes: Route[] = [
	{
		name: 'users.index',
		path: '/users',
		component: UserIndex,
	},
	{
		name: 'users.create',
		path: '/users/create',
		component: UserCreate,
	},
	{
		name: 'users.show',
		path: '/users/:document',
		component: UserShow,
	},
];

const mappedRoutes = routes.map((route) => ({ ...route, beforeEnter: [admin] }));

export default mappedRoutes;
