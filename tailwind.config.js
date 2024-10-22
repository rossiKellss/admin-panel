/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#fca61f',
        black: '#242d49',
        gray: '#788097',
        pink: '#FF919D',
        glass: 'rgba(255, 255, 255, 0.54)',
      },
      gridTemplateColumns:{
        'custom-layout':"11rem auto 20rem"
      },
      boxShadow: {
        box: '0px 19px 60px rgb(0 0 0 / 8%)',
        smbox: '-79px 51px 60px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        yellowGradient: 'linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%)',
        purpleGradient: 'linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)',
      },
      opacity: {
        activeItem: '0.54',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
