/** @type {import('tailwindcss').Config} */
module.exports = {

  corePlugins: {
    preflight: false,
  },
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#14471E',
        'color2': '#68904D',
        'color3': '#C8D2D1',
        'color4': '#EE9B01',
        'color5': '#DA6A00',
      },
    },
  },
  plugins: [],
}

