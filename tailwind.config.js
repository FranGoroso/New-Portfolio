/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef9f3',
          100: '#fef2e6',
          200: '#fcdec0',
          300: '#facc9a',
          400: '#f7a34e',
          500: '#f47e20',
          600: '#e5671a',
          700: '#be4f18',
          800: '#974017',
          900: '#7a3615',
        },
        secondary: {
          50: '#f5f7f9',
          100: '#e8ecf2',
          200: '#d6dee8',
          300: '#b8c7d8',
          400: '#94a9c4',
          500: '#758eb0',
          600: '#6379a0',
          700: '#566891',
          800: '#495676',
          900: '#3e4860',
        },
        accent: {
          50: '#fffbf5',
          100: '#fff5e5',
          200: '#ffe8c2',
          300: '#ffd494',
          400: '#ffbb5c',
          500: '#ffa32e',
          600: '#f08517',
          700: '#c96a14',
          800: '#a15416',
          900: '#824616',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f3',
          200: '#e7e6e2',
          300: '#d4d2ca',
          400: '#b0ac9f',
          500: '#928b7b',
          600: '#7a7263',
          700: '#645d51',
          800: '#534d44',
          900: '#47423b',
        },
        dark: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#d9d9d9',
          300: '#c5c5c5',
          400: '#a0a0a0',
          500: '#6e6e6e',
          600: '#4a4a4a',
          700: '#383838',
          800: '#2a2a2a',
          900: '#1a1a1a',
          950: '#0f0f0f',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'slideDown': 'slideDown 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
