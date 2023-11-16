/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "#2B8DFF",
        "custom-blue-300": "#1378EE",
        "custom-gold": "#D5A158",
        "custom-red": "#FF4747",
        "custom-green": "#60C545",
        "custom-gray-100": "#F5F5F5",
        "custom-gray-300": "#E8E8E8",
        "custom-gray-500": "#D9D9D9",
        "custom-gray-700": "#ADADAD",
        "custom-gray-900": "#7F7F7F",
        "custom-black-100": "#292929",
        "custom-black-300": "#1F1F1F",
        "custom-black-500": "#141414",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
