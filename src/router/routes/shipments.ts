import DialShipmentView from '@/views/auth/DialShipmentView.vue';
import CheckShipmentsView from '@/views/auth/CheckShipmentsView.vue';
import RequestShipmentView from '@/views/auth/RequestShipmentView.vue';
import PendingRequestsView from '@/views/auth/PendingRequestsView.vue';
import { Route } from '@/types/router';
import { coordinator, doorman, supervior } from '../middlewares';

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
		name: 'dialShipment',
		path: '/dial-shipment',
		component: DialShipmentView,
		beforeEnter: [doorman]
	},
]

export default routes;
