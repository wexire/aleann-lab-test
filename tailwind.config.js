/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        default:
          '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        main: '#3A4562',
        secondary: '#878D9D',
        gray: '#70778B',
        lightGray: '#DEE3EF',
        brightBlue: '#5876C5',
        darkBlue: '#384564',
        whitishOne: '#E7EAF0',
        whitishTwo: '#E8EBF3',
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
