"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CrystalMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshPhongMaterial
        color="#1d4ed8"
        emissive="#1e40af"
        emissiveIntensity={0.15}
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function InnerCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color="#3b82f6"
        emissive="#2563eb"
        emissiveIntensity={0.3}
        transparent
        opacity={0.2}
        flatShading
      />
    </mesh>
  );
}

function OrbitingRing({ radius, speed, tilt, color, tubeRadius }: {
  radius: number; speed: number; tilt: number; color: string; tubeRadius: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z += speed;
    meshRef.current.rotation.x = tilt + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, tubeRadius, 16, 100]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.02 + 0.005;
    }
    return s;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#60a5fa"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function DataStreams() {
  const groupRef = useRef<THREE.Group>(null);

  const streams = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const points: THREE.Vector3[] = [];
      for (let j = 0; j < 30; j++) {
        const t = j / 30;
        const r = 2 + t * 3;
        points.push(new THREE.Vector3(
          Math.cos(angle + t * 2) * r,
          (t - 0.5) * 4,
          Math.sin(angle + t * 2) * r
        ));
      }
      arr.push(points);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {streams.map((pts, i) => {
        const curve = new THREE.CatmullRomCurve3(pts);
        const geometry = new THREE.TubeGeometry(curve, 40, 0.008, 8, false);
        return (
          <mesh key={i} geometry={geometry}>
            <meshBasicMaterial
              color="#93c5fd"
              transparent
              opacity={0.15}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} color="#bfdbfe" />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#1d4ed8" />
      <pointLight position={[0, 3, -5]} intensity={0.4} color="#60a5fa" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Lights />
        <CrystalMesh />
        <InnerCrystal />
        <OrbitingRing radius={2.5} speed={0.004} tilt={0.8} color="#3b82f6" tubeRadius={0.012} />
        <OrbitingRing radius={3.2} speed={-0.003} tilt={1.2} color="#1d4ed8" tubeRadius={0.008} />
        <OrbitingRing radius={2.0} speed={0.005} tilt={0.4} color="#60a5fa" tubeRadius={0.01} />
        <FloatingParticles />
        <DataStreams />
      </Canvas>
    </div>
  );
}
