import UserIndex from '@/views/users/UserIndex.vue';
import UserCreate from '@/views/users/UserCreate.vue';
import UserShow from '@/views/users/UserShow.vue';
import { admin } from '../middlewares';

const routes = [
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
]

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [admin] });
});
