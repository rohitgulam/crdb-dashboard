/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crdbDark': '#215732',
        'crdbMedium': '#3aaf4a',
        'crdbLight': '#d9efd4'
      },
    },
  },
  plugins: [],
}
