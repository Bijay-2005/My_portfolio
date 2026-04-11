import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StarField() {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);

    // Indigo/blue/violet palette for stars — all in the same theme
    const palette: [number, number, number][] = [
      [0.38, 0.40, 0.95], // indigo (#6366f1)
      [0.51, 0.55, 0.98], // light-indigo (#818cf8)
      [0.38, 0.65, 0.98], // sky-blue (#60a5fa)
      [0.90, 0.90, 1.00], // blue-white
      [0.72, 0.72, 1.00], // pale violet
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 220;

      const [r, g, b] = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
    return [positions, colors];
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.018;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.005;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.28}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}
