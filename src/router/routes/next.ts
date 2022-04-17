import ReportsView from '@/views/next/ReportsView.vue';
import RoutesView from '@/views/next/RoutesView.vue';

const routes = [
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
