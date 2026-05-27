# 🌌 NOCTKY UNIVERSE

Cinematic futuristic portfolio website built with **Next.js 14**, **TypeScript**, and immersive animated UI.

This project is designed with a premium dark-space aesthetic, smooth transitions, custom cursor effects, atmospheric lighting, animated sections, and modern responsive layouts.

---

# ✨ Features

- ⚡ Next.js 14 App Router
- 🎨 Fully Custom UI Design
- 🌌 Cinematic Space Atmosphere
- 🖱️ Custom Cursor Animation
- ✨ Smooth Reveal Animation
- 📱 Responsive Layout
- 🎭 Premium Motion Effects
- 🔥 Modern Portfolio Structure
- 🧠 TypeScript Support
- 🎨 Tailwind CSS Support
- 🚀 Ready for Vercel Deployment

---

# 🧱 Tech Stack

| Technology | Usage |
|---|---|
| Next.js 14 | Main Framework |
| TypeScript | Type Safety |
| React | UI Library |
| Tailwind CSS | Styling |
| CSS Animation | Motion Effects |
| Vercel | Deployment |

---

# 📁 Project Structure

```bash
src/
 ├── app/
 │    ├── globals.css
 │    ├── layout.tsx
 │    └── page.tsx
 │
 ├── components/
 │    ├── HeroSection.tsx
 │    ├── AboutSection.tsx
 │    ├── ProjectsSection.tsx
 │    ├── StackSection.tsx
 │    ├── ContactSection.tsx
 │    ├── NoctkyNav.tsx
 │    ├── NoctkyCanvas.tsx
 │    ├── UniverseCanvas.tsx
 │    ├── LoadingScreen.tsx
 │    └── NoctkyCursor.tsx
 │
public/
 ├── fonts/
 └── images/
```

---

# 🚀 Installation Guide

## 1. Extract Project

Extract the ZIP file first.

---

## 2. Open Terminal

Open terminal inside the project folder.

Example:

```bash
cd noctky-universe
```

---

## 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

---

## 4. Run Development Server

```bash
npm run dev
```

or

```bash
pnpm dev
```

---

## 5. Open Browser

Open:

```bash
http://localhost:3000
```

---

# 🛠️ Build Production

```bash
npm run build
```

Run production:

```bash
npm start
```

---

# 🌍 Deploy to Vercel

## Method 1 — GitHub + Vercel

1. Upload project to GitHub
2. Open Vercel
3. Import repository
4. Click Deploy

Done.

---

## Method 2 — Vercel CLI

Install Vercel CLI:

```bash
npm i -g vercel
```

Deploy:

```bash
vercel
```

---

# 🎨 How To Edit Content

---

# ✏️ Change Main Hero Text

File:

```bash
src/components/HeroSection.tsx
```

Search for texts like:

```tsx
NOCTKY
```

or

```tsx
Creative Developer
```

Replace with your own text.

---

# 🧑 Change About Section

File:

```bash
src/components/AboutSection.tsx
```

Edit biography, description, story, or personal information there.

---

# 💼 Change Projects

File:

```bash
src/components/ProjectsSection.tsx
```

You will find project array/object like:

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project Description'
  }
]
```

Replace:

- title
- description
- tags
- image
- links

with your own projects.

---

# 🧠 Change Tech Stack

File:

```bash
src/components/StackSection.tsx
```

Edit technologies there.

Example:

```tsx
'Next.js'
'React'
'Three.js'
```

---

# 📱 Change Social Media Links

File:

```bash
src/components/ContactSection.tsx
```

Find this section:

```tsx
const socials = [
  {
    platform: 'Instagram',
    handle: '@username',
    url: 'https://instagram.com/username'
  }
]
```

Replace:

- platform
- handle
- url

Example:

```tsx
{
  platform: 'GitHub',
  handle: 'Noctky',
  url: 'https://github.com/noctky'
}
```

---

# 🔗 Change Navigation Menu

File:

```bash
src/components/NoctkyNav.tsx
```

Edit menu names like:

```tsx
Home
About
Projects
Contact
```

---

# 🖼️ Change Logo

Logo location:

```bash
public/images/noctky-logo.jpeg
```

Replace the image with your own.

Keep same filename OR update path inside components.

---

# 🖼️ Change Open Graph Preview

Preview image used for Discord, WhatsApp, Twitter, etc.

File:

```bash
public/images/og-preview.png
```

Replace with your own preview image.

---

# 🔤 Change Custom Font

Font location:

```bash
public/fonts/Zovaline.ttf
```

You can replace with another font.

Then update:

```bash
src/app/globals.css
```

---

# 🎨 Change Website Colors

Main styling location:

```bash
src/app/globals.css
```

Search colors like:

```css
rgba(200,221,232,0.9)
```

or

```css
#000
```

Modify based on your own theme.

---

# ✨ Change Cursor Effects

File:

```bash
src/components/NoctkyCursor.tsx
```

You can:

- change cursor size
- change glow
- change animation
- disable effects

---

# 🌌 Change Background Canvas Effects

Files:

```bash
src/components/UniverseCanvas.tsx
```

and

```bash
src/components/NoctkyCanvas.tsx
```

These files control:

- particles
- galaxy effects
- space atmosphere
- glow effects
- animated background

---

# 📄 SEO & Metadata

File:

```bash
src/app/layout.tsx
```

Edit:

```tsx
export const metadata = {
  title: 'Your Website',
  description: 'Your Description'
}
```

---

# 📱 Manifest / PWA

File:

```bash
public/manifest.json
```

You can change:

- app name
- theme color
- icons
- description

---

# ⚙️ Environment Variables

File:

```bash
.env.example
```

Copy to:

```bash
.env.local
```

Example:

```bash
cp .env.example .env.local
```

---

# 📦 Important Commands

| Command | Usage |
|---|---|
| npm run dev | Run development server |
| npm run build | Build production |
| npm start | Run production |
| npm run lint | Check lint |

---

# 🧯 Common Errors

## Dependencies Error

Delete:

```bash
node_modules
```

and:

```bash
package-lock.json
```

Then reinstall:

```bash
npm install
```

---

## Port Already Used

Run with another port:

```bash
npm run dev -- -p 3001
```

---

# 💡 Customization Ideas

You can improve this project by adding:

- Three.js 3D models
- GSAP animation
- Framer Motion
- CMS integration
- Blog system
- Dark/light mode
- Music player
- AI chatbot
- Terminal UI
- Interactive galaxy map

---

# 📸 Recommended Assets

Use:

- GLB 3D models
- cinematic textures
- futuristic icons
- SVG animations
- neon gradients
- particle effects

---

# 🔥 Performance Tips

- Compress images
- Use WebP
- Lazy load heavy components
- Optimize canvas rendering
- Reduce unnecessary re-renders

---

# 📜 License

This project is free for personal and portfolio usage.

---

# 👑 Credits

Created for futuristic immersive portfolio experience.
Built with passion, creativity, and cinematic web aesthetics.

