import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, Component, ReactNode, useState, useEffect } from "react";
import StarField from "./StarField";
import FloatingGeometry from "./FloatingGeometry";

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function CosmicFallback() {
  return (
    <div
      className="w-full h-full"
      style={{
        background: "radial-gradient(ellipse at center, rgba(30,58,138,0.3) 0%, rgba(9,11,19,0) 70%)",
      }}
    >
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.15} />
      {/* All lights in the same indigo/blue family */}
      <pointLight position={[10, 10, 10]}   intensity={1.6} color="#6366f1" />   {/* indigo key  */}
      <pointLight position={[-10, -10, -10]} intensity={0.9} color="#818cf8" />   {/* light-indigo fill */}
      <pointLight position={[0, 5, 5]}       intensity={0.6} color="#60a5fa" />   {/* sky-blue rim  */}
      <StarField />
      <FloatingGeometry />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0.6} fade speed={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2 + 0.3}
        minPolarAngle={Math.PI / 2 - 0.3}
      />
    </>
  );
}

export default function HeroScene() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <CosmicFallback />;
  }

  return (
    <ErrorBoundary fallback={<CosmicFallback />}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}
