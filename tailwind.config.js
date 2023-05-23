/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#133A5E",
      secondary: "#FF9934",
      bgColor: "#EEEEEE",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
      },
      screens: {
        xs: { min: "479px" },
        // => @media(max-width: 479px) {...}
        sm: { min: "639px" },
        // => @media(min-width: 639px) {...}
        md: { min: "767px" },
        // => @media(min-width: 767px) {...}
        lg: { min: "1023px" },
        // => @media(min-width: 1023px) {...}
        xl: { min: "1279px" },
        // => @media(min-width: 1279px) {...}
        "2xl": { min: "1535px" },
        // => @media(min-width: 1535px) {...}
      },
      boxShadow: {
        base: "0 0 10px 0 rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};
