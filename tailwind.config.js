module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0f141a",
        secondary: "#7f8b99",
        accent: "#c6a76a",
        "accent-alt": "#5d7890",
        background: "#111418",
        surface: "#171d24",
        text: {
          primary: "#eef2f6",
          secondary: "#94a0af",
        },
        success: "#38a169",
        warning: "#d0a85c",
        error: "#e53e3e",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        fraunces: ['Fraunces', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 12px 30px rgba(0, 0, 0, 0.24)',
        'medium': '0 18px 44px rgba(0, 0, 0, 0.3)',
        'card': '0 16px 32px rgba(0, 0, 0, 0.24), 0 1px 0 rgba(255, 255, 255, 0.04) inset',
        'card-hover': '0 24px 56px rgba(0, 0, 0, 0.34), 0 1px 0 rgba(255, 255, 255, 0.06) inset',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
