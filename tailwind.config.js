/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        smd: "770px",
      },
      keyframes: {
        fadeInTop: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fadeInTop 1s linear",
      },
    },
  },
  plugins: [require("daisyui")],
};
