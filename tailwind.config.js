/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zovaline: ['Zovaline', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
        montreal: ['var(--font-montreal)', 'sans-serif'],
      },
      colors: {
        void: '#020408',
        dim: '#0a0d14',
        fog: '#141820',
        mist: '#1e2530',
        silver: '#8899aa',
        pearl: '#c8d4e0',
        ghost: '#e8eef4',
        glow: '#4a7fa5',
        aurora: '#2d5a7a',
      }
    },
  },
  plugins: [],
}
