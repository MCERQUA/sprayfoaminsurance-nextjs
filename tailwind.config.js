/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080d16',
        surface: '#0d1421',
        card: '#111827',
        primary: '#2ea3f2',
        accent: '#29c4a9',
        highlight: '#f59e0b',
        text: '#f0f4f8',
        muted: '#94a3b8',
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Public Sans', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        widest: '0.1em',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2ea3f2, #29c4a9)',
        'hero-gradient': 'linear-gradient(to bottom right, #080d16, #0d1421)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(46, 163, 242, 0.4)',
        'glow-accent': '0 0 15px rgba(41, 196, 169, 0.2)',
        'glass': '0 8px 32px rgba(46, 163, 242, 0.15)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        '.glass-card': {
          background: 'rgba(17, 24, 39, 0.7)',
          backdropFilter: 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          border: '1px solid rgba(46, 163, 242, 0.1)',
          borderRadius: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(46, 163, 242, 0.4)',
            boxShadow: '0 8px 32px rgba(46, 163, 242, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
        '.blue-gradient-text': {
          background: 'linear-gradient(135deg, #2ea3f2, #29c4a9)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          backgroundClip: 'text',
        },
        '.primary-btn': {
          background: 'linear-gradient(135deg, #2ea3f2, #1a7ebf)',
          color: 'white',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(46, 163, 242, 0.4)',
            transform: 'scale(1.02)',
          },
        },
        '.secondary-btn': {
          border: '1px solid #29c4a9',
          color: '#29c4a9',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(41, 196, 169, 0.1)',
            boxShadow: '0 0 15px rgba(41, 196, 169, 0.2)',
          },
        },
        '.amber-cta': {
          backgroundColor: '#f59e0b',
          color: '#080d16',
          fontWeight: '700',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#d97706',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
            transform: 'scale(1.02)',
          },
        },
        '.label-text': {
          fontFamily: "'Public Sans', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        },
      });
      addUtilities({
        '.ambient-orb': {
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: '0',
          pointerEvents: 'none',
        },
      });
    }),
  ],
};
