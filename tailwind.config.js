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
          50: '#f0f7fc',
          100: '#e1eff9',
          200: '#c5e1f3',
          300: '#99caeb',
          400: '#6bafe0',
          500: '#5096ca', // The exact blue provided by the user
          600: '#3b7db2',
          700: '#2f6591',
          800: '#285375',
          900: '#254662',
          950: '#182c3f'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(80, 150, 202, 0.3)',
      }
    },
  },
  plugins: [],
}
