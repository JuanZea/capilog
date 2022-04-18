import DialInView from '@/views/auth/DialInView.vue';
import DialOutView from '@/views/auth/DialOutView.vue';
import CheckShipmentsView from '@/views/auth/CheckShipmentsView.vue';
import RequestShipmentView from '@/views/auth/RequestShipmentView.vue';
import PendingRequestsView from '@/views/auth/PendingRequestsView.vue';
import { Route } from '@/types/router';
import { admin, coordinator, doorman, supervior } from '../middlewares';

const routes: Route[] = [
	{
		name: 'pendingRequests',
		path: '/pending-requests',
		component: PendingRequestsView,
		beforeEnter: [coordinator]
	},
	{
		name: 'requestShipment',
		path: '/request-shipment',
		component: RequestShipmentView,
		beforeEnter: [supervior]
	},
	{
		name: 'checkShipments',
		path: '/check-shipments',
		component: CheckShipmentsView,
		beforeEnter: [supervior]
	},
	{
		name: 'dialIn',
		path: '/dial-in',
		component: DialInView,
		beforeEnter: [doorman]
	},
	{
		name: 'dialOut',
		path: '/dial-out',
		component: DialOutView,
		beforeEnter: [doorman]
	},
]

export default routes;
