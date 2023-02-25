/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["IBM Plex Sans", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
		extend: {},
	},
	plugins: [],
};
