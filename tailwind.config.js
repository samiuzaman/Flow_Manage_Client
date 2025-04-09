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
      "banner-bg":
        "url('/https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  },

  plugins: [],
};
export default keepTheme(config);
