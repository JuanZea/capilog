import { getFarmsFromFarmsResponse } from './adapters/farm';
import { capilogApiInstance as service } from './instanceManager';

export const farmService = {
	all: () => service.get('farms').then(getFarmsFromFarmsResponse).catch(error => error),
};
