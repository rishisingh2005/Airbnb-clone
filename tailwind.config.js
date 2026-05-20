/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF385C', light: '#FF5A72', dark: '#E31C5F' },
        secondary: '#222222',
      },
      fontFamily: {
        sans: ['Circular', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 16px rgba(0,0,0,0.12)',
        navbar: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
