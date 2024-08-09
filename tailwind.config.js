/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        odibee: [ "Odibee Sans", "sans-serif"],
        carter: ["Carter One", "system-ui"],
      },
    },
  },
  plugins: [],
}

