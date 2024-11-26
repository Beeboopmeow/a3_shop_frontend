import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				laranja: '#f8800a',
				pastelvermelho: '#FF9580'
			}
		}
	},

	plugins: [forms]
} satisfies Config;
