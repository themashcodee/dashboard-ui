module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        "primary": "#0D5F9A",
        "secondary": "#519BD0",
        "secondary-text": "#858585",
        "link": "#346BD5",
        "field-darker": "#EAEAEA",
        "background": "#F5F5F5",
        "light-grey": "#B0B0B0",
        "icon": "#999999",
        "light-red": "#E9A0A0",
        "light-green": "#9BDD7C"
      }
    },
  },
  plugins: [],
}
