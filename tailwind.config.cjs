/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cultured: {
          100: '#F9F9F9',
          200: '#F3F3F3'
        },
        gainsboro: '#DADDDE',
        'light-gray': '#D3D6DA',
        'davys-grey': '#56575D',
        'spanish-gray': '#939B9F',
        'forest-green': '#66A060',
        'old-gold': '#CEB02C'
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
