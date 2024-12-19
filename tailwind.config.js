/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flip: 'flip 0.7s ease-in-out',
      },
      boxShadow: {
        inner: 'inset 0 50px 50px rgba(0, 0, 0, 0.8)', 
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.2)', 
      },
    },
  },
  plugins: [
    Myclass,
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true })],
}

