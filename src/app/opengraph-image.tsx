import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Noctky Universe';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#020408',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(74,127,165,0.15) 0%, transparent 65%)',
          }}
        />

        {/* Grid lines */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px', opacity: 0.15 }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{ height: '1px', background: 'rgba(200,212,224,0.3)' }} />
          ))}
        </div>

        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: '40px', left: '40px', width: '40px', height: '40px', borderLeft: '1px solid rgba(200,212,224,0.3)', borderTop: '1px solid rgba(200,212,224,0.3)' }} />
        <div style={{ position: 'absolute', top: '40px', right: '40px', width: '40px', height: '40px', borderRight: '1px solid rgba(200,212,224,0.3)', borderTop: '1px solid rgba(200,212,224,0.3)' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '40px', height: '40px', borderLeft: '1px solid rgba(200,212,224,0.3)', borderBottom: '1px solid rgba(200,212,224,0.3)' }} />
        <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '40px', height: '40px', borderRight: '1px solid rgba(200,212,224,0.3)', borderBottom: '1px solid rgba(200,212,224,0.3)' }} />

        {/* Label */}
        <div style={{ fontSize: '13px', letterSpacing: '0.5em', color: 'rgba(74,127,165,0.7)', marginBottom: '24px', display: 'flex' }}>
          DIMENSIONAL PORTFOLIO
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '120px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'rgba(232,238,244,0.9)',
            lineHeight: 0.9,
            marginBottom: '32px',
            display: 'flex',
          }}
        >
          NOCTKY
        </div>

        {/* Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
          <div style={{ width: '40px', height: '1px', background: 'rgba(74,127,165,0.5)', display: 'flex' }} />
          <span style={{ fontSize: '16px', letterSpacing: '0.2em', color: 'rgba(200,212,224,0.45)', display: 'flex' }}>
            WEB DEVELOPER · AI EXPLORER · CREATIVE BUILDER
          </span>
          <div style={{ width: '40px', height: '1px', background: 'rgba(74,127,165,0.5)', display: 'flex' }} />
        </div>

        {/* Social handles */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {['@ryzash_', '@z4shii', 'nocyky666-ux'].map((handle) => (
            <span key={handle} style={{ fontSize: '13px', color: 'rgba(136,153,170,0.4)', letterSpacing: '0.1em', display: 'flex' }}>
              {handle}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
