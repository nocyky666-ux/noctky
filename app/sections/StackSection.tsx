'use client'

import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

const coreStack = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 75 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Three.js', level: 65 },
  { name: 'Node.js', level: 70 },
]

const advancedTools = [
  'React Three Fiber',
  'Drei',
  'GSAP',
  'Framer Motion',
  'Lenis',
  'GLSL',
  'Postprocessing',
  'WebGL',
]

export default function StackSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="stack"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '10rem 2rem',
        background: 'linear-gradient(to bottom, transparent, rgba(8, 10, 15, 0.5) 30%, rgba(8, 10, 15, 0.5) 70%, transparent)',
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
            02 / Tech Stack
          </span>
          <div className="line-h" style={{ maxWidth: 80 }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
          }}
        >
          {/* Left — Core stack with skill bars */}
          <div>
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 300,
                color: 'var(--bright)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              Core Technologies
            </motion.h2>
            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                fontSize: '0.85rem',
                color: 'var(--silver)',
                marginBottom: '3rem',
                opacity: 0.7,
                lineHeight: 1.6,
              }}
            >
              The foundation I build upon daily
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {coreStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={fadeUp(0.2 + i * 0.05)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: 'var(--light)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tech.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--silver)',
                        opacity: 0.5,
                      }}
                    >
                      {tech.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '1px',
                      background: 'var(--border)',
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, var(--cyan-mid), var(--cyan-pure))`,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Advanced & tools */}
          <div>
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 300,
                color: 'var(--bright)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              Advanced Stack
            </motion.h2>
            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                fontSize: '0.85rem',
                color: 'var(--silver)',
                marginBottom: '3rem',
                opacity: 0.7,
                lineHeight: 1.6,
              }}
            >
              Specialized tools for immersive experiences
            </motion.p>

            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '3rem',
              }}
            >
              {advancedTools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="tech-pill"
                >
                  {tool}
                </motion.div>
              ))}
            </motion.div>

            {/* Architecture card */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                padding: '28px',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                background: 'rgba(8, 10, 15, 0.7)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent corner */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  background: 'linear-gradient(225deg, rgba(74, 143, 168, 0.1), transparent)',
                }}
              />
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'var(--cyan-mid)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  opacity: 0.7,
                }}
              >
                Philosophy
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--silver)',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  opacity: 0.8,
                }}
              >
                "Technology must remain invisible. The user should only feel atmosphere, immersion, smoothness, and elegance."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
