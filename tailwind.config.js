/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "webo-gray": "#F5F6F8",
        "quote-gray": "rgba(196, 196, 196, 0.3)",
        "paragraph-gray": "#757095",
        "webo-blue": "#DBF1FA",
        "webo-purple": "#3734A9",
      },
    },
  },
  plugins: [],
};
