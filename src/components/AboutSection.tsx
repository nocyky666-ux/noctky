'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function useInView(threshold = 0.15) {
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

const traits = [
  { icon: '🎓', svg: null, label: 'High School Student', desc: 'Learning & building every day' },
  { icon: '💻', svg: null, label: 'Web Developer', desc: 'Crafting modern digital experiences' },
  { icon: '⚡', svg: null, label: 'Prompt Engineer', desc: 'Mastering AI communication' },
  { icon: '🤖', svg: null, label: 'AI Enthusiast', desc: 'Exploring the future of intelligence' },
]

const TraitIcon = ({ label }: { label: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'High School Student': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    'Web Developer': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    'Prompt Engineer': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    'AI Enthusiast': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  }
  return <>{icons[label] || null}</>
}

export default function AboutSection() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref} style={{
      position: 'relative',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
      overflow: 'hidden',
    }}>
      {/* Ambient background */}
      <div style={{
        position: 'absolute', top: '50%', left: '20%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,80,0.12) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '80px',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '9px', letterSpacing: '0.5em',
            color: 'rgba(111,168,192,0.5)',
          }}>01 — ORIGIN</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(200,221,232,0.08)' }} />
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'rgba(200,221,232,0.9)',
              marginBottom: '32px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}>
              Crafting<br />
              <span style={{ color: 'rgba(111,168,192,0.7)' }}>Dimensions</span><br />
              in Code
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              lineHeight: 1.85,
              color: 'rgba(200,221,232,0.4)',
              marginBottom: '24px',
              maxWidth: '460px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.25s',
            }}>
              I&apos;m a high school student who loves building modern and interactive websites while exploring the future of artificial intelligence. Passionate about creative development, smooth UI/UX experiences, and turning ideas into innovative digital projects.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              lineHeight: 1.85,
              color: 'rgba(200,221,232,0.3)',
              maxWidth: '460px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}>
              Every project is an exploration — a journey into the intersection of technology, design, and human experience.
            </p>

            {/* Logo detail */}
            <div style={{
              marginTop: '40px',
              display: 'flex', alignItems: 'center', gap: '16px',
              opacity: inView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.5s',
            }}>
              <Image
                src="/images/noctky-logo.jpeg"
                alt="Noctky Logo"
                width={48}
                height={48}
                style={{ borderRadius: '6px', opacity: 0.7, border: '1px solid rgba(200,221,232,0.1)' }}
              />
              <div>
                <div style={{ fontFamily: 'Zovaline, serif', fontSize: '16px', letterSpacing: '0.2em', color: 'rgba(200,221,232,0.7)' }}>NOCTKY</div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(111,168,192,0.4)', marginTop: 2 }}>UNIVERSE</div>
              </div>
            </div>
          </div>

          {/* Right - Traits */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {traits.map((trait, i) => (
              <div
                key={trait.label}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  borderRadius: '4px',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(30px)',
                  transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(200,221,232,0.2)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = ''
                  el.style.transform = ''
                }}
              >
                <div style={{
                  color: 'rgba(111,168,192,0.7)',
                  marginBottom: '12px',
                }}>
                  <TraitIcon label={trait.label} />
                </div>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '12px', fontWeight: 500,
                  color: 'rgba(200,221,232,0.8)',
                  marginBottom: '6px',
                  letterSpacing: '0.03em',
                }}>
                  {trait.label}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(200,221,232,0.3)',
                  lineHeight: 1.5,
                }}>
                  {trait.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
