/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        void: '#020203',
        deep: '#080a0f',
        surface: '#0d1117',
        muted: '#1a1f2e',
        border: '#1e2433',
        fog: '#2a3040',
        silver: '#8892a4',
        light: '#c8d0e0',
        bright: '#e8ecf4',
        white: '#f4f6fa',
        cyan: {
          dim: '#1a3040',
          soft: '#2a4a60',
          mid: '#4a8fa8',
          pure: '#7ab8cc',
        },
        blue: {
          dim: '#0a1428',
          soft: '#152240',
          mid: '#1e3a6a',
          pure: '#4a6fa0',
        },
        purple: {
          dim: '#1a0a2e',
          soft: '#2d1560',
          mid: '#4a2880',
          pure: '#8a60b0',
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease forwards',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'grain': 'grain 0.4s steps(1) infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -1%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(1%, -4%)' },
          '70%': { transform: 'translate(-4%, 3%)' },
          '80%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(-1%, 1%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(8px, -12px) rotate(1deg)' },
          '66%': { transform: 'translate(-6px, 8px) rotate(-0.5deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
