/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF5F8',
          100: '#FCE7F0',
          200: '#FBCFE1',
          300: '#FF9EC4',
          400: '#FF6FA5',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
        },
        plum: {
          ink: '#1A1220',
          soft: '#6B5563',
          bg: '#0D0A11',
          surf: '#1E1526',
        },
        coral: '#FB7185',
        bgc: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grad: 'linear-gradient(120deg, #FF9EC4 0%, #EC4899 45%, #C026D3 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 111, 165, 0.35)',
        card: '0 12px 40px -14px rgba(236, 72, 153, 0.18)',
        lift: '0 18px 50px -16px rgba(236, 72, 153, 0.30)',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(42px, -32px) scale(1.08)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        'marquee-rev': 'marquee-rev 48s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        blob: 'blob 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
