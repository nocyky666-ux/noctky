# NOCTKY — Atmospheric Minimal Cinematic Portfolio

A premium, cinematic portfolio experience built with Next.js, Three.js, and Framer Motion.

## Tech Stack
- **Next.js 14** — App Router, TypeScript
- **Three.js / React Three Fiber** — Atmospheric 3D background
- **Framer Motion** — Cinematic scroll animations
- **Lenis** — Smooth scroll experience
- **Tailwind CSS** — Utility styling

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Method 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Method 2 — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Click Deploy — no additional config needed

### Method 3 — From Termux
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Project Structure
```
noctky/
├── app/
│   ├── components/
│   │   ├── AtmosphericCanvas.tsx   # Three.js 3D background
│   │   ├── CustomCursor.tsx        # Cinematic cursor
│   │   ├── Navigation.tsx          # Minimal nav
│   │   ├── SmoothScroll.tsx        # Lenis integration
│   │   └── useInView.ts            # Scroll intersection hook
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── icons/                      # SVG icons (no emojis)
├── styles/
│   └── globals.css
└── vercel.json
```

## Design Philosophy
> Technology must remain invisible. The user should only feel atmosphere, immersion, smoothness, and elegance.

- Atmospheric Minimal Futurism
- Cinematic camera drift with mouse parallax
- Film grain overlay for organic texture
- All emojis replaced with custom SVG icons
- Smooth cinematic reveal sequence on load
