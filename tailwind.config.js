/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts, jsx, tsx}'],
  theme: {
    extend: {
      minWidth: {
        auto: 'auto'
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}

