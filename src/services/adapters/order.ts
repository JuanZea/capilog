import { AxiosResponse } from 'axios';
import { Order } from '@/types/models';

export const getOrdersFromOrdersResponse = ({ data: { items } }: AxiosResponse<{ items: Array<Order> }>): Array<Order> =>
	items;
