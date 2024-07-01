/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titlee': ['titlee'],
        'oswald':['oswald'],
        'mars':['mars']
      
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

