/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#07090e',
          card: '#0d111c',
          cardBorder: '#1e293b',
          accent: '#10b981', // Emerald for Data & Science
          cyan: '#38bdf8',   // Futuristic Tech Cyan
          purple: '#818cf8', // Neural Indigo
          pink: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(16, 185, 129, 0.6))' }
        }
      }
    },
  },
  plugins: [],
}
