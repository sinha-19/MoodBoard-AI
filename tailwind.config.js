/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Mood colors
        happy: {
          light: '#FFF8E1',
          DEFAULT: '#FFD54F',
          dark: '#FFC107'
        },
        sad: {
          light: '#E3F2FD',
          DEFAULT: '#90CAF9',
          dark: '#2196F3'
        },
        angry: {
          light: '#FFEBEE',
          DEFAULT: '#EF5350',
          dark: '#E53935'
        },
        relaxed: {
          light: '#E8F5E9',
          DEFAULT: '#81C784',
          dark: '#4CAF50'
        },
        motivated: {
          light: '#FFFDE7',
          DEFAULT: '#FFF176',
          dark: '#FFEB3B'
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        display: ['Arial', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}