/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pzk-dark': '#0a0e14',
        'pzk-darker': '#111820',
        'pzk-card': '#151d28',
        'pzk-green': '#00ff88',
        'pzk-blue': '#00d4ff',
        'pzk-amber': '#ffb400',
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
