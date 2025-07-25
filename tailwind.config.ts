// tailwind.config.js
import { type Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mja-golden': '#d4af37',
        'mja-golden-dark': '#b9972f',
        'mja-white': '#fefefe',
        'mja-dark': '#0f172a',
        'mja-blue': '#1e40af',
        'mja-gray': '#64748b',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeUp: 'fadeUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
