/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        hd1: '#05f',
        help: '#08f',
        hl1: '#f50',
        hl1a: '#f504',
        hl2: '#40d',
        hl2a: '#40d4',
        hl3: '#888',
        hl3a: '#8884',
        bg1: '#fff',
        bg2: '#ddd',
        bg3: '#ccc',
        brd: '#111',
        tx1: '#000',
        tx2: '#fff',
        tx3: '#444',
        red: '#f00',
        gre: '#0f0',
        bro: '#f60'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}
