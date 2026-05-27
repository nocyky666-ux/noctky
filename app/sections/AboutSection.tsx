'use client'

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

const stats = [
  { number: '3+', label: 'Years Exploring' },
  { number: '15+', label: 'Projects Built' },
  { number: '∞', label: 'Ideas Forming' },
]

const identities = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
        <path d="M6 12v5c0 2.21 2.686 4 6 4s6-1.79 6-4v-5"/>
      </svg>
    ),
    label: 'High School Student',
    desc: 'Learning and building simultaneously'
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: 'Web Development Explorer',
    desc: 'Modern frontend & fullstack technologies'
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    label: 'Prompt Engineer',
    desc: 'Crafting intelligent AI interactions'
  },
]

export default function AboutSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '12rem 2rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
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
          01 / About
        </span>
        <div className="line-h" style={{ maxWidth: 80 }} />
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '6rem',
          alignItems: 'start',
        }}
      >
        {/* Left — Identity */}
        <div>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--bright)',
              marginBottom: '2rem',
            }}
          >
            Hi there,{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3em' }}>
              I'm Noctky
              {/* Replacing 👋 emoji with SVG */}
              <svg
                width="clamp(1.5rem, 3vw, 2.4rem)"
                height="clamp(1.5rem, 3vw, 2.4rem)"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <ellipse cx="16" cy="28" rx="10" ry="3" fill="rgba(74,143,168,0.08)"/>
                <rect x="11" y="4" width="10" height="18" rx="5" fill="#7ab8cc" opacity="0.9"/>
                <rect x="7" y="8" width="4" height="12" rx="2" fill="#7ab8cc" opacity="0.8"/>
                <rect x="21" y="10" width="4" height="10" rx="2" fill="#7ab8cc" opacity="0.7"/>
                <path d="M11 22 Q16 28 21 22" stroke="#4a8fa8" strokeWidth="1" fill="none" opacity="0.5"/>
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="prose-cinematic"
            style={{ marginBottom: '3rem' }}
          >
            A high school student who loves building modern and interactive websites
            while exploring the future of artificial intelligence. Passionate about
            creative development, smooth UI/UX experiences, and turning ideas into
            innovative digital projects.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              display: 'flex',
              gap: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--bright)',
                    letterSpacing: '-0.03em',
                    marginBottom: '4px',
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--silver)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Identity cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {identities.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp(0.15 + i * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '24px 28px',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                background: 'rgba(13, 17, 23, 0.5)',
                marginBottom: '1px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(42, 74, 96, 0.08)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(74, 143, 168, 0.25)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(13, 17, 23, 0.5)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
              }}
            >
              <div
                style={{
                  color: 'var(--cyan-mid)',
                  opacity: 0.7,
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--bright)',
                    letterSpacing: '0.01em',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--silver)',
                    opacity: 0.7,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}

          {/* What I do */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              marginTop: '2rem',
              padding: '28px',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              background: 'rgba(8, 10, 15, 0.6)',
            }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: 'var(--cyan-mid)',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                opacity: 0.7,
              }}
            >
              What I do
            </div>
            {[
              'Developing responsive and interactive websites',
              'Exploring AI tools and prompt engineering',
              'Learning modern frontend & fullstack technologies',
              'Creating experimental creative digital experiences',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '10px',
                  fontSize: '0.82rem',
                  color: 'var(--silver)',
                  lineHeight: 1.6,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan-mid)"
                  strokeWidth="1.5"
                  style={{ marginTop: '3px', flexShrink: 0, opacity: 0.6 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
