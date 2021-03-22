const windmill = require('@windmill/react-ui/config')
const colors = require('tailwindcss/colors')

module.exports = windmill({
  purge: [], //'./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {},
  plugins: [],
})

// module.exports = {
//   purge: [], //'./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: "#fefcbf", // For lighter primary color
//           DEFAULT: "#b7791f", // Normal primary color
//           dark: "#744210", // Used for hover, active, etc.
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("kutty")],
// }