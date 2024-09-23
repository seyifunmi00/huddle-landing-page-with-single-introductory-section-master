/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Violet': 'hsl(257, 40%, 49%)',
        'SoftMagenta': 'hsl(300, 69%, 71%)'
      },

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      weight:{
        'normal-text': 400,
        'bold-text': 600,
      },

      backgroundImage: {
        'desktop': "url('./images/bg-desktop.svg')",
        'mobile': "url('./images/bg-mobile.svg')",
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        md: '50px',
      },
    },
  },
  plugins: [],
}

