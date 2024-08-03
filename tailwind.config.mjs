/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gold: "#ffbe0b",
				orange: "#fb5607",
				pink: "#ff006e",
				purple: "#8338ec",
				blue: "#3a86ff",
			},
			boxShadow: {
				hard: "8px 8px"
			}
		},
	},
	plugins: [],
}
