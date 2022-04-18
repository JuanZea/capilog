import { getOrdersFromOrdersResponse } from './adapters/order';
import { capilogApiInstance as service } from './instanceManager';

export const orderService = {
	all: () => service.get(`orders`).then(getOrdersFromOrdersResponse),
	create: (data: Object) => service.post(`orders`, data),
	markArriveDate: (id: any) => service.put(`orders/arrive-date/${id}`),
	markExitDate: (id: any) => service.put(`orders/exit-date/${id}`),
};
