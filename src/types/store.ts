import { User, Farm, Role } from '@/types/models';

export declare type State = {
	user?: User;
	farms?: Array<Farm>;
	roles?: Array<Role>;
	errors: {
		server: boolean;
	};
};
