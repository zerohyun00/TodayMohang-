/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC14A",
        secondary: "#FFE1A9",
        black: "#212121",
        gray0: "#757575",
        gray1: "#BDBDBD",
        gray2: "#EEEEEE",
        gray3: "#D0D0D0",
        white: "#FAFAFA",
        festival: "#FFF7AE",
        food: "#76C735",
        music: "#3C7CB8",
        extra: "#8C4EBD",
        inputborder: "#FFE1A9",
        inputBg: "#FFFBF4",
      },
    },
  },
  plugins: [],
};
