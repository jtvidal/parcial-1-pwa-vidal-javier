/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,css,ts,jsx,tsx,ttf,woff,eot,svg}"],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ['Pokemon GB']
      },
      screens:{
        'xxsm':'320px',
        'xsm':'460px', 
      }
    },
  },
  plugins: [],
};
