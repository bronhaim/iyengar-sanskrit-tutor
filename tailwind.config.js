/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        assistant: ['Assistant', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        amatic: ['"Amatic SC"', 'cursive', 'sans-serif'],
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
        beige: {
          light: '#FAF8F5',
          DEFAULT: '#F5EFE6',
          dark: '#E8E0D6'
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#524C46',
          muted: '#7A726B'
        },
        terracotta: {
          light: '#FBF0EE',
          DEFAULT: '#C07373',
          dark: '#A65A5A',
          deep: '#853F3F'
        },
        sage: {
          light: '#EFF5EE',
          DEFAULT: '#8FB385',
          dark: '#728C74',
          deep: '#566E58'
        },
        'soft-green': '#8FB385',
        'light-green': '#EFF5EE',
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
        'card': '0 10px 30px -5px rgba(45, 45, 45, 0.06)',
        'soft': '0 4px 20px -2px rgba(45, 45, 45, 0.05)'
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
