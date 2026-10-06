/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0D',
          dark: '#141414',
          card: '#1B1B1B',
          steel: '#262626',
          border: '#333333',
          bone: '#F4F1EA',
          'bone-muted': '#DCD7CC',
          body: '#B5B0A6',
          muted: '#8E8B82',
          red: '#B83A2E',
          'red-hover': '#9E2F24',
          'red-subtle': 'rgba(184, 58, 46, 0.15)',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1320px',
      },
    },
  },
  plugins: [],
}