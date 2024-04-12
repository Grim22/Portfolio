/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'inter': ['Inter'],
      'SFbold': ['SF-bold'],
      'SFregular': ['SF-regular'],
      'SFmedium': ['SF-medium'],
      'SFsbi': ['SF-semibold-italic'],
      'SFrb': ['SF-rounded-bold'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}