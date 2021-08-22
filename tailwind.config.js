module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow', sans-serif",
        fraunces: "'Fraunces', serif"
      },

      colors: {
        /* Primary */
        "soft-red": "var(--soft-red)",
        "yellow": "var(--yellow)",
        "dark-desaturated-cyan": "var(--dark-desaturated-cyan)",
        "dark-blue": "var(--dark-blue)",
        "dark-moderate-cyan": "var(--dark-moderate-cyan)",

        /* Neutral */
        "very-dark-desaturated-blue": "var(--very-dark-desaturated-blue)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "white": "var(--white)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
