import { getRolesFromRolesResponse } from './adapters/role';
import { capilogApiInstance as service } from './instanceManager';

export const roleService = {
	all: () => service.get('roles').then(getRolesFromRolesResponse),
};
