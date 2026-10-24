/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './pages/**/*.html',
    './js/**/*.js',
    './data/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f141a',
        secondary: '#7f8b99',
        accent: '#c6a76a',
        background: '#111418',
        surface: '#171d24',
        success: '#38a169',
        warning: '#d0a85c',
        error: '#e53e3e',
        muted: '#7f8b99',
        'text-primary': '#eef2f6',
        'text-secondary': '#94a0af',
      },
      fontSize: {
        display: ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        hero: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0, 0, 0, 0.24)',
        medium: '0 18px 44px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
