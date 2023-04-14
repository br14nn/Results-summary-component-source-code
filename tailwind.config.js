/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				laptop: "860px",
			},
			width: {
				"64%": "64%",
				"45%": "45%",
				"1280px": "1280px",
				"840px": "840px",
			},
			height: {
				"70%": "70%",
				"65%": "65%",
				"600px": "600px",
			},
			minHeight: {
				"1000px": "1000px",
			},
			minWidth: {
				"1280px": "1280px",
			},
			boxShadow: {
				test: "0 40px 60px 1px rgb(0 0 0 / 0.25)",
			},
			colors: {
				"light-red": "hsl(0, 100%, 67%)",
				"orange-yellow": "hsl(39, 100%, 56%)",
				"green-teal": "hsl(166, 100%, 37%)",
				"cobal-blue": "hsl(234, 85%, 45%)",
				"light-slate-blue": "hsl(252, 100%, 67%)",
				"light-royal-blue": "hsl(241, 81%, 54%)",
				"violet-blue": "hsla(256, 72%, 46%, 1)",
				"persian-blue": "hsla(241, 72%, 46%, 0)",
				"pale-blue": "hsl(221, 100%, 96%)",
				"light-lavender": "hsl(241, 100%, 89%)",
				"dark-grey-blue": "hsl(224, 30%, 27%)",
			},
		},
	},
	plugins: [],
};
