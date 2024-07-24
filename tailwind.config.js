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
      {
        mytheme: {
          "primary": "#697d5d",
          "secondary": "#f4f4f4",
          "accent": "#afb5a8",
          "neutral": "#60a5fa",
          "base-100": "#e7e5e4",
          "info": "#fda4af",
          "success": "#d8b4fe",
          "warning": "#fb923c",
          "error": "#ff0000"
        }
      }
    ],
    theme: "emerald" // Sets the default DaisyUI theme
  }
}

