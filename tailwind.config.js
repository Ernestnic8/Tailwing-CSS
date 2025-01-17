/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "azul-claro": "#243cff",
        "azul-oscuro": "#0d1b3e"
      },
      screens: {
        "tablet": "900px",
      }
    },
  },
  plugins: [],
}

