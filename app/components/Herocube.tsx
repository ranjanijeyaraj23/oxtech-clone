"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function NeuralPlane() {
  const mesh = useRef<THREE.Mesh>(null!);
  const { mouse, clock } = useThree();

  useFrame(() => {
    const geom = mesh.current.geometry as THREE.PlaneGeometry;
    const pos = geom.attributes.position;
    const time = clock.getElapsedTime();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // distance from cursor
      const dx = x - mouse.x * 3.5;
      const dy = y - mouse.y * 3.5;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // 🔥 energy pulse wave
      const pulse =
        Math.sin(dist * 3 - time * 4) *
        Math.exp(-dist * 0.9);

      pos.setZ(i, pulse * 0.25);
    }

    pos.needsUpdate = true;
    geom.computeVertexNormals();
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.15, 0, 0]}>
      <planeGeometry args={[8, 8, 100, 100]} />
      <meshStandardMaterial
        color="#1f7aff"
        wireframe
        transparent
        opacity={0.38}
      />
    </mesh>
  );
}

export default function InteractiveNeuralField() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] sm:aspect-[1/1]">

      <Canvas camera={{ position: [0, 2.3, 4.2], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={1.1} />

        {/* Blue pulse */}
        <NeuralPlane />

        {/* Green secondary glow */}
        <pointLight
          position={[0, 2, 2]}
          intensity={1.2}
          color="#3bb273"
        />
      </Canvas>
    </div>
  );
}
