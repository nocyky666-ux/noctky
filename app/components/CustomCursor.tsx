'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let raf: number
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onHover = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.6)'
        ringRef.current.style.borderColor = 'rgba(122, 184, 204, 0.7)'
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        ringRef.current.style.borderColor = 'rgba(122, 184, 204, 0.4)'
      }
    }
    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      links.forEach(el => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  })

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ transition: 'transform 0.3s ease, border-color 0.3s ease' }}
      />
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
      />
    </>
  )
}
