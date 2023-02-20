/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#1a1a1a",
      lightGrey: "#BCBCBC",
      lightGreyActive: "#636670",
      white: "#ffffff",
      orange: "#FC851A",
      // hintShadow: "#A3A3A3",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 4px 16px rgba(68, 68, 68, 0.16)",
      },
      backgroundImage: {
        "info-svg": "url('/src/info.svg')",
      },
    },
    plugins: [],
  },
};
