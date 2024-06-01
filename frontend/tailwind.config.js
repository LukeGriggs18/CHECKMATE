/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lightgrey: '#212121',
        darkgrey: '#181818',
        lightbrown: '#f9ad59',
        darkbrown: '#3d2c32',
        sidegrey: '#121212',
      }
    },
  },
  plugins: [],
}

