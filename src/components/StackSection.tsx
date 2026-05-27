'use client'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const stackGroups = [
  {
    category: 'Frontend Core',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    category: 'Styling & Motion',
    items: ['Tailwind CSS', 'GSAP', 'Framer Motion', 'Lenis', 'CSS Animations'],
  },
  {
    category: 'WebGL & 3D',
    items: ['Three.js', 'WebGL', 'React Three Fiber', 'Drei', 'GLSL', 'Postprocessing'],
  },
  {
    category: 'Backend & Runtime',
    items: ['Node.js', 'REST API', 'Git', 'Vercel'],
  },
  {
    category: 'AI & Intelligence',
    items: ['Prompt Engineering', 'LLM APIs', 'AI Integration', 'Automation'],
  },
]

const marqueeItems = [
  'React', 'Next.js', 'Three.js', 'WebGL', 'GLSL', 'GSAP', 'Framer Motion',
  'TypeScript', 'Node.js', 'Tailwind', 'AI', 'Prompt Engineering',
]

export default function StackSection() {
  const { ref, inView } = useInView()

  return (
    <section id="stack" ref={ref} style={{
      position: 'relative',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
      overflow: 'hidden',
    }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', bottom: '20%', left: '10%',
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,74,106,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '80px',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '9px', letterSpacing: '0.5em',
            color: 'rgba(111,168,192,0.5)',
          }}>03 — STACK</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(200,221,232,0.08)' }} />
        </div>

        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          color: 'rgba(200,221,232,0.9)',
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(25px)',
          transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}>
          Technology<br />
          <span style={{ color: 'rgba(111,168,192,0.65)' }}>Arsenal</span>
        </h2>

        {/* Stack grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {stackGroups.map((group, gi) => (
            <div
              key={group.category}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${gi * 0.07}s`,
              }}
            >
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px', letterSpacing: '0.4em',
                color: 'rgba(111,168,192,0.4)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                {group.category}
              </div>
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '8px',
              }}>
                {group.items.map(item => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{
          overflow: 'hidden',
          borderTop: '1px solid rgba(200,221,232,0.06)',
          borderBottom: '1px solid rgba(200,221,232,0.06)',
          padding: '20px 0',
          opacity: inView ? 1 : 0,
          transition: 'opacity 1s ease 0.5s',
        }}>
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    color: 'rgba(200,221,232,0.15)',
                    textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: '60px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                  <span style={{ color: 'rgba(111,168,192,0.2)', fontSize: '16px', lineHeight: 1 }}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
