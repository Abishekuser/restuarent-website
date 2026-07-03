import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Sphere, Torus } from "@react-three/drei";

/* Stylized "thali plate" — a gold ring with orbiting spice spheres.
   Stands in for a literal food model while staying on-brand and lightweight. */
function ThaliPlate() {
  const ringRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    ringRef.current.rotation.z += delta * 0.15;
    groupRef.current.rotation.y += delta * 0.25;
  });

  const spiceColors = ["#B8452F", "#D4AF37", "#7A8C3A", "#8B3A1F", "#C97A2B"];

  return (
    <group ref={groupRef}>
      <Torus ref={ringRef} args={[1.6, 0.09, 32, 100]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
      </Torus>
      <Torus args={[1.15, 0.05, 32, 100]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshStandardMaterial color="#9B7818" metalness={0.85} roughness={0.3} />
      </Torus>

      {spiceColors.map((color, i) => {
        const angle = (i / spiceColors.length) * Math.PI * 2;
        const radius = 0.72;
        return (
          <Float key={i} speed={2 + i * 0.3} rotationIntensity={0.6} floatIntensity={0.8}>
            <Sphere
              args={[0.16, 32, 32]}
              position={[Math.cos(angle) * radius, 0.05, Math.sin(angle) * radius]}
            >
              <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

export default function FloatingFood3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 2.4, 4.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.4} color="#F0DBA0" />
        <pointLight position={[-3, -2, -2]} intensity={0.4} color="#D4AF37" />

        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.15} floatIntensity={1.1}>
            <ThaliPlate />
          </Float>
          <Environment preset="city" />
          <ContactShadows position={[0, -1.1, 0]} opacity={0.45} scale={8} blur={2.4} far={2} color="#000000" />
        </Suspense>
      </Canvas>
    </div>
  );
}
