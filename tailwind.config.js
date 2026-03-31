/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0a0a0b',
        charcoal: '#141416',
        crimson: '#dc2626',
        amberglow: '#f59e0b',
        neon: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 24px rgba(220, 38, 38, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(220,38,38,0.32), transparent 40%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.22), transparent 45%), linear-gradient(130deg, #080808 10%, #111114 55%, #16161a 100%)',
      },
    },
  },
  plugins: [],
}
