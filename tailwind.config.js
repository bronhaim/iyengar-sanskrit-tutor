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
          100: '#FAF4EB',
          200: '#F3EAD9',
          300: '#E5D6C1',
          400: '#D5C1A6'
        },
        beige: {
          50: '#FBF9F5',
          100: '#F5EFEB',
          200: '#EFE7DC',
          300: '#E5D9C8',
          400: '#D8C7B5',
          light: '#FBF9F5',
          DEFAULT: '#F5EFEB',
          dark: '#E5D9C8'
        },
        coffee: {
          50: '#F8F5F0',
          100: '#EFE7DC',
          light: '#8D5B3A',
          DEFAULT: '#74482B',
          dark: '#54321A',
          deep: '#3B2110'
        },
        brown: {
          50: '#FAF6F1',
          100: '#F4ECE3',
          200: '#E7D8C8',
          300: '#D5BDA6',
          400: '#BC9D81',
          500: '#9C7A5E',
          600: '#805E43',
          700: '#674831',
          800: '#4F3523',
          900: '#382417'
        },
        charcoal: {
          DEFAULT: '#362C24',
          light: '#5C4B40',
          muted: '#8C7B6E'
        },
        terracotta: {
          light: '#F7EFE9',
          DEFAULT: '#9E6746',
          dark: '#845133',
          deep: '#63391F'
        },
        sage: {
          light: '#F2F4ED',
          DEFAULT: '#8A997E',
          dark: '#6F7E64',
          deep: '#515F48'
        },
        'soft-green': '#8A997E',
        'light-green': '#F2F4ED',
        ochre: {
          light: '#FAF3E8',
          DEFAULT: '#B87F4D',
          dark: '#996334'
        }
      },
      boxShadow: {
        'duo': '0 4px 0 0 rgba(54, 44, 36, 0.14)',
        'duo-terracotta': '0 4px 0 0 #63391F',
        'duo-sage': '0 4px 0 0 #515F48',
        'duo-active': '0 1px 0 0 rgba(54, 44, 36, 0.14)',
        'card': '0 10px 30px -5px rgba(54, 44, 36, 0.07)',
        'soft': '0 4px 20px -2px rgba(54, 44, 36, 0.05)'
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
