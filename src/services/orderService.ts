import { getOrdersFromOrdersResponse } from './adapters/order';
import { capilogApiInstance as service } from './instanceManager';

export const orderService = {
	all: () => service.get(`orders`).then(getOrdersFromOrdersResponse),
	create: (data: Object) => service.post(`orders`, data),
};
