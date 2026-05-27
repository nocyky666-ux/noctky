'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

const projects = [
  {
    number: '001',
    title: 'Atmospheric Portfolio',
    category: 'WebGL / Creative',
    description:
      'A cinematic portfolio experience using Three.js and React Three Fiber. Features atmospheric particle systems, architectural ring structures, and cinematic camera drift.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP', 'Next.js'],
    status: 'Live',
    year: '2024',
    accent: 'rgba(74, 143, 168, 0.15)',
  },
  {
    number: '002',
    title: 'AI Prompt Interface',
    category: 'AI / Frontend',
    description:
      'Minimal AI prompt engineering tool with real-time response streaming, conversation history, and elegant dark-mode UI designed for deep focus and productivity.',
    tags: ['Next.js', 'TypeScript', 'AI SDK', 'Tailwind'],
    status: 'WIP',
    year: '2024',
    accent: 'rgba(138, 96, 176, 0.1)',
  },
  {
    number: '003',
    title: 'Interactive Dashboard',
    category: 'Frontend / Data',
    description:
      'A real-time data visualization dashboard with smooth animated charts, dark theme, and responsive layout. Built for performance and visual elegance.',
    tags: ['React', 'Framer Motion', 'Recharts', 'Node.js'],
    status: 'Completed',
    year: '2024',
    accent: 'rgba(74, 143, 168, 0.08)',
  },
  {
    number: '004',
    title: 'Experimental WebGL Scene',
    category: 'WebGL / Creative',
    description:
      'An experimental 3D environment exploring volumetric lighting, custom GLSL shaders, and procedural geometry. A study in atmospheric digital space.',
    tags: ['Three.js', 'GLSL', 'WebGL', 'Postprocessing'],
    status: 'Experimental',
    year: '2024',
    accent: 'rgba(30, 58, 106, 0.15)',
  },
]

export default function ProjectsSection() {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '10rem 2rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--cyan-mid)',
              textTransform: 'uppercase',
            }}
          >
            03 / Work
          </span>
          <div className="line-h" style={{ maxWidth: 80 }} />
        </motion.div>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--bright)',
            letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}
        >
          Selected Projects
        </motion.h2>
        <motion.p
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontSize: '0.9rem',
            color: 'var(--silver)',
            opacity: 0.65,
            marginBottom: '4rem',
            maxWidth: 480,
          }}
        >
          Experiments in atmospheric digital experiences, creative interfaces, and immersive web environments.
        </motion.p>

        {/* Projects grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              variants={fadeUp(0.2 + i * 0.08)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '2rem',
                alignItems: 'start',
                padding: '2.5rem 2rem',
                border: '1px solid',
                borderColor: hovered === i ? 'rgba(74, 143, 168, 0.2)' : 'var(--border)',
                borderRadius: '2px',
                background: hovered === i ? project.accent : 'rgba(13, 17, 23, 0.4)',
                cursor: 'default',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--cyan-mid)',
                  opacity: 0.5,
                  paddingTop: '4px',
                }}
              >
                {project.number}
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                      fontWeight: 400,
                      color: 'var(--bright)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem',
                      color: 'var(--silver)',
                      opacity: 0.4,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--silver)',
                    lineHeight: 1.7,
                    maxWidth: 520,
                    marginBottom: '1.2rem',
                    opacity: 0.75,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem',
                        padding: '3px 10px',
                        border: '1px solid var(--border)',
                        borderRadius: '100px',
                        color: 'var(--silver)',
                        opacity: 0.7,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status + Year */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '8px',
                  paddingTop: '4px',
                  minWidth: '80px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color:
                      project.status === 'Live'
                        ? 'var(--cyan-pure)'
                        : project.status === 'WIP'
                        ? '#8a60b0'
                        : 'var(--silver)',
                    opacity: project.status === 'Live' ? 0.9 : 0.6,
                    textTransform: 'uppercase',
                  }}
                >
                  {project.status}
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'var(--silver)',
                    opacity: 0.35,
                  }}
                >
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
