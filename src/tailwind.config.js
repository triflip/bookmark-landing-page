/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'tab-custom': '#f9f9fb', // si uses aquesta classe al header
      },
    },
  },
  plugins: [],
}
