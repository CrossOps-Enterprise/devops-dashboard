/** @type {import('tailwindcss').Config} */
import { colors } from './src/constants'

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: colors.hd1,
        secondary: colors.bro,
        error: colors.red,
        warning: colors.bro,
        success: colors.gre,
        ...colors
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}
