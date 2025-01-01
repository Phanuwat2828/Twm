/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'], // กำหนดฟอนต์ Kanit
      },
      colors:{
        "b_g-red":"#E0324B",
        "b_g-gray":"#24282A",
        "b_g-staff":"#E0324B"
      }
    },
  },
  plugins: [],
}

