/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  colors: {
    black: "#0C090A",
    frostBlack: "#191C20",
    gray: colors.neutral,
    gray: {
      900: "#202225",
      800: "#2f3138",
      700: "#36393f",
      600: "#4f545c",
      400: "#d4d7dc",
      300: "#e3e5e8",
      200: "#ebedef",
      100: "#f2f3f5",
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
