/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      army_green: "#5b5729",
      light_gray: "#ddd",
      forest_green: "#3e4d31",
      sky_blue: "#039BE5",
      black: "#000",
      soft_gray: "#f5f5f5",
      rich_green: "#063500",
      dark_gray:' #262626',
      pales_age:"#e6ebe6",
      lavender_gray:"#d2d2e5",
      light_taupe:"#dddcd2",
      steel_blue:'#d2dde5',
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
