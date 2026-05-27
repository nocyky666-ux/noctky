'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function HeroSection() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    // Cinematic reveal sequence
    const t1 = setTimeout(() => setPhase(1), 400)   // darkness lifts
    const t2 = setTimeout(() => setPhase(2), 1200)  // world activates
    const t3 = setTimeout(() => setPhase(3), 2000)  // text emerges
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        padding: '0 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Opening darkness veil */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.4, delay: 0.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--void)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Horizontal atmospheric line — top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '18%',
          left: '8%',
          right: '8%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(74, 143, 168, 0.15) 40%, rgba(74, 143, 168, 0.15) 60%, transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Horizontal atmospheric line — bottom */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: '18%',
          left: '8%',
          right: '8%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(74, 143, 168, 0.1) 40%, rgba(74, 143, 168, 0.1) 60%, transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: 900,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              width: 32,
              height: '1px',
              background: 'var(--cyan-mid)',
              opacity: 0.5,
            }}
          />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              color: 'var(--cyan-mid)',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            Portfolio
          </span>
          <div
            style={{
              width: 32,
              height: '1px',
              background: 'var(--cyan-mid)',
              opacity: 0.5,
            }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0.1}
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: 'var(--bright)',
            marginBottom: '0.1em',
          }}
        >
          Noctky
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0.25}
          style={{ marginBottom: '2.5rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300,
              color: 'var(--silver)',
              letterSpacing: '0.01em',
              lineHeight: 1.4,
            }}
          >
            Web Development Explorer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0.4}
          style={{
            fontSize: '1rem',
            lineHeight: 1.85,
            color: 'var(--silver)',
            maxWidth: 560,
            margin: '0 auto 3.5rem',
            fontWeight: 300,
            letterSpacing: '0.01em',
            opacity: 0.75,
          }}
        >
          Building modern, interactive websites while exploring the future of artificial intelligence.
          Passionate about creative development and smooth digital experiences.
        </motion.p>

        {/* Tags row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0.55}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '4rem',
          }}
        >
          {[
            { label: 'High School Student', icon: '01' },
            { label: 'Prompt Engineer', icon: '02' },
            { label: 'AI Enthusiast', icon: '03' },
          ].map((tag) => (
            <div
              key={tag.label}
              className="tech-pill"
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  color: 'var(--cyan-mid)',
                  opacity: 0.6,
                }}
              >
                {tag.icon}
              </span>
              {tag.label}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={phase >= 3 ? 'visible' : 'hidden'}
          custom={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              background: 'rgba(74, 143, 168, 0.1)',
              border: '1px solid rgba(74, 143, 168, 0.25)',
              borderRadius: '2px',
              color: 'var(--cyan-pure)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(74, 143, 168, 0.18)'
              e.currentTarget.style.borderColor = 'rgba(74, 143, 168, 0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(74, 143, 168, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(74, 143, 168, 0.25)'
            }}
          >
            Explore
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              background: 'transparent',
              border: '1px solid rgba(136, 146, 164, 0.2)',
              borderRadius: '2px',
              color: 'var(--silver)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(136, 146, 164, 0.4)'
              e.currentTarget.style.color = 'var(--bright)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(136, 146, 164, 0.2)'
              e.currentTarget.style.color = 'var(--silver)'
            }}
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 ? 0.4 : 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--silver)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--cyan-mid), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
