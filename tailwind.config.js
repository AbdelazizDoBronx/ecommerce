/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Poppins : "'Poppins',serif",
      },
      keyframes : {
        "scrollerInfity" : {
          from : {transform : "translateX(0)"},
          to : {transform : "translateX(-100%)"}
        }
      },
      animation : {
        scrollerInfity : 'scrollerInfity 25s linear infinite'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}