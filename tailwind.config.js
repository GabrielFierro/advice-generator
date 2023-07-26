/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'manrope-extrabold': ['Manrope ExtraBold', 'sans-serif']
    },
    colors: {
      primaryLightCyan: 'hsl(193, 38%, 86%)',
      primaryNeonGreen: 'hsl(150, 100%, 66%)',
      neutralGrayishBlue: 'hsl(217, 19%, 38%)',
      neutralDarkGrayish: 'hsl(217, 19%, 24%)',
      neutralDarkBlue: 'hsl(218, 23%, 16%)'
    },
    extend: {}
  },
  plugins: []
};
