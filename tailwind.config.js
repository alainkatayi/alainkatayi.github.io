/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        galactic: {
          DEFAULT: '#0B0F19',
          soft: '#111827',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          soft: '#38BDF8',
          muted: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        frame: '0 0 0 1px rgba(148, 163, 184, 0.18), 0 24px 48px -24px rgba(14, 165, 233, 0.25)',
      },
      animation: {
        'border-pulse': 'borderPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-scale': 'fadeScale 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        borderPulse: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          from: { opacity: '0', transform: 'translateY(18px) scale(0.96)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
