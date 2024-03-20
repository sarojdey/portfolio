/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Montserrat", "sans-serif"],
        font2: ["Poppins", "sans-serif"],
      },
      colors: {
        black1: "#191919",
        black2: "#101010",
        black3: "#0a0002",
        blue1: "#3dccf8",
        blue2: "#0356cd",
        textwhite: "#ffffff",
        textblue: "#0299ed",
        textgrey: "#92959f",
      },
      height: {
        h1: "43rem",
        h2: "33rem",
        h1x:"38rem",
        h2x:"28rem",
      },
      width: {
        w1: "30rem",
        w2: "20rem",
      },
    },
  },
  plugins: [],
};
