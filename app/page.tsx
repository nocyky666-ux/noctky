'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import StackSection from './sections/StackSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

// Three.js canvas — client only, no SSR
const AtmosphericCanvas = dynamic(() => import('./components/AtmosphericCanvas'), {
  ssr: false,
})

export default function Home() {
  return (
    <SmoothScroll>
      {/* Film grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* 3D atmospheric background */}
      <AtmosphericCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
        }}
      >
        <HeroSection />

        {/* Divider */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div className="line-h" />
        </div>

        <AboutSection />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div className="line-h" />
        </div>

        <StackSection />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div className="line-h" />
        </div>

        <ProjectsSection />

        <ContactSection />
      </main>
    </SmoothScroll>
  )
}
