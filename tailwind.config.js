/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // must match your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ DaisyUI added here
  daisyui: {
    themes: ["light", "dark", "cupcake"], // optional
  },
};
