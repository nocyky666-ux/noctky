'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const NoctkyCanvas = dynamic(() => import('./NoctkyCanvas'), { ssr: false })

export default function HeroSection() {
  const [visible, setVisible] = useState(false)
  const scrollYRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)

    const onScroll = () => { scrollYRef.current = window.scrollY }
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* WebGL Canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <NoctkyCanvas scrollYRef={scrollYRef} mouseRef={mouseRef} />
      </div>

      {/* Radial gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, rgba(2,4,8,0.4) 70%, rgba(2,4,8,0.9) 100%)',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 2,
        background: 'linear-gradient(to bottom, transparent, var(--void))',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 24px',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }}>
          <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, rgba(200,221,232,0.3))' }} />
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '9px', letterSpacing: '0.5em',
            color: 'rgba(111,168,192,0.6)', textTransform: 'uppercase',
          }}>
            NOCTKY UNIVERSE — 2025
          </span>
          <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, rgba(200,221,232,0.3), transparent)' }} />
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily: 'Zovaline, serif',
          fontSize: 'clamp(52px, 10vw, 120px)',
          letterSpacing: '0.18em',
          color: 'rgba(200,221,232,0.92)',
          textAlign: 'center',
          lineHeight: 0.95,
          marginBottom: '28px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          textShadow: '0 0 80px rgba(111,168,192,0.15)',
        }}>
          NOCTKY
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(12px, 1.5vw, 14px)',
          letterSpacing: '0.15em',
          color: 'rgba(200,221,232,0.35)',
          textAlign: 'center',
          marginBottom: '48px',
          maxWidth: '400px',
          lineHeight: 1.6,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.65s',
        }}>
          WEB DEVELOPER &nbsp;·&nbsp; AI ENTHUSIAST &nbsp;·&nbsp; PROMPT ENGINEER
        </p>

        {/* CTA Button */}
        <button
          data-hover
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'none',
            border: '1px solid rgba(200,221,232,0.2)',
            color: 'rgba(200,221,232,0.7)',
            padding: '14px 40px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            cursor: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(200,221,232,0.5)'
            el.style.color = 'rgba(200,221,232,0.95)'
            el.style.background = 'rgba(200,221,232,0.04)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(200,221,232,0.2)'
            el.style.color = 'rgba(200,221,232,0.7)'
            el.style.background = 'none'
          }}
        >
          ENTER THE UNIVERSE
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: visible ? 0.5 : 0,
        transition: 'opacity 1s ease 1.5s',
      }}>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, transparent, rgba(200,221,232,0.4))',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '8px', letterSpacing: '0.4em',
          color: 'rgba(200,221,232,0.4)',
        }}>
          SCROLL
        </span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.7; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}
