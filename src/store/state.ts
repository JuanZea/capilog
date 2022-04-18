import { reactive } from 'vue';
import { State } from '@/types/store';

const state: State = reactive({
	errors: {
		server: false,
	}
});

export default state;
