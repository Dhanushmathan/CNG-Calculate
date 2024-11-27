/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#481380"
      },
      fontFamily: {
        poppins: "'Poppins', serif"
      }
    },
  },
  plugins: [],
}

