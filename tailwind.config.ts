import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9F6F0',
        text: '#2C1E16',
        gold: { DEFAULT: '#D4AF37', dark: '#B5952F', light: '#FDE68A' },
        terra: { DEFAULT: '#9B2C2C', dark: '#7A2222' },
        green: { brand: '#1E3B2B' },
        wood: '#4A3320',
        cream: '#DFD7C4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-fast': 'floatFast 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'steam-1': 'steamRise 3s infinite ease-in',
        'steam-2': 'steamRise 4s infinite ease-in 1s',
        'steam-3': 'steamRise 3.5s infinite ease-in 0.5s',
        'grain-drift': 'grainDrift 20s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'draw-path': 'drawPath 2s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
        'mortar-pound': 'mortarPound 1.5s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        steamRise: {
          '0%': { transform: 'translateY(10px) scale(0.8)', opacity: '0', filter: 'blur(2px)' },
          '30%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-50px) scale(1.5) rotate(10deg)', opacity: '0', filter: 'blur(8px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        grainDrift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        mortarPound: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '40%': { transform: 'translateY(-12px) rotate(-5deg)' },
          '60%': { transform: 'translateY(2px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
