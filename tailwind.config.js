/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './custom-styles.css'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('hero.jpg')",
      }
    },
  },
  plugins: [],
}

