/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', 'ui-sans-serif', 'system-ui'],
				mono: ['IBM Plex Mono', 'ui-monospace', 'monospace']
			}
		}
	},
	plugins: []
};
