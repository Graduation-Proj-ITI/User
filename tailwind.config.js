/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#133A5E",
        secondary: "#FFB921",
        bgColor: "#f1f0f6a1",
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        dark: "#fff",
        "dark-gray": "#fff",
        error: "#C83D3D",
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

      backgroundImage: {
        community:
          "url('https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Fcommunity.png?alt=media&token=c21f538c-993e-454f-a460-29bd7ba067fe')",
        shop: "url('https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2FbackgroundProduct.png?alt=media&token=eaf08991-4ea3-4f5c-9a2b-9df52034a72e')",
        footerBg:
          "linear-gradient(to top, #133A5Ecf, #133A5Ecf), url('https://i.shgcdn.com/4427c8e2-7042-41d8-bcfb-0fb78efd53bf/-/format/auto/-/preview/3000x3000/-/quality/lighter/')",
        slide1: "url('../../images/slider/slide1.webp')",
        slide2: "url('../../images/slider/slide2.webp')",
        slide3: " url('../../images/slider/slide3.jpg')",
        slide4: " url('../../images/slider/slide4.jpg')",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
      },

      boxShadow: {
        base: "0 0 10px 0 rgba(211, 211, 211, 0.25)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out forwards",
        fadeInLeft: "fadeInLeft 0.7s  linear",
        fadeInRight: "fadeInRight 0.7s  linear",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(-40px)",
          },
        },
        container: {
          center: true,
          padding: "1rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         colors: {
  //           transparent: "transparent",
  //           current: "currentColor",
  //           black: "#000",
  //           white: "#fff",
  //           bluegray: colors.blueGray,
  //           coolgray: colors.coolGray,
  //           gray: colors.gray,
  //           truegray: colors.trueGray,
  //           warmgray: colors.warmGray,
  //           red: colors.red,
  //           orange: colors.orange,
  //           amber: colors.amber,
  //           yellow: colors.yellow,
  //           lime: colors.lime,
  //           green: colors.green,
  //           emerald: colors.emerald,
  //           teal: colors.teal,
  //           cyan: colors.cyan,
  //           sky: colors.sky,
  //           blue: colors.blue,
  //           indigo: colors.indigo,
  //           violet: colors.violet,
  //           purple: colors.purple,
  //           fuchsia: colors.fuchsia,
  //           pink: colors.pink,
  //           rose: colors.rose,
  //           primary: "#133A5E",
  //           secondary: "#FF9934",
  //           bgColor: "#EEEEEE",
  //         },
  //       },
  //     },
  //   ],
  // },
};
