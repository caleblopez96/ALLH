/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Playfair Display', 'serif'],
        'secondary': ['Manrope', 'sans-serif'],
      },
      colors: {
        ladyHouseGreen: '#667E59',
        tan: '#FDF5E6',
      },
    },
  },
  plugins: [require('daisyui')],
}


