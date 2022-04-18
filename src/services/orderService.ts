import { capilogApiInstance as service } from './instanceManager';

export const orderService = {
	create: (data: Object) => service.post(`orders`, data),
};
