import { orderStatus } from '@/constants';
import { getOrdersFromOrdersResponse } from './adapters/order';
import { capilogApiInstance as service } from './instanceManager';

export const orderService = {
	all: (status?: orderStatus) => {
		if (status) return service.get(`orders/statement/${status}`).then((response) => response.data.data);
		else return service.get(`orders`).then(getOrdersFromOrdersResponse);
	},
	create: (data: Object) => service.post(`orders`, data),
	markArriveDate: (id: any) => service.put(`orders/arrive-date/${id}`),
	markExitDate: (id: any) => service.put(`orders/exit-date/${id}`),
	markDestinationArriveDate: (id: any) => service.put(`orders/destination-arrive-date/${id}`),
	markDestinationExitDate: (id: any) => service.put(`orders/finish-date/${id}`),
	updateStatus: (id: any, status: string) => service.put(`orders/statements/${id}`, { state: status }),
};
