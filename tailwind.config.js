/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto-500': 'auto 20%',
        '90': '150px'
      },
      boxShadow:{
        "xll": "0px 0px 3px 2px white"
      },
      gridTemplateRows:{
        '90': 'repeat(auto-fill, 150px)'
      },
      height:{
        '66': '66%',
        '400': '400px'
      },
      maxHeight:{
        'ma': '50%'
      } ,
      width:{
        'al': '35%',
        'vid': '65%'
      },
      screens:{
        "con": {'max': '1000px'}
      }

    },
    
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}
