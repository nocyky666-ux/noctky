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

const projects = [
  {
    num: '01',
    title: 'Dimensional Interface',
    desc: 'A next-generation WebGL dashboard with real-time data visualization and immersive 3D environments. Built with React, Three.js, and custom GLSL shaders.',
    tags: ['React', 'Three.js', 'GLSL', 'WebGL'],
    status: 'Featured',
    year: '2025',
  },
  {
    num: '02',
    title: 'Neural Commerce',
    desc: 'AI-powered e-commerce platform with intelligent product recommendations, dynamic pricing, and a cinematic shopping experience.',
    tags: ['Next.js', 'AI', 'Tailwind', 'Node.js'],
    status: 'In Progress',
    year: '2025',
  },
  {
    num: '03',
    title: 'Atmospheric Portfolio',
    desc: 'Custom portfolio system with scroll-triggered animations, glassmorphic UI elements, and smooth cinematic transitions using GSAP and Framer Motion.',
    tags: ['GSAP', 'Framer Motion', 'CSS', 'JavaScript'],
    status: 'Live',
    year: '2024',
  },
  {
    num: '04',
    title: 'Prompt Architect',
    desc: 'Advanced prompt engineering toolkit for AI systems. Features template management, version control, and real-time testing capabilities.',
    tags: ['AI', 'React', 'API', 'TypeScript'],
    status: 'Development',
    year: '2025',
  },
]

export default function ProjectsSection() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" ref={ref} style={{
      position: 'relative',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
      overflow: 'hidden',
    }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '30%', right: '-10%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,80,0.1) 0%, transparent 70%)',
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
          }}>02 — CRAFT</span>
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
          Selected<br />
          <span style={{ color: 'rgba(111,168,192,0.65)' }}>Work</span>
        </h2>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {projects.map((project, i) => (
            <div
              key={project.num}
              className="project-card glass-card"
              style={{
                padding: 'clamp(24px, 3vw, 36px) clamp(20px, 3vw, 40px)',
                borderRadius: '3px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s`,
                cursor: 'default',
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '32px',
                alignItems: 'start',
              }}>
                {/* Number */}
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px', letterSpacing: '0.2em',
                  color: 'rgba(111,168,192,0.3)',
                  paddingTop: '3px',
                }}>
                  {project.num}
                </span>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      fontWeight: 600,
                      color: 'rgba(200,221,232,0.85)',
                      letterSpacing: '0.01em',
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '9px', letterSpacing: '0.2em',
                      color: 'rgba(111,168,192,0.45)',
                      padding: '3px 8px',
                      border: '1px solid rgba(111,168,192,0.15)',
                      borderRadius: '2px',
                    }}>
                      {project.status}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px', lineHeight: 1.7,
                    color: 'rgba(200,221,232,0.35)',
                    maxWidth: '560px',
                    marginBottom: '16px',
                  }}>
                    {project.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Year + arrow */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-end', gap: '16px',
                }}>
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '10px', letterSpacing: '0.2em',
                    color: 'rgba(200,221,232,0.2)',
                  }}>
                    {project.year}
                  </span>
                  <div style={{ color: 'rgba(200,221,232,0.2)', transition: 'color 0.3s' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
