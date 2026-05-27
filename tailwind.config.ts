import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zovaline: ['Zovaline', 'serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        void: '#020408',
        deep: '#050a10',
        midnight: '#080d14',
        ice: '#c8dde8',
        frost: '#a0b8c8',
        glow: '#6fa8c0',
        mist: '#3a6070',
        aurora: '#1a3a50',
      },
      animation: {
        'drift': 'drift 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
