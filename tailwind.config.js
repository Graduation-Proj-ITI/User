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
        dark: "#4C4C4C",
        "dark-gray": "#939393",
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
        community: "url('../../public/images/community/community.png')",
        shop: "url('../../public/images/products/backgroundProduct.png')",
        footerBg:
          "linear-gradient(to top, #133A5Ecf, #133A5Ecf), url('https://i.shgcdn.com/4427c8e2-7042-41d8-bcfb-0fb78efd53bf/-/format/auto/-/preview/3000x3000/-/quality/lighter/')",
        slide1: "url('../../images/slider/slide1.jpg')",
        slide2: "url('../../images/slider/slide2.jpg')",
        slide3: " url('../../images/slider/slide3.jpg')",
        slide4: " url('../../images/slider/slide4.jpg')",
        bgLamp: "url('../../images/categories/lamp-1.jpg')",
        bgSofa: "url('../../images/categories/sofa.jpg')",
        bgChair: "url('../../images/categories/chair.jpg')",
        bgDecoration: "url('../../images/categories/decoration.jpg')",
        bgStorage: "url('../../images/categories/storage.jpg')",
        bgBed: "url('../../images/categories/bed.jpg')",
        bgTable: "url('../../images/categories/table.jpg')",
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
