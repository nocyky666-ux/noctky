'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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

const socials = [
  {
    platform: 'Instagram',
    handle: '@ryzash_',
    url: 'https://instagram.com/ryzash_',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    platform: 'Telegram',
    handle: '@z4shii',
    url: 'https://t.me/z4shii',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13"/>
        <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
      </svg>
    ),
  },
  {
    platform: 'GitHub',
    handle: 'nocyky666-ux',
    url: 'https://github.com/nocyky666-ux',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" ref={ref} style={{
      position: 'relative',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px) 80px',
      overflow: 'hidden',
    }}>
      {/* Final atmospheric glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(26,58,80,0.12) 0%, transparent 70%)',
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
          }}>04 — PORTAL</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(200,221,232,0.08)' }} />
        </div>

        {/* Main contact content */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(36px, 7vw, 80px)',
            fontWeight: 700,
            color: 'rgba(200,221,232,0.9)',
            lineHeight: 1.05,
            marginBottom: '24px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}>
            Let&apos;s Build<br />
            <span style={{ color: 'rgba(111,168,192,0.65)' }}>Something</span><br />
            Extraordinary
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px', lineHeight: 1.8,
            color: 'rgba(200,221,232,0.35)',
            maxWidth: '400px',
            margin: '0 auto 48px',
            opacity: inView ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.25s',
          }}>
            Open for collaborations, projects, and creative conversations. Let&apos;s explore the boundaries of digital experience together.
          </p>

          {/* Social links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            opacity: inView ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
          }}>
            {socials.map((social, i) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-hover
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '10px',
                  border: '1px solid rgba(200,221,232,0.1)',
                  borderRadius: '3px',
                  color: 'rgba(200,221,232,0.45)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(200,221,232,0.3)'
                  el.style.color = 'rgba(200,221,232,0.9)'
                  el.style.background = 'rgba(200,221,232,0.04)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(200,221,232,0.1)'
                  el.style.color = 'rgba(200,221,232,0.45)'
                  el.style.background = 'transparent'
                }}
                >
                  {social.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '11px', fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}>
                    {social.platform}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    color: 'rgba(200,221,232,0.25)',
                    marginTop: '2px',
                  }}>
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(200,221,232,0.06)',
          paddingTop: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          opacity: inView ? 1 : 0,
          transition: 'all 0.8s ease 0.6s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image
              src="/images/noctky-logo.jpeg"
              alt="Noctky"
              width={24}
              height={24}
              style={{ borderRadius: '3px', opacity: 0.5 }}
            />
            <span style={{
              fontFamily: 'Zovaline, serif',
              fontSize: '12px', letterSpacing: '0.2em',
              color: 'rgba(200,221,232,0.3)',
            }}>
              NOCTKY
            </span>
          </div>

          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '9px', letterSpacing: '0.3em',
            color: 'rgba(200,221,232,0.2)',
          }}>
            © 2025 NOCTKY UNIVERSE — ALL DIMENSIONS RESERVED
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 4, height: 4, borderRadius: '50%',
              background: 'rgba(111,168,192,0.5)',
              boxShadow: '0 0 6px rgba(111,168,192,0.5)',
            }} />
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px', letterSpacing: '0.3em',
              color: 'rgba(111,168,192,0.3)',
            }}>
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
