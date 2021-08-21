module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow', sans-serif",
        fraunces: "'Fraunces', serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
