/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'SS-content': ['Source Sans Pro', 'sans-serif'],
        Heading: ['Figtree', 'sans-serif'],
        Content: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        xss: '0.5rem',
      },
      blur: {
        xs: '0.5px',
      },
      colors: {
        'main-bg': '#9FA1DE',
        'main-text': '#1A2657',
        'accent-bar': '#6BFBCE',
        'gradient-from': 'rgba(222,165,204,1)',
        'gradient-to': 'rgba(159,161,222,1)',
      },
      textUnderlineOffset: {
        3: '3px',
      },
      textDecorationThickness: {
        3: '2.5px',
      },
      height: {
        2.5: '2.5px',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
