import RoutesView from '@/views/next/RoutesView.vue';
import ReportsView from '@/views/next/ReportsView.vue';
import { Route } from '@/types/router';

const routes: Route[] = [
	{
		name: 'reports',
		path: '/reports',
		component: ReportsView,
	},
	{
		name: 'routes',
		path: '/routes',
		component: RoutesView,
	},
]

export default routes;
