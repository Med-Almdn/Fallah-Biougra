/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'secondary': '#AED581',
        'off-white': '#FAFAF4',
        'beige': '#F5F5DC',
        'charcoal': '#212121',
        'gray-text': '#757575',
      },
      fontFamily: {
        'arabic-heading': ['Cairo', 'sans-serif'],
        'arabic-body': ['Noto Kufi Arabic', 'sans-serif'],
        'fr-heading': ['Poppins', 'sans-serif'],
        'fr-body': ['Inter', 'sans-serif'],
        'en-heading': ['Montserrat', 'sans-serif'],
        'en-body': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1461072/pexels-photo-1461072.jpeg')",
      },
    },
  },
  plugins: [],
};