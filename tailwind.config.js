/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Helvetica", "sans-serif"],
      },
      colors: {
        foni: "#F7F7FB",
        mwvane: "#227B5D",
        buttonColor: "#A8EBBD",
        buttonColor2: "#D9F4DA",
        buttonText: "#003E29",
        neutralText: "#2D3648",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
