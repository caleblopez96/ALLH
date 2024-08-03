/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'main-font-fam': ['Playfair Display', 'serif'],
        'secondary-font-fam': ['Manrope', 'sans-serif'],
      },
      colors: {
        ladyHouseGreen: '#667E59',
        tan: '#FDF5E6',
      },
    },
  },
  plugins: [require('daisyui')],
}