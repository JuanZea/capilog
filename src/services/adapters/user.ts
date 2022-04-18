import { User } from "@/types/models";
import { AxiosResponse } from "axios";

export const getUsersFromUsersResponse = ({ data: { items } }: AxiosResponse<{ items: Array<User> }>) => {
	return items;
}

export const getUserFromUserResponse = ({ data: { data } }: AxiosResponse<{ data: User }>) => {
	return data;
}
