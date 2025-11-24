/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef8f0",
          100: "#fdefd9",
          200: "#fbddb2",
          300: "#f8c581",
          400: "#f4a64e",
          500: "#f08b2a",
          600: "#e1721f",
          700: "#bb571b",
          800: "#95451d",
          900: "#783b1b",
        },
      },
    },
  },
  plugins: [],
};
