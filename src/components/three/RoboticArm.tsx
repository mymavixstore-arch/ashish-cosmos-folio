import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
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

// Static fallback for robotic arm
function StaticArmFallback() {
  return (
    <div className="w-full h-[300px] md:h-[350px] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-8 h-24 bg-muted-foreground/20 rounded-lg -translate-x-1/2 rotate-12 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-0 left-1/2 w-6 h-16 bg-primary/30 rounded-lg -translate-x-1/2 -rotate-12 animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
}

// Industrial robotic arm segment
function ArmSegment({ 
  position, 
  rotation, 
  length = 1, 
  radius = 0.15, 
  color = '#6EE7B7',
  children 
}: { 
  position: [number, number, number];
  rotation?: [number, number, number];
  length?: number;
  radius?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Main cylinder segment */}
      <mesh position={[0, length / 2, 0]}>
        <cylinderGeometry args={[radius, radius * 1.1, length, 16]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Joint sphere */}
      <mesh position={[0, length, 0]}>
        <sphereGeometry args={[radius * 1.3, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Hydraulic detail */}
      <mesh position={[radius * 0.8, length / 2, 0]}>
        <cylinderGeometry args={[radius * 0.2, radius * 0.2, length * 0.7, 8]} />
        <meshStandardMaterial color="#374151" metalness={0.7} roughness={0.3} />
      </mesh>
      {children}
    </group>
  );
}

// Base of the robotic arm
function ArmBase() {
  return (
    <group>
      {/* Base plate */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.6, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Base column */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.5, 16]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Rotating base ring */}
      <mesh position={[0, 0.55, 0]}>
        <torusGeometry args={[0.3, 0.08, 8, 32]} />
        <meshStandardMaterial color="#6EE7B7" metalness={0.7} roughness={0.3} emissive="#6EE7B7" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

// Gripper/End effector
function Gripper({ open = 0.3 }: { open?: number }) {
  return (
    <group>
      {/* Gripper base */}
      <mesh>
        <boxGeometry args={[0.2, 0.15, 0.15]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Left finger */}
      <mesh position={[-0.1 - open * 0.1, -0.15, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.05, 0.25, 0.08]} />
        <meshStandardMaterial color="#6EE7B7" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Right finger */}
      <mesh position={[0.1 + open * 0.1, -0.15, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.05, 0.25, 0.08]} />
        <meshStandardMaterial color="#6EE7B7" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* LED indicator */}
      <mesh position={[0, 0.1, 0.08]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

// Main animated robotic arm
function AnimatedRoboticArm() {
  const groupRef = useRef<THREE.Group>(null);
  const arm1Ref = useRef<THREE.Group>(null);
  const arm2Ref = useRef<THREE.Group>(null);
  const arm3Ref = useRef<THREE.Group>(null);
  const gripperRef = useRef<THREE.Group>(null);
  
  // Random movement targets
  const targets = useMemo(() => ({
    baseRotation: { current: 0, target: 0, speed: 0.5 },
    arm1Rotation: { current: -0.3, target: -0.3, speed: 0.3 },
    arm2Rotation: { current: 0.6, target: 0.6, speed: 0.4 },
    arm3Rotation: { current: -0.4, target: -0.4, speed: 0.35 },
    gripperOpen: { current: 0.3, target: 0.3, speed: 0.8 },
  }), []);
  
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    
    // Update targets periodically with smooth random movements
    if (Math.floor(time * 0.3) !== Math.floor((time - delta) * 0.3)) {
      targets.baseRotation.target = (Math.random() - 0.5) * 1.5;
      targets.arm1Rotation.target = -0.2 + (Math.random() - 0.5) * 0.6;
      targets.arm2Rotation.target = 0.4 + (Math.random() - 0.5) * 0.8;
      targets.arm3Rotation.target = -0.3 + (Math.random() - 0.5) * 0.6;
      targets.gripperOpen.target = 0.1 + Math.random() * 0.5;
    }
    
    // Smooth interpolation
    const lerp = (current: number, target: number, speed: number) => {
      return current + (target - current) * speed * delta;
    };
    
    targets.baseRotation.current = lerp(targets.baseRotation.current, targets.baseRotation.target, targets.baseRotation.speed);
    targets.arm1Rotation.current = lerp(targets.arm1Rotation.current, targets.arm1Rotation.target, targets.arm1Rotation.speed);
    targets.arm2Rotation.current = lerp(targets.arm2Rotation.current, targets.arm2Rotation.target, targets.arm2Rotation.speed);
    targets.arm3Rotation.current = lerp(targets.arm3Rotation.current, targets.arm3Rotation.target, targets.arm3Rotation.speed);
    targets.gripperOpen.current = lerp(targets.gripperOpen.current, targets.gripperOpen.target, targets.gripperOpen.speed);
    
    // Apply rotations
    if (groupRef.current) {
      groupRef.current.rotation.y = targets.baseRotation.current;
    }
    if (arm1Ref.current) {
      arm1Ref.current.rotation.z = targets.arm1Rotation.current;
    }
    if (arm2Ref.current) {
      arm2Ref.current.rotation.z = targets.arm2Rotation.current;
    }
    if (arm3Ref.current) {
      arm3Ref.current.rotation.z = targets.arm3Rotation.current;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -1.5, 0]} scale={0.9}>
        <ArmBase />
        
        {/* First arm segment */}
        <group ref={arm1Ref} position={[0, 0.6, 0]}>
          <ArmSegment position={[0, 0, 0]} length={1.2} radius={0.18} color="#374151">
            {/* Second arm segment */}
            <group ref={arm2Ref} position={[0, 1.2, 0]}>
              <ArmSegment position={[0, 0, 0]} length={1} radius={0.14} color="#4b5563">
                {/* Third arm segment (wrist) */}
                <group ref={arm3Ref} position={[0, 1, 0]}>
                  <ArmSegment position={[0, 0, 0]} length={0.6} radius={0.1} color="#6b7280">
                    {/* Gripper */}
                    <group ref={gripperRef} position={[0, 0.7, 0]}>
                      <Gripper open={targets.gripperOpen.current} />
                    </group>
                  </ArmSegment>
                </group>
              </ArmSegment>
            </group>
          </ArmSegment>
        </group>
        
        {/* Cable details */}
        <mesh position={[0.2, 1, 0.1]}>
          <tubeGeometry args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(0, 0, 0),
              new THREE.Vector3(0.1, 0.5, 0.1),
              new THREE.Vector3(-0.1, 1, 0.05),
              new THREE.Vector3(0, 1.5, 0),
            ]),
            20, 0.02, 8, false
          ]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>
    </Float>
  );
}

// Particles around the arm
function ArmParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 50;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return pos;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6EE7B7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export function RoboticArm() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  if (!webGLSupported || hasError) {
    return <StaticArmFallback />;
  }

  return (
    <div className="w-full h-[300px] md:h-[350px]">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true }}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#6EE7B7" />
        <pointLight position={[0, 2, 2]} intensity={0.8} color="#22d3ee" />
        
        <AnimatedRoboticArm />
        <ArmParticles />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
