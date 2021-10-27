// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: {
      primary: '#3a7356',
      white: colors.white,
      red: colors.red,
    },
    colors: {
      primary: '#3a7356',
      white: colors.white,
      red: colors.red,
    },
    extend: {
      fontWeight: ['group-hover'],
      backgroundImage: {
        'fancy-office': "url('../public/screen_2x.jpg')",
        'horsetrack': "url('../public/horsetrack_cropped.jpg')",
        'leaf': "url('../public/leaf-icon1.png')",
        'mountain-lake': "url('../public/mountainlake1.png')",
        "tall-tree-pavilion":"url('../public/pavilion-images/tall-tree-pavilion.png')",
        "wicker-pavilion":"url('../public/pavilion-images/wicker-pavilion.png')",
        "earlywine-pavilion":"url('../public/pavilion-images/earlywine-pavilion.png')",
        "rustic-pavilion":"url('../public/pavilion-images/rustic-pavilion.png')",
        "ranch-pavilion":"url('../public/pavilion-images/ranch-pavilion.png')",
        "cedar-pavilion":"url('../public/pavilion-images/cedar-pavilion.png')",
        "valley-pavilion":"url('../public/pavilion-images/valley-pavilion.png')",
        "lake-pavilion":"url('../public/pavilion-images/lake-pavilion.png')",
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
      borderColor:['hover'],
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif']
  },
  plugins: [],
}