/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'assembly-light-purple': '#a78bfa',
          'assembly-purple': '#6863f2',
          'assembly-white': '#f7f7f7',
          'assembly-black': '#1a202c',
          'assembly-mint': '#b2f5e2',
          'assembly-teal': '#3d8280',
          'assembly-dark-teal': '#204753',
          'assembly-dark-blue': '#002b49',
          'assembly-blue': '#335d91',
          'assembly-light-yellow': '#fdf1d2',
          'assembly-dark-yellow':'#d7c088',
          'assembly-dark-green': '#0d1418'
      }
    },
  },
  plugins: [],
}
