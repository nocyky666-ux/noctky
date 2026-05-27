'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  const phrases = [
    'INITIALIZING UNIVERSE',
    'CALIBRATING DIMENSIONS',
    'ENTERING NOCTKY WORLD',
  ]

  useEffect(() => {
    const steps = [
      { target: 30, delay: 0, duration: 600 },
      { target: 65, delay: 700, duration: 800 },
      { target: 90, delay: 1600, duration: 500 },
      { target: 100, delay: 2200, duration: 300 },
    ]

    steps.forEach(({ target, delay, duration }) => {
      setTimeout(() => {
        const start = Date.now()
        const startVal = target === 30 ? 0 : target === 65 ? 30 : target === 90 ? 65 : 90
        const tick = () => {
          const elapsed = Date.now() - start
          const t = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          setProgress(Math.round(startVal + (target - startVal) * ease))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }, delay)
    })

    setTimeout(() => setPhase(1), 800)
    setTimeout(() => setPhase(2), 1600)

    setTimeout(() => {
      setFadeOut(true)
      setTimeout(onComplete, 900)
    }, 2700)
  }, [onComplete])

  return (
    <div
      className="loader-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Ambient particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 2,
            height: 2,
            borderRadius: '50%',
            background: 'rgba(111,168,192,0.4)',
            left: `${10 + i * 7.5}%`,
            top: `${20 + Math.sin(i * 1.2) * 30}%`,
            animation: `particleDrift ${4 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Logo */}
      <div style={{
        opacity: phase >= 0 ? 1 : 0,
        transform: phase >= 0 ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <Image
          src="/images/noctky-logo.jpeg"
          alt="Noctky"
          width={80}
          height={80}
          style={{ borderRadius: '8px', opacity: 0.85 }}
        />
      </div>

      {/* Title */}
      <div style={{
        textAlign: 'center',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'translateY(0)' : 'translateY(15px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
      }}>
        <div style={{
          fontFamily: 'Zovaline, serif',
          fontSize: '28px',
          letterSpacing: '0.25em',
          color: 'rgba(200,221,232,0.9)',
          marginBottom: '6px',
        }}>
          NOCTKY
        </div>
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.4em',
          color: 'rgba(111,168,192,0.5)',
          textTransform: 'uppercase',
        }}>
          {phrases[Math.min(phase, phrases.length - 1)]}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: '180px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <div className="loader-progress" style={{ width: '100%' }}>
          <div className="loader-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.3em',
          color: 'rgba(111,168,192,0.35)',
        }}>
          {String(progress).padStart(3, '0')}
        </div>
      </div>

      {/* Corner decorations */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
        <div
          key={pos}
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            top: pos.includes('top') ? 32 : undefined,
            bottom: pos.includes('bottom') ? 32 : undefined,
            left: pos.includes('left') ? 32 : undefined,
            right: pos.includes('right') ? 32 : undefined,
            borderTop: pos.includes('top') ? '1px solid rgba(200,221,232,0.2)' : 'none',
            borderBottom: pos.includes('bottom') ? '1px solid rgba(200,221,232,0.2)' : 'none',
            borderLeft: pos.includes('left') ? '1px solid rgba(200,221,232,0.2)' : 'none',
            borderRight: pos.includes('right') ? '1px solid rgba(200,221,232,0.2)' : 'none',
            opacity: phase >= 1 ? 1 : 0,
            transition: `opacity 0.6s ease ${0.1 * i}s`,
          }}
        />
      ))}
    </div>
  )
}
