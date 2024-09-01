/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding:"16px",
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        primaryhover: '#2dd4bf',
        dark: '#0f172a',
        grey: '#64748b',
      }
    },
  },
  plugins: [],
}

