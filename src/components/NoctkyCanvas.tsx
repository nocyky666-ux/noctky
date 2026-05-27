'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function SignatureOrb({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const s = scrollY.current * 0.001

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08
      meshRef.current.rotation.y = t * 0.12
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.15 - s * 1.5
      meshRef.current.position.z = -s * 2
      const scale = 1 - s * 0.3
      meshRef.current.scale.setScalar(Math.max(0.1, scale))
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.15 + 0.8
      ringRef.current.rotation.y = t * 0.1
      ringRef.current.position.y = Math.sin(t * 0.4) * 0.15 - s * 1.5
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.1 + 0.3
      ring2Ref.current.rotation.z = t * 0.08
      ring2Ref.current.position.y = Math.sin(t * 0.4) * 0.15 - s * 1.5
    }
  })

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.8, 4]} />
          <MeshDistortMaterial
            color="#0a1a28"
            emissive="#1a4a6a"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            distort={0.25}
            speed={2}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} position={[0, 0, 0]} rotation={[0.8, 0, 0]}>
        <torusGeometry args={[1.4, 0.008, 8, 100]} />
        <meshBasicMaterial color="#6fa8c0" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]} rotation={[0.3, 0.5, 0]}>
        <torusGeometry args={[1.7, 0.005, 8, 100]} />
        <meshBasicMaterial color="#a0b8c8" transparent opacity={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#1a4a6a" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const count = 600
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi) - 5
    }
    return pos
  }, [])

  const meshRef = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.015
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.008) * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#6fa8c0" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function ArchitecturalLines() {
  const lineRefs = useRef<THREE.BufferGeometry[]>([])
  
  const linesData = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const points: THREE.Vector3[] = []
      const y = (i - 3) * 2.5
      for (let j = 0; j <= 30; j++) {
        const x = (j / 30) * 30 - 15
        points.push(new THREE.Vector3(x, y, -12 + Math.sin(j * 0.3 + i) * 0.5))
      }
      return points
    })
  }, [])

  const groupRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {linesData.map((points, i) => {
        const positions = new Float32Array(points.length * 3)
        points.forEach((p, j) => {
          positions[j * 3] = p.x
          positions[j * 3 + 1] = p.y
          positions[j * 3 + 2] = p.z
        })
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={positions}
                count={points.length}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#1a3a50" transparent opacity={0.2} />
          </line>
        )
      })}
    </group>
  )
}

function CameraRig({ mouseRef }: { mouseRef: React.MutableRefObject<{x:number,y:number}> }) {
  const { camera } = useThree()
  const targetRef = useRef({ x: 0, y: 0 })

  useFrame(() => {
    targetRef.current.x += (mouseRef.current.x * 0.8 - targetRef.current.x) * 0.03
    targetRef.current.y += (mouseRef.current.y * 0.5 - targetRef.current.y) * 0.03
    camera.position.x = targetRef.current.x
    camera.position.y = targetRef.current.y
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function NoctkyCanvas({ scrollYRef, mouseRef }: {
  scrollYRef: React.MutableRefObject<number>,
  mouseRef: React.MutableRefObject<{x:number,y:number}>
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#020408' }}
    >
      <fog attach="fog" args={['#020408', 8, 35]} />
      <ambientLight intensity={0.1} color="#1a3a50" />
      <pointLight position={[0, 0, 2]} intensity={2} color="#6fa8c0" distance={8} />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#4a8a9a" distance={15} />
      <pointLight position={[5, -2, -8]} intensity={0.3} color="#2a5a7a" distance={20} />
      <CameraRig mouseRef={mouseRef} />
      <Stars radius={80} depth={60} count={800} factor={3} saturation={0} fade speed={0.3} />
      <FloatingParticles />
      <ArchitecturalLines />
      <SignatureOrb scrollY={scrollYRef} />
    </Canvas>
  )
}
