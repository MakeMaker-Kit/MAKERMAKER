/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cascadiacode: ["CascadiaCode", ",monospace"],
        cascadiacodeItalic: ["CascadiaCodeItalic", "monospace"],
        cascadiacodePL: ["CascadiaCodePL", "monospace"],
        cascadiacodePLItalic: ["CascadiaCodePLItaic", "monospace"],
      },
      fontSize: {
        h1: "44px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "18px",
        h6: "16px",
      },
      screens: {
        breakpoint_xs: "0",
        breakpoint_sm: "576px",
        breakpoint_md: "768px",
        breakpoint_lg: "992px",
        breakpoint_xl: "1200px",
      },
      width: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        default: "1366px",
        five: "50%",
        six: "60%",
        seven: "70%",
        eight: "80%",
        nine: "90%",
      },
      maxWidth: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        default: "1366px",
        five: "50%",
        six: "60%",
        seven: "70%",
        eight: "80%",
        nine: "90%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ noncompatible: true }),
    require("tailwindcss-radix"),
  ],
};
