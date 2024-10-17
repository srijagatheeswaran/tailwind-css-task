/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2A1768', 
      },
      margin: {
        '10px': '10px', 
        'center': 'auto', 
      },
    },
  },
  plugins: [],
}

