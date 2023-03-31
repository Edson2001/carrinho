/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
    colors:{
      background: "#071333",
      white: "#FFF",
      textSecondry: "#5F77F5",
      textWhiteSecondary: "#C1C1C1",
      buttonBackground: "#5F77F5",
      backgroundInput: "#162140",
      textInfo: "#DFDFDF",
      success: "#559C2A",
      open: "#C53939"
    },
  },
  plugins: ["nativewind/babel"],
}
