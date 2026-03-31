/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        carbon: '#09090a',
=======
        carbon: '#0a0a0b',
>>>>>>> origin/main
        charcoal: '#141416',
        crimson: '#dc2626',
        amberglow: '#f59e0b',
        neon: '#38bdf8',
      },
      boxShadow: {
<<<<<<< HEAD
        glow: '0 0 40px rgba(220, 38, 38, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(140deg, #070707 10%, #111114 45%, #14151a 100%), radial-gradient(circle at 25% 25%, rgba(220,38,38,0.4), transparent 48%), radial-gradient(circle at 75% 20%, rgba(56,189,248,0.22), transparent 40%)',
=======
        glow: '0 0 24px rgba(220, 38, 38, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(220,38,38,0.32), transparent 40%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.22), transparent 45%), linear-gradient(130deg, #080808 10%, #111114 55%, #16161a 100%)',
>>>>>>> origin/main
      },
    },
  },
  plugins: [],
}
