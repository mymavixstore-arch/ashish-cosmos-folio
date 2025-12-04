import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Check WebGL support
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

// Beautiful static fallback with CSS animations
function StaticFallback() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Glowing particles - primary color scheme
function GlowingParticles({ count = 1500 }) {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    
    const color1 = new THREE.Color('#6EE7B7'); // Primary green
    const color2 = new THREE.Color('#7DD3FC'); // Cyan
    const color3 = new THREE.Color('#A78BFA'); // Purple
    
    for (let i = 0; i < count; i++) {
      // Spiral galaxy distribution
      const angle = Math.random() * Math.PI * 4;
      const radius = 2 + Math.random() * 10;
      const height = (Math.random() - 0.5) * 4;
      
      pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
      pos[i * 3 + 1] = height + Math.sin(angle * 2) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
      
      // Random color selection
      const colorChoice = Math.random();
      const selectedColor = colorChoice < 0.4 ? color1 : colorChoice < 0.7 ? color2 : color3;
      col[i * 3] = selectedColor.r;
      col[i * 3 + 1] = selectedColor.g;
      col[i * 3 + 2] = selectedColor.b;
      
      siz[i] = Math.random() * 0.08 + 0.02;
    }
    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

// Orbiting energy rings
function EnergyRings() {
  const ring1Ref = useRef<THREE.Points>(null);
  const ring2Ref = useRef<THREE.Points>(null);
  const ring3Ref = useRef<THREE.Points>(null);

  const createRing = (radius: number, count: number) => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  };

  const ring1Positions = useMemo(() => createRing(3, 100), []);
  const ring2Positions = useMemo(() => createRing(4.5, 150), []);
  const ring3Positions = useMemo(() => createRing(6, 200), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3;
      ring1Ref.current.rotation.z = t * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 4;
      ring2Ref.current.rotation.y = t * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 5;
      ring3Ref.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <>
      <Points ref={ring1Ref} positions={ring1Positions} stride={3}>
        <PointMaterial
          transparent
          color="#6EE7B7"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.9}
        />
      </Points>
      <Points ref={ring2Ref} positions={ring2Positions} stride={3}>
        <PointMaterial
          transparent
          color="#7DD3FC"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>
      <Points ref={ring3Ref} positions={ring3Positions} stride={3}>
        <PointMaterial
          transparent
          color="#A78BFA"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.5}
        />
      </Points>
    </>
  );
}

// Star field background with twinkling
function StarField({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Central glowing core
function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.5 + Math.sin(t * 1.5) * 0.3);
      glowRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={[-3, 1, -3]}>
        {/* Core */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial color="#6EE7B7" />
        </mesh>
        {/* Inner glow */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#6EE7B7" transparent opacity={0.3} />
        </mesh>
        {/* Outer glow */}
        <mesh scale={2}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#6EE7B7" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

// Floating energy particles
function FloatingEnergy({ count = 50 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 1.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    particles.forEach((particle, i) => {
      dummy.position.set(
        particle.position[0] + Math.sin(t * particle.speed + particle.offset) * 0.5,
        particle.position[1] + Math.cos(t * particle.speed * 0.5 + particle.offset) * 0.3,
        particle.position[2] + Math.sin(t * particle.speed * 0.7 + particle.offset) * 0.5
      );
      dummy.scale.setScalar(0.02 + Math.sin(t * 2 + particle.offset) * 0.01);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#7DD3FC" transparent opacity={0.8} />
    </instancedMesh>
  );
}

// Camera controller with smooth mouse following
function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.pointer.x * 0.8, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.pointer.y * 0.5, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#0B1220']} />
      <fog attach="fog" args={['#0B1220', 8, 40]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[-3, 1, -3]} intensity={3} color="#6EE7B7" distance={15} />
      <pointLight position={[3, -1, 3]} intensity={1.5} color="#7DD3FC" distance={10} />
      
      <StarField />
      <GlowingParticles />
      <EnergyRings />
      <CentralCore />
      <FloatingEnergy />
      <CameraController />
    </>
  );
}

export function ParticleUniverse() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  if (!webGLSupported || hasError) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x0B1220, 1);
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}