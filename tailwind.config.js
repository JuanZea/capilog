module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				capi: '#1EB858',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
