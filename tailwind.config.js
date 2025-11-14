/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0c1b33',
        'deep-teal': '#007b83',
        'accent-orange': '#ff7b00',
        'light-gray': '#f9f9f9',
        'charcoal': '#333333',
        // Blog page custom tokens
        'primary-600': '#007b83',
        'secondary-600': '#ff7b00',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

