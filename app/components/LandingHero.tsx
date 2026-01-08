"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Dot = {
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function LandingHero() {
  const [progress, setProgress] = useState(0);

  // fixed dots (pixel-stable)
  const dots: Dot[] = useMemo(
    () => [
      { x: 12, y: 22, size: 1.2, duration: 6 },
      { x: 26, y: 65, size: 1.5, duration: 7 },
      { x: 41, y: 36, size: 1.3, duration: 5 },
      { x: 56, y: 72, size: 1.7, duration: 8 },
      { x: 68, y: 20, size: 1.2, duration: 6 },
      { x: 76, y: 48, size: 1.4, duration: 7 },
      { x: 84, y: 67, size: 1.8, duration: 9 },
      { x: 18, y: 80, size: 1.2, duration: 6 },
    ],
    []
  );

  // progress animation ONLY
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 1 : 100));
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-[#070b09] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,132,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,132,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
        }}
      />

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              backgroundColor: "#00ff84",
              opacity: 0.18,
              animation: `blink ${dot.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* LOGO */}
        <div className="mb-6 flex h-[96px] w-[96px] items-center justify-center rounded-xl
          bg-[#00ff84] shadow-[0_0_40px_rgba(0,255,132,0.6)]">
          <span className="text-4xl font-bold text-black">X</span>
        </div>

        {/* BRAND */}
        <h1 className="text-[2.2rem] font-extrabold tracking-widest text-[#00ff84]">
          0x
        </h1>

        <p className="mt-2 text-sm tracking-[0.35em] text-white/90">
          TECHNOLOGIES
        </p>

        {/* STRAIGHT LOADING BAR */}
        <div className="mt-6 w-[300px]">
          <div className="relative flex items-center">
            <div className="h-[2px] w-full bg-white/15 overflow-hidden">
              <div
                className="h-full bg-[#00ff84]"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.2s linear",
                }}
              />
            </div>
            <span className="ml-3 text-[11px] text-white/70 tabular-nums">
              {progress}%
            </span>
          </div>
        </div>

        {/* CODE PANEL */}
        <div className="mt-8 w-[360px] rounded-xl
          border border-[#00ff84]/40
          bg-black/70 px-5 py-4
          font-space text-[12.5px] text-white/80
          shadow-[0_0_30px_rgba(0,255,132,0.15)]">
          <p className="text-white/40">
            01 // The next generation of blockchain
          </p>
          <p className="mt-2">
            <span className="text-purple-400">class</span>{" "}
            <span className="text-emerald-400">BlockchainInnovation</span> {"{"}
          </p>
          <p className="ml-4 text-yellow-400">
            build(<span className="text-emerald-300">"next-gen solutions"</span>);
          </p>
          <p>{"}"}</p>
        </div>
      </div>
    </motion.section>
  );
}
