'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'VOID', href: '#hero' },
  { label: 'ORIGIN', href: '#about' },
  { label: 'WORKS', href: '#projects' },
  { label: 'STACK', href: '#stack' },
  { label: 'SIGNAL', href: '#contact' },
];

export default function Navigation({ visible }: { visible: boolean }) {
  const [active, setActive] = useState('VOID');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(2,4,8,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,212,224,0.05)' : 'none',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('#hero', 'VOID')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'none',
          border: 'none',
          cursor: 'none',
          color: 'inherit',
        }}
      >
        <Image
          src="/images/noctky-logo.jpeg"
          alt="Noctky"
          width={28}
          height={28}
          style={{ borderRadius: '6px', opacity: 0.9 }}
        />
        <span
          className="font-zovaline"
          style={{
            fontSize: '14px',
            letterSpacing: '0.25em',
            color: 'rgba(200,212,224,0.8)',
          }}
        >
          NOCTKY
        </span>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href, item.label)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'none',
              fontSize: '11px',
              letterSpacing: '0.2em',
              fontFamily: 'DM Sans, Inter, sans-serif',
              fontWeight: 300,
              color: active === item.label
                ? 'rgba(200,212,224,0.9)'
                : 'rgba(136,153,170,0.5)',
              transition: 'color 0.3s ease',
              position: 'relative',
              padding: '4px 0',
            }}
            onMouseEnter={e => {
              if (active !== item.label) {
                (e.target as HTMLElement).style.color = 'rgba(200,212,224,0.7)';
              }
            }}
            onMouseLeave={e => {
              if (active !== item.label) {
                (e.target as HTMLElement).style.color = 'rgba(136,153,170,0.5)';
              }
            }}
          >
            {item.label}
            {active === item.label && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'rgba(74,127,165,0.6)',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a
          href="https://instagram.com/ryzash_"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(136,153,170,0.5)', transition: 'color 0.3s', fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(200,212,224,0.8)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(136,153,170,0.5)'}
        >
          IG
        </a>
        <a
          href="https://t.me/z4shii"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(136,153,170,0.5)', transition: 'color 0.3s', fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(200,212,224,0.8)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(136,153,170,0.5)'}
        >
          TG
        </a>
        <a
          href="https://github.com/nocyky666-ux"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(136,153,170,0.5)', transition: 'color 0.3s', fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(200,212,224,0.8)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(136,153,170,0.5)'}
        >
          GH
        </a>
      </div>
    </nav>
  );
}
