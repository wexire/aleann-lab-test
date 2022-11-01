/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        jobItem:
          '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        main: '#3A4562',
        secondary: '#878D9D',
      },
      fontFamily: {
        main: 'Proxima Nova',
        secondary: 'Roboto',
      },
      height: {
        imgDesktop: '5.3rem',
        imgMobile: '4.15rem',
      },
      width: {
        imgDesktop: '5.8rem',
        imgMobile: '5.65rem',
      },
    },
  },
  plugins: [],
}
