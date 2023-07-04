/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {    
    extend: {
      screens:{
        'sz1240': {'min':'821px','max':'1239px'},
        'sz820': {'min':'300px','max':'820px'}
      },
    },
  },
  plugins: [],
}

