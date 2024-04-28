/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx,ttf,woff,eot,svg}"],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ['Pokemon GB']
      }
    },
  },
  plugins: [],
};
