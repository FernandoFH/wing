/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.storybook/**/*",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../design-system/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
};
