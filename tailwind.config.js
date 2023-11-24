/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
