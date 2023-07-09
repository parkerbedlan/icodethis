const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					from: {
						transform: 'translateY(-15px)',
						opacity: 0
					},
					to: {
						transform: 'translateY(0px)',
						opacity: 1
					}
				}
			}, animation: {
				'fade-in': 'fade-in .4s 1'
			}
		}
	},

	plugins: [forms({ strategy: 'class' }), typography, daisyui]
};

module.exports = config;
