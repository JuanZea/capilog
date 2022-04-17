import { ComponentPublicInstance } from 'vue';

export declare type Route = {
	name: string;
	path: string;
	component: ComponentPublicInstance<any>;
	beforeEnter?: ((to: any, from: any, next: (payload?: any) => void) => void)[];
};
