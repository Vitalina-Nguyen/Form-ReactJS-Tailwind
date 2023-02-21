/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#1a1a1a",
      lightGrey: "#BCBCBC",
      lightGreyActive: "#636670",
      white: "#ffffff",
      purple: "#4D24C6",
      pink: "#FF6F8E",
      orange: "#FC851A",
    },

    fontFamily: {
      'sans': ['Source Sans Pro', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        "3xl": "0px 4px 16px rgba(68, 68, 68, 0.16)",
        "4xl": "16px 0px 16px 0px rgba(68, 68, 68, 0.16)",
        "5xl": "0px 0px 4px rgba(188, 188, 188, 0.3);",
      },
    },
    plugins: [],
  },
};
