import { AxiosResponse } from 'axios';
import { Farm } from '@/types/models';

export const getFarmsFromFarmsResponse = ({ data: { items } }: AxiosResponse<{ items: Array<Farm> }>): Array<Farm> =>
	items;
