'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// ─── Floating Particles ───────────────────────────────────────────────────────
function ParticleField({ count = 2000, scrollY }: { count?: number; scrollY: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = Math.sin(t * 0.008) * 0.1;
    ref.current.position.y = -scrollY.current * 0.002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8899aa"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// ─── Signature Orb ────────────────────────────────────────────────────────────
function SignatureOrb({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scroll = scrollY.current;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.z = t * 0.05;
      const scale = 1 - Math.min(scroll * 0.0003, 0.5);
      meshRef.current.scale.setScalar(scale);
      meshRef.current.position.y = -scroll * 0.0015;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.08 + Math.PI * 0.25;
      ringRef.current.rotation.y = t * 0.12;
      const scale = 1 - Math.min(scroll * 0.0003, 0.5);
      ringRef.current.scale.setScalar(scale);
      ringRef.current.position.y = -scroll * 0.0015;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.06 + Math.PI * 0.5;
      ring2Ref.current.rotation.y = t * 0.09;
      const scale = 1 - Math.min(scroll * 0.0003, 0.5);
      ring2Ref.current.scale.setScalar(scale);
      ring2Ref.current.position.y = -scroll * 0.0015;
    }
  });

  return (
    <group>
      {/* Core orb */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshDistortMaterial
            color="#0a1520"
            roughness={0.1}
            metalness={0.9}
            distort={0.3}
            speed={2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>

      {/* Orbital ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI * 0.25, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 120]} />
        <meshStandardMaterial color="#4a7fa5" emissive="#2d5a7a" emissiveIntensity={1.5} />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}>
        <torusGeometry args={[2.8, 0.008, 16, 120]} />
        <meshStandardMaterial color="#8899aa" emissive="#4a7fa5" emissiveIntensity={0.8} transparent opacity={0.6} />
      </mesh>

      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color="#4a7fa5" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// ─── Architectural Lines ───────────────────────────────────────────────────────
function ArchitecturalGrid({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const r = 6 + Math.random() * 4;
      result.push({
        x: Math.cos(angle) * r,
        y: (Math.random() - 0.5) * 20,
        z: Math.sin(angle) * r,
        h: 0.5 + Math.random() * 12,
      });
    }
    return result;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.02;
    groupRef.current.position.y = -scrollY.current * 0.001;
  });

  return (
    <group ref={groupRef}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, l.z]}>
          <boxGeometry args={[0.015, l.h, 0.015]} />
          <meshStandardMaterial
            color="#4a7fa5"
            emissive="#2d5a7a"
            emissiveIntensity={0.6}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Fog Atmosphere ───────────────────────────────────────────────────────────
function FogAtmosphere() {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#020408', 0.018);
    return () => { scene.fog = null; };
  }, [scene]);

  return null;
}

// ─── Camera Controller ────────────────────────────────────────────────────────
function CameraController({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 7));
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scroll = scrollY.current;

    targetPos.current.x = mouseRef.current.x * 0.8;
    targetPos.current.y = mouseRef.current.y * 0.4 + Math.sin(t * 0.15) * 0.2;
    targetPos.current.z = 7 + scroll * 0.003;

    camera.position.lerp(targetPos.current, 0.04);
    camera.lookAt(0, -scroll * 0.001, 0);
  });

  return null;
}

// ─── Main Canvas ──────────────────────────────────────────────────────────────
interface UniverseCanvasProps {
  scrollY: React.MutableRefObject<number>;
}

export default function UniverseCanvas({ scrollY }: UniverseCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60, near: 0.1, far: 200 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <FogAtmosphere />

      {/* Ambient lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#4a7fa5" distance={20} />
      <pointLight position={[10, 10, -10]} intensity={0.5} color="#2d5a7a" distance={40} />
      <pointLight position={[-10, -5, 10]} intensity={0.3} color="#8899aa" distance={30} />
      <directionalLight position={[0, 10, 5]} intensity={0.2} color="#c8d4e0" />

      <CameraController scrollY={scrollY} />
      <ParticleField scrollY={scrollY} />
      <SignatureOrb scrollY={scrollY} />
      <ArchitecturalGrid scrollY={scrollY} />
    </Canvas>
  );
}
