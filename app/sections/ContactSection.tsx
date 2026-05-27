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

const links = [
  {
    label: 'GitHub',
    handle: '@noctky',
    href: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    handle: '@noctky',
    href: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.713 5.88 5.45-5.88zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'hello@noctky.dev',
    href: 'mailto:hello@noctky.dev',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@noctky.dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '12rem 2rem',
        textAlign: 'center',
      }}
    >
      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: 600,
          margin: '0 auto 6rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(74,143,168,0.2), transparent)',
          transformOrigin: 'center',
        }}
      />

      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '3rem',
          }}
        >
          <div style={{ width: 32, height: '1px', background: 'var(--border)' }} />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--cyan-mid)',
              textTransform: 'uppercase',
            }}
          >
            04 / Contact
          </span>
          <div style={{ width: 32, height: '1px', background: 'var(--border)' }} />
        </motion.div>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--bright)',
            marginBottom: '1.5rem',
          }}
        >
          Let's Build{' '}
          <span className="text-gradient-cyan">Something.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontSize: '0.95rem',
            color: 'var(--silver)',
            lineHeight: 1.8,
            marginBottom: '4rem',
            opacity: 0.7,
          }}
        >
          Open to collaborations, creative projects, and interesting conversations.
          Whether you have an idea or just want to connect — reach out.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '3.5rem' }}
        >
          <button
            onClick={copyEmail}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 36px',
              background: 'rgba(74, 143, 168, 0.08)',
              border: '1px solid rgba(74, 143, 168, 0.2)',
              borderRadius: '2px',
              color: 'var(--cyan-pure)',
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(74, 143, 168, 0.14)'
              e.currentTarget.style.borderColor = 'rgba(74, 143, 168, 0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(74, 143, 168, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(74, 143, 168, 0.2)'
            }}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </>
            ) : (
              <>
                hello@noctky.dev
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </>
            )}
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1px',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '20px 28px',
                border: '1px solid var(--border)',
                color: 'var(--silver)',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'rgba(13, 17, 23, 0.5)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--bright)'
                e.currentTarget.style.borderColor = 'rgba(74, 143, 168, 0.2)'
                e.currentTarget.style.background = 'rgba(42, 74, 96, 0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--silver)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'rgba(13, 17, 23, 0.5)'
              }}
            >
              {link.icon}
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </span>
              <span style={{ fontSize: '0.7rem', opacity: 0.45 }}>
                {link.handle}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={fadeUp(0.55)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          marginTop: '8rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(30, 36, 51, 0.5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
          margin: '8rem auto 0',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: 'var(--silver)',
            opacity: 0.35,
            letterSpacing: '0.1em',
          }}
        >
          NOCTKY © 2024
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: 'var(--cyan-mid)',
            opacity: 0.35,
            letterSpacing: '0.08em',
          }}
        >
          Atmospheric Minimal Futurism
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: 'var(--silver)',
            opacity: 0.35,
            letterSpacing: '0.1em',
          }}
        >
          Next.js · Three.js · Framer Motion
        </span>
      </motion.div>
    </section>
  )
}
