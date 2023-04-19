/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./*/*.html', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


