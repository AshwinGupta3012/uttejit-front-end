/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GTFlexaReg: ["GTFlexaReg"],
        GTFlexaLight: ["GTFlexaLight"],
        FormulaReg: ["FormulaReg"],
        FormulaBold: ["FormulaBold"],
      },
      colors: {
        palewhite: ["#F3EEDA"],
        teamred: ["#FF1801"],
        blackbutnot: ["#101112"],
      },
      fontSize: {
        med: "20px",
        smol: "12px",
        smoller: "11px",
      },
    },
  },
  plugins: [],
};
