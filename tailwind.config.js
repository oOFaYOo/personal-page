/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'raw': '(max-device-width: 480px)' },
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}