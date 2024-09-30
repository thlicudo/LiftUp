/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_black: "#222831",
        primary_gray: "#393E46",
        primary_blue: "#0092CA",
        primary_white: "#EEEEEE",
        primary_red: "#FF6961"
      },
      animation: {
        wiggle: "wiggle .2s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
