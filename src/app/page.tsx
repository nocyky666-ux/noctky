'use client'
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/LoadingScreen'
import NoctkyNav from '@/components/NoctkyNav'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import StackSection from '@/components/StackSection'
import ContactSection from '@/components/ContactSection'

const NoctkyCursor = dynamic(() => import('@/components/NoctkyCursor'), { ssr: false })

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Custom cursor */}
      <NoctkyCursor />

      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}>
        <NoctkyNav />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <StackSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
