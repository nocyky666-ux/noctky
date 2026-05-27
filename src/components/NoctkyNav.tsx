'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'ORIGIN', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CRAFT', href: '#projects' },
  { label: 'STACK', href: '#stack' },
  { label: 'PORTAL', href: '#contact' },
]

export default function NoctkyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('ORIGIN')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '20px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(2,4,8,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,221,232,0.06)' : 'none',
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      {/* Logo */}
      <button
        onClick={() => scrollTo('#hero')}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'none' }}
        data-hover
      >
        <Image
          src="/images/noctky-logo.jpeg"
          alt="Noctky"
          width={28}
          height={28}
          style={{ borderRadius: '4px', opacity: 0.8 }}
        />
        <span style={{
          fontFamily: 'Zovaline, serif',
          fontSize: '14px',
          letterSpacing: '0.2em',
          color: 'rgba(200,221,232,0.8)',
        }}>
          NOCTKY
        </span>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => { scrollTo(item.href); setActive(item.label) }}
            className="nav-link"
            data-hover
            style={{
              background: 'none',
              border: 'none',
              cursor: 'none',
              color: active === item.label ? 'rgba(200,221,232,0.85)' : undefined,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Status indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#6fa8c0',
          boxShadow: '0 0 8px #6fa8c0',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.3em',
          color: 'rgba(111,168,192,0.5)',
        }}>
          ONLINE
        </span>
      </div>
    </nav>
  )
}
