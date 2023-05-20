/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "KeplerBlack" : "#0A0718",
        "KeplerViolet" : "#5A00E8"
      }
    },
  },
  plugins: [],
}

