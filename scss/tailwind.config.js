/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./scss/**/*.scss"],
 theme: {
    extend: {
      colors: {
        // Variables de color
        'bg-custom': '#262c40',
        'text-custom': 'hsl(240, 1%, 47%)',
        'text-paragraph': 'hsl(240, 1%, 47%)',
        'primary-custom': '#5364db',
        'accent-custom': '#ef5f5f',
        'menu-tg': 'rgba(25, 31, 53, 0.95)',
        'tab-custom': 'hsl(229, 8%, 60%)',
        'tab-buttons': '#ccc',
        'shape-custom': 'hsl(231, 74%, 50%)',

      },
      fontFamily: {
        base: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
