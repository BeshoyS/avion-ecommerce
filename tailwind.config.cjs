/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      clashDisplay: ["Clash Display", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      fontSize: {
        300: ["0.875rem", "140%"],
        400: ["1rem", "140%"],
        500: ["1.125rem", "150%"],
        600: ["1.25rem", "140%"],
        700: ["1.5rem", "140%"],
        800: ["2rem", "140%"],
        900: ["2.25rem", "140%"],
      },
      lineHeight: {
        140: "140%",
        150: "150%",
      },
      colors: {
        darkPrimary: "hsl(248, 34%, 22%)",
        primary: "hsl(241, 31%, 44%)",
        lightGray: "hsl(0, 0%, 98%)",
        borderGray: "hsl(255, 35%, 93%)",
        borderDark: "hsl(252, 21%, 82%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
