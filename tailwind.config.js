/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        sanskrit: ['"Noto Serif Devanagari"', 'serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EE',
          200: '#F2E9DC',
          300: '#E4D6C3',
          400: '#D5C3AB'
        },
        charcoal: {
          DEFAULT: '#383330',
          light: '#5E5752',
          muted: '#8C837C'
        },
        terracotta: {
          light: '#F8ECEB',
          DEFAULT: '#C07373',
          dark: '#A65A5A',
          deep: '#853F3F'
        },
        sage: {
          light: '#EFF4F0',
          DEFAULT: '#728C74',
          dark: '#566E58'
        },
        ochre: {
          light: '#FDF6EB',
          DEFAULT: '#D89B54',
          dark: '#B87A36'
        }
      },
      boxShadow: {
        'duo': '0 4px 0 0 rgba(0,0,0,0.12)',
        'duo-terracotta': '0 4px 0 0 #853F3F',
        'duo-sage': '0 4px 0 0 #566E58',
        'duo-active': '0 1px 0 0 rgba(0,0,0,0.12)',
        'card': '0 8px 24px -4px rgba(56, 51, 48, 0.08)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceShort: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.35s ease-out forwards',
        bounceShort: 'bounceShort 0.4s ease-in-out',
        pulseSubtle: 'pulseSubtle 2s infinite ease-in-out'
      }
    },
  },
  plugins: [],
}
