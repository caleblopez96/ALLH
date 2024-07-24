/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'main-font-fam': ['Playfair Display', 'serif'],
        'secondary-font-fam': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "dim",
      "emerald",
    ],
    theme: "emerald" // Sets the default DaisyUI theme
  }
}

