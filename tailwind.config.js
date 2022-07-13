/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      //Reservation Section
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#f2f2f2",
      headline: "#094067",
      paragraph: "##5f6c7b",
      button: "#3da9fc",
      button_text: "#fffffe",
      stroke: "#094067",
      main: "#fffffe",
      highlight: "#3da9fc",
      secondary: "#90b4ce",
      tertiary: "#ef4565",
      card_backgroud: "#094067",
      text_color: "#555555",
      text_secondary: "#AAAAAA",
      primary: "#006FFF",
      border_secondary: "#D7D7D7",
      select: "#01375e",
      slate_400: "#94a3b8",
      gray_500: "#6b7280",
      gray_400: "#9ca3af",
      gray_200: "#e5e7eb",
    },
  },
  plugins: [],
});
