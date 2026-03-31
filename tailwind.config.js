/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#09090a',
        charcoal: '#141416',
        crimson: '#dc2626',
        amberglow: '#f59e0b',
        neon: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 40px rgba(220, 38, 38, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(140deg, #070707 10%, #111114 45%, #14151a 100%), radial-gradient(circle at 25% 25%, rgba(220,38,38,0.4), transparent 48%), radial-gradient(circle at 75% 20%, rgba(56,189,248,0.22), transparent 40%)',
      },
    },
  },
  plugins: [],
}
