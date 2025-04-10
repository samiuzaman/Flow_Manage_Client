/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Fira: ["Fira", "sans-serif"],
      Noto: ["Noto Serif", "serif"],
    },
    colors: {
      first: "#FF4438",
      second: "",
      tertiary: "",
      black: "#000000",
      white: "#ffffff",
    },
    backgroundImage: {
      "banner-bg": "url('/assets/banner.png')",
    },
  },

  plugins: [],
};
export default keepTheme(config);
