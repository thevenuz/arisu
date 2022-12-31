/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      },
      blur: {
        xs: '0.5px',
      },
    },
  },
  plugins: [],
}
