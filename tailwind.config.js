/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      screens: {
        'ssm': '280px',
        'sm': '500px'
      },

      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      
      boxShadow: {
        '3xl': '0px 0px 20px rgba(255, 255, 255, 0.63);',
      },
    }
   
  },
  plugins: [],
}