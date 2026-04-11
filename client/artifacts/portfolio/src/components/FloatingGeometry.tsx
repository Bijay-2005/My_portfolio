import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// ─── Unified theme palette ─────────────────────────────
// Every object lives in the same deep-blue / indigo / violet space
const THEME = {
  core:    "#6366f1", // indigo
  accent:  "#818cf8", // light indigo
  bright:  "#60a5fa", // sky blue
  dim:     "#3730a3", // deep indigo
  subtle:  "#4338ca", // mid indigo
};

function FloatingSphere({ position, scale, speed, phase }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const startY = position[1];
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.position.y = startY + Math.sin(t * speed + phase) * 0.35;
    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.z = t * 0.18;
  });
  return (
    <Sphere ref={mesh} position={position} args={[scale, 32, 32]}>
      <MeshDistortMaterial
        color={THEME.core}
        attach="material"
        distort={0.35}
        speed={1.8}
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.65}
        emissive={THEME.accent}
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}

function FloatingTorus({ position, scale, speed, phase }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const startY = position[1];
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.position.y = startY + Math.cos(t * speed + phase) * 0.4;
    mesh.current.rotation.x = t * 0.45;
    mesh.current.rotation.y = t * 0.28;
  });
  return (
    <Torus ref={mesh} position={position} args={[scale, scale * 0.28, 16, 100]}>
      <meshStandardMaterial
        color={THEME.bright}
        transparent
        opacity={0.45}
        metalness={0.95}
        roughness={0.05}
        emissive={THEME.bright}
        emissiveIntensity={0.35}
      />
    </Torus>
  );
}

function FloatingIco({ position, scale, speed, phase }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const startY = position[1];
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.position.y = startY + Math.sin(t * speed + phase + 1) * 0.45;
    mesh.current.rotation.x = t * 0.38;
    mesh.current.rotation.y = t * 0.55;
  });
  return (
    <Icosahedron ref={mesh} position={position} args={[scale, 0]}>
      <meshStandardMaterial
        color={THEME.accent}
        wireframe
        transparent
        opacity={0.5}
        emissive={THEME.accent}
        emissiveIntensity={0.55}
      />
    </Icosahedron>
  );
}

function OrbitGroup({ children, speed, radius, phase }: { children: React.ReactNode; speed: number; radius: number; phase: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime() * speed + phase;
    group.current.position.x = Math.cos(t) * radius;
    group.current.position.z = Math.sin(t) * radius;
    // Slow self-rotation for extra drama
    group.current.rotation.y = t * 0.2;
  });
  return <group ref={group}>{children}</group>;
}

export default function FloatingGeometry() {
  return (
    <>
      <OrbitGroup speed={0.08} radius={14} phase={0}>
         <FloatingSphere position={[-5, 2, 0]}  scale={0.7}  speed={0.8} phase={0} />
      </OrbitGroup>
      <OrbitGroup speed={0.12} radius={12} phase={2}>
         <FloatingSphere position={[4, -2, 0]}  scale={0.55} speed={1.1} phase={1.5} />
      </OrbitGroup>
      <OrbitGroup speed={0.1} radius={16} phase={4}>
         <FloatingTorus position={[-3, -3, 0]}  scale={0.5}  speed={0.7} phase={0.5} />
      </OrbitGroup>
      <OrbitGroup speed={0.07} radius={15} phase={1}>
         <FloatingIco position={[2, 4, 0]}    scale={0.6}  speed={0.5} phase={0} />
      </OrbitGroup>
      <OrbitGroup speed={0.15} radius={10} phase={5}>
         <FloatingSphere position={[0, 5, -2]}   scale={0.38} speed={0.65} phase={3.0} />
      </OrbitGroup>
      <OrbitGroup speed={0.09} radius={18} phase={3}>
         <FloatingTorus position={[6, 0.5, 2]}  scale={0.38} speed={0.9} phase={2.2} />
      </OrbitGroup>
      <OrbitGroup speed={0.11} radius={13} phase={0.5}>
         <FloatingIco position={[-7, 0, 1]}   scale={0.38} speed={1.0} phase={1.8} />
      </OrbitGroup>
    </>
  );
}
