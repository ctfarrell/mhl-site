// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#3a7356',
      white: colors.white,
    },
    extend: {
      backgroundImage: {
        'fancy-office': "url('../public/screen_2x.jpg')",
        'horsetrack': "url('../public/horsetrack_cropped.jpg')",
        'leaf': "url('../public/leaf-icon1.png')",
      }
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  },
  variants: {
    extend: {
      animation:['hover','group-hover'],
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif']
  },
  plugins: [],
}