"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

/* ===================== LABEL TEXTURE ===================== */
function createLabelTexture(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;

  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "rgba(0,0,0,0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(0,255,132,0.6)";
  ctx.lineWidth = 2;
  ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

  ctx.font = "18px Inter, Arial";
  ctx.fillStyle = "#00ff84";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/* ===================== FACE LABELS ===================== */
function CubeLabels() {
  const labels = useMemo(
    () => [
      { text: "Ethereum", pos: [0, 0.32, 0.78], rot: [0, 0, 0] },
      { text: "Binance", pos: [0.78, 0, 0], rot: [0, Math.PI / 2, 0] },
      { text: "Solana", pos: [0, -0.32, -0.78], rot: [0, Math.PI, 0] },
      { text: "Polygon", pos: [-0.78, 0, 0], rot: [0, -Math.PI / 2, 0] },
    ],
    []
  );

  return (
    <group renderOrder={10}>
      {labels.map(({ text, pos, rot }) => (
        <group key={text} position={pos as any} rotation={rot as any}>
          {/* pill */}
          <mesh>
            <planeGeometry args={[0.5, 0.16]} />
            <meshBasicMaterial
              color="black"
              transparent
              opacity={0.8}
              depthTest={false}
              depthWrite={false}
            />
          </mesh>

          {/* text */}
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[0.5, 0.16]} />
            <meshBasicMaterial
              map={createLabelTexture(text)}
              transparent
              depthTest={false}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ===================== FACE GRID PANELS ===================== */
function FaceGrid({
  size = 1.2,
  divisions = 16,
  position,
  rotation,
}: {
  size?: number;
  divisions?: number;
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const step = size / divisions;
  const half = size / 2;

  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= divisions; i++) {
    const offset = -half + i * step;

    // horizontal lines
    points.push(new THREE.Vector3(-half, offset, 0));
    points.push(new THREE.Vector3(half, offset, 0));

    // vertical lines
    points.push(new THREE.Vector3(offset, -half, 0));
    points.push(new THREE.Vector3(offset, half, 0));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <lineSegments
      geometry={geometry}
      position={position}
      rotation={rotation}
    >
      <lineBasicMaterial
        color="#00ff84"
        transparent
        opacity={0.35}
      />
    </lineSegments>
  );
}
function CubeFaceGrids() {
  const size = 1.6;
  const h = size / 2;

  return (
    <>
      {/* FRONT */}
      <FaceGrid position={[0, 0, h]} rotation={[0, 0, 0]} />

      {/* BACK */}
      <FaceGrid position={[0, 0, -h]} rotation={[0, Math.PI, 0]} />

      {/* RIGHT */}
      <FaceGrid position={[h, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

      {/* LEFT */}
      <FaceGrid position={[-h, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

      {/* TOP */}
      <FaceGrid position={[0, h, 0]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* BOTTOM */}
      <FaceGrid position={[0, -h, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </>
  );
}

/* ===================== WIRED CUBE ===================== */
function WireCube() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={ref}>
      {/* outer edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1.5, 1.5)]} />
        <lineBasicMaterial color="#00ff84" />
      </lineSegments>

      {/* face grids */}
      <CubeFaceGrids />

      {/* internal wiring */}
      <lineSegments>
        <bufferGeometry
          setFromPoints={[
            new THREE.Vector3(-0.6, -0.6, -0.6),
            new THREE.Vector3(0.6, 0.6, 0.6),
            new THREE.Vector3(-0.6, 0.6, -0.6),
            new THREE.Vector3(0.6, -0.6, 0.6),
            new THREE.Vector3(-0.6, -0.6, 0.6),
            new THREE.Vector3(0.6, 0.6, -0.6),
          ]}
        />
        <lineBasicMaterial
          color="#00ff84"
          transparent
          opacity={0.25}
        />
      </lineSegments>

      {/* labels */}
      <CubeLabels />
    </group>
  );
}

/* ===================== SUBTLE STATIC CIRCLE ===================== */
function SubtleCircle() {
  return (
    <mesh rotation={[-0.35, 0, 0]}>
      <ringGeometry args={[1.58, 1.6, 128]} />
      <meshBasicMaterial
        color="#00ff84"
        transparent
        opacity={0.04}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ===================== SCENE ===================== */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.9} />

      {/* Rotating cube only */}
      <WireCube />

      {/* Fixed circle */}
      <SubtleCircle />

      {/* Fixed labels with float */}
      <FloatingCubeLabels />
    </>
  );
}


/* ===================== EXPORT ===================== */
export default function HeroCube3D() {
  return (
    <div className="w-[420px] h-[420px]">
      <Canvas camera={{ position: [0, 1.6, 5], fov: 38 }}>
        <Scene />
      </Canvas>
    </div>
  );
}


export function FloatingCubeLabels() {
  const refs = useRef<THREE.Group[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      ref.position.y =
        ref.userData.baseY + Math.sin(t * 1.4 + i) * 0.04; // 🔥 subtle float
    });
  });

  const labels = [
    { text: "Ethereum", position: [0, 0.25, 0.78] },
    { text: "Binance", position: [0.78, 0, 0] },
    { text: "Solana", position: [0, -0.25, -0.78] },
    { text: "Polygon", position: [-0.78, 0, 0] },
  ];

  return (
    <>
      {labels.map((l, i) => (
        <group
          key={l.text}
          ref={(el) => {
            if (el) {
              refs.current[i] = el;
              el.userData.baseY = l.position[1];
            }
          }}
          position={l.position as any}
        >
          <mesh>
            <planeGeometry args={[0.52, 0.16]} />
            <meshBasicMaterial
              color="black"
              transparent
              opacity={0.85}
              depthTest={false}
            />
          </mesh>

          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[0.52, 0.16]} />
            <meshBasicMaterial
              map={createLabelTexture(l.text)}
              transparent
              depthTest={false}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}
