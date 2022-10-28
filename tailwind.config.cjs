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
      colors: {
        darkWhite: "#fefffe",
        appGreen: "#5cb757",
        appBlue: "#468ed5",
        appRed: "#cc282c",
        appPink: "#e59293",
      },
      backgroundColor: {
        darkWhite: "#fefffe",
        appGreen: "#5cb757",
        appBlue: "#468ed5",
        appRed: "#cc282c",
        appPink: "#e59293",
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
      keyframes: {
        // Dropdown Menu
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          100: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // ToolTip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        // Dropdown menu
        "scale-in": "scale-in 0.2 ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        // ToolTip
        "slide-up-fade": "slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ noncompatible: true }),
    require("tailwindcss-radix"),
  ],
};
