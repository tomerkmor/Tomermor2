// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',   // Scan these files for Tailwind classes
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mastik: '#348181',
        weakMastik: 'rgb(127, 172, 172)',
      }
    },
  },
  plugins: [],
};
