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
        // Doblando el Viento - Paleta del Logo
        primary: {
          cream: "#FAF8F5",
          beige: "#F5F0E8",
          sand: "#E8E0D5",
          taupe: "#C4B7A6",
          dark: "#3d3d3d",
          charcoal: "#2b2b2b",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d4dac9",
          300: "#b5c0a5",
          400: "#96a67e",
          500: "#7a8b62",
          600: "#5f6e4c",
          700: "#4a5640",
          800: "#3d4736",
          900: "#353d30",
        },
        // TAVITI
        taviti: {
          50: '#fef2f4',
          100: '#fde6e9',
          200: '#fbd0d9',
          300: '#f7a8b8',
          400: '#f27693',
          500: '#e74c73',
          600: '#d1295d',
          700: '#b01e4d',
          800: '#931d47',
          900: '#7d1c42',
        },
        // ILAIA
        ilaia: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
