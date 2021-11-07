const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        hero: ['Oswald', ...fontFamily.sans],
      },
      colors: {
        'dark-theme': '#111',
        'color-html': '#f63',
        'color-css': '#3ae',
        'color-js': '#fc2',
        'color-sass': '#c69',
        'color-react': '#5df',
        'color-nodejs': '#9c4',
        'color-mongo': '#0b4',
        'color-tailwind': '#0bd',
        'color-i18n': '#099',
        'tech-light': '#eee',
        'tech-dark': '#111',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
