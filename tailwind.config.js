/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jti",
  theme: {
    extend: {
      colors: {
        main: "#00555d",
        secondary: "rgb(243,214,63)",
        tertiary: "rgb(41,124,132)",
        other: "rgb(0,88,97)",
        love: "rgb(186,200,208)",
        gray: "rgb(245,245,245)",
        lessergray: "rgb(227,233,235)",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "Sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
