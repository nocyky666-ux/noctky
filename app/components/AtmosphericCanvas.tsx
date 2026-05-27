'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Floating particle field
function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 800

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 12 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.008
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.004) * 0.08
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4a8fa8"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  )
}

// Slow-drifting atmospheric fog sphere
function AtmosphereSphere() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.015
    ref.current.rotation.z = t * 0.007
    const mat = ref.current.material as THREE.MeshBasicMaterial
    mat.opacity = 0.03 + Math.sin(t * 0.3) * 0.01
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[8, 32, 32]} />
      <meshBasicMaterial
        color="#2a4a60"
        transparent
        opacity={0.04}
        side={THREE.BackSide}
        wireframe
      />
    </mesh>
  )
}

// Horizontal ring structure — architectural depth
function ArchitecturalRings() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.005
    groupRef.current.rotation.x = Math.sin(t * 0.003) * 0.04
  })

  const rings = useMemo(() => {
    return [
      { radius: 5, thickness: 0.005, opacity: 0.08, y: 0 },
      { radius: 7.5, thickness: 0.004, opacity: 0.05, y: 0.5 },
      { radius: 10, thickness: 0.003, opacity: 0.04, y: -0.5 },
      { radius: 3.2, thickness: 0.006, opacity: 0.1, y: 0.2 },
    ]
  }, [])

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + 0.1 * i, 0, 0.05 * i]} position={[0, ring.y, 0]}>
          <torusGeometry args={[ring.radius, ring.thickness, 2, 128]} />
          <meshBasicMaterial
            color="#4a8fa8"
            transparent
            opacity={ring.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

// Central ambient light orb
function CentralOrb() {
  const ref = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (!ref.current || !lightRef.current) return
    const t = state.clock.elapsedTime
    const scale = 1 + Math.sin(t * 0.4) * 0.08
    ref.current.scale.setScalar(scale)
    lightRef.current.intensity = 0.3 + Math.sin(t * 0.4) * 0.08
  })

  return (
    <group>
      <pointLight ref={lightRef} color="#4a8fa8" intensity={0.3} distance={20} decay={2} />
      <mesh ref={ref}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#7ab8cc" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

// Camera drift with mouse parallax
function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef([0, 0])
  const target = useRef(new THREE.Vector3(0, 0, 0))

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      ]
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // Slow cinematic drift
    const driftX = Math.sin(t * 0.06) * 0.8
    const driftY = Math.cos(t * 0.04) * 0.4
    // Mouse parallax (subtle)
    const mx = mouse.current[0] * 0.6
    const my = mouse.current[1] * 0.4
    target.current.set(driftX + mx, driftY + my, 0)
    camera.position.lerp(new THREE.Vector3(target.current.x, target.current.y, 14), 0.015)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function AtmosphericCanvas() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'default',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.02} />
        <CameraRig />
        <ParticleField />
        <AtmosphereSphere />
        <ArchitecturalRings />
        <CentralOrb />
        <fog attach="fog" args={['#020203', 20, 50]} />
      </Canvas>
    </div>
  )
}
