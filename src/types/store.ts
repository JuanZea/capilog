import { User, Farm } from '@/types/models';

export declare type State = {
	user?: User;
	farms?: Array<Farm>;
	errors: {
		server: boolean;
	};
};
