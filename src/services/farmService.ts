import { getFarmsFromFarmsResponse } from './adapters/response/farm';
import { capilogApiInstance as service } from './instanceManager';

export const farmService = {
	all: () => service.get('farms').then(getFarmsFromFarmsResponse).catch(error => error),
};
