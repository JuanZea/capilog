import { Role } from '@/types/models';
import { AxiosResponse } from 'axios';

export const getRolesFromRolesResponse = ({ data: { items } }: AxiosResponse<{ items: Array<Role> }>): Array<Role> =>
	items;
