"use client";

import { useRef } from "react";

export default function CubeTailwind() {
  const cubeRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 45; // left/right
    const rotateX = -(y / rect.height - 0.5) * 45; // up/down

    if (cubeRef.current) {
      cubeRef.current.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    }
  }

  function handleMouseLeave() {
    if (cubeRef.current) {
      cubeRef.current.style.transform = "rotateX(18deg) rotateY(0deg)";
    }
  }

  return (
    <div
      className="relative w-[260px] h-[260px]"
      style={{ perspective: "900px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cubeRef}
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(18deg)" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40
                     shadow-[0_0_20px_rgba(31,122,255,0.25)]"
          style={{ transform: "translateZ(130px)" }}
        />

        {/* BACK */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40"
          style={{ transform: "rotateY(180deg) translateZ(130px)" }}
        />

        {/* RIGHT */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40"
          style={{ transform: "rotateY(90deg) translateZ(130px)" }}
        />

        {/* LEFT */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40"
          style={{ transform: "rotateY(-90deg) translateZ(130px)" }}
        />

        {/* TOP */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40"
          style={{ transform: "rotateX(90deg) translateZ(130px)" }}
        />

        {/* BOTTOM */}
        <div
          className="absolute inset-0 border border-[#1f7aff]/40"
          style={{ transform: "rotateX(-90deg) translateZ(130px)" }}
        />
      </div>
    </div>
  );
}
