/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#FFF',
        primary: '#66FCF1',
        primarydark: '#45A29E',
        secondary: '#0B0C10',
        secondarydark: '#1F2833',
      }
    },
  },
  plugins: [],
}

