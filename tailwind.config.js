/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
    },
      colors:{
        primary: '#facc15',
        paragraf:'#f1f5f9'
      },
      screen:{
        '2xl' :'1320px',
      },
    },
  },
  plugins: [],
}
