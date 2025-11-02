import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial color="#06b6d4" wireframe emissive="#06b6d4" emissiveIntensity={0.5} />
    </Sphere>
  );
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.5;
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.z += 0.008;
    }
  });

  return (
    <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={position}>
      <meshStandardMaterial color="#a855f7" wireframe emissive="#a855f7" emissiveIntensity={0.5} />
    </Box>
  );
}

function FloatingTorusShape({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.rotation.z += 0.006;
    }
  });

  return (
    <Torus ref={meshRef} args={[0.4, 0.15, 16, 32]} position={position}>
      <meshStandardMaterial color="#3b82f6" wireframe emissive="#3b82f6" emissiveIntensity={0.5} />
    </Torus>
  );
}

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingSphere position={[-3, 0, 0]} />
        <FloatingBox position={[3, 1, -2]} />
        <FloatingTorusShape position={[0, -2, -1]} />
        <FloatingSphere position={[4, -1, -3]} />
        <FloatingBox position={[-4, 2, -2]} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
