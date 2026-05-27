'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [aiMsg, setAiMsg] = useState('Connection established.')
  const [showMsg, setShowMsg] = useState(false)

  const messages = [
    'Connection established.',
    'Signal synchronized.',
    'Alignment stable.',
    'System observing.',
    'Environment loaded.',
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Subtle AI message appearance — rare and intentional
    const timeout = setTimeout(() => {
      setAiMsg(messages[Math.floor(Math.random() * messages.length)])
      setShowMsg(true)
      setTimeout(() => setShowMsg(false), 4000)
    }, 3200)
    return () => clearTimeout(timeout)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav
        className="flex items-center justify-between px-8 py-6 md:px-12"
        style={{
          background: scrolled
            ? 'rgba(2, 2, 3, 0.7)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30, 36, 51, 0.6)' : 'none',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--cyan-pure)',
              boxShadow: '0 0 10px rgba(122, 184, 204, 0.6)',
            }}
          />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--bright)',
            }}
          >
            NOCTKY
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: 'var(--silver)',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--bright)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--silver)')}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* AI Message — subtle */}
        <AnimatePresence>
          {showMsg && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: 'var(--cyan-mid)',
                letterSpacing: '0.1em',
                opacity: 0.6,
              }}
            >
              {aiMsg}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
