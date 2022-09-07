/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend : {
      colors: {
        bodyBg: "rgba(191, 184, 218, 0.91)",
        fontPurple: "rgba(51, 83, 158, 0.63)",
        fontBlack: "rgba(0, 0, 0, 1)",
        fontGrey: "rgba(0, 0, 0, 0.57)",
        imgLayer : "rgba(196, 189, 220, 1)"
      },
      fontFamily : {
        logoFont : ['Turret Road', "cursive" ],
        infoFont : ['Alegreya Sans SC', "sans-serif"],
        heroFont : ['Anek Gujarati', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        navItemFont : ['Roboto Mono'," monospace"],

      },
    },
  },
  plugins: [],
};
