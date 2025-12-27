"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Dot = {
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function LoadingScreen() {
  const [showBrand, setShowBrand] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const dots: Dot[] = useMemo(
  () => [
    { x: 12, y: 22, size: 4, duration: 6 },
    { x: 26, y: 65, size: 5, duration: 7 },
    { x: 41, y: 36, size: 3.5, duration: 5 },
    { x: 56, y: 72, size: 5, duration: 8 },
    { x: 68, y: 20, size: 4, duration: 6 },
    { x: 76, y: 48, size: 4.5, duration: 7 },
    { x: 84, y: 67, size: 5, duration: 9 },
  ],
  []
);




  // TIMELINE
  useEffect(() => {
    const t1 = setTimeout(() => setShowBrand(true), 200);   // logo + name
    const t2 = setTimeout(() => {
  setShowBar(true);
  setShowCode(true); // ✅ CODE + BAR TOGETHER
}, 600);
     // bar starts
    const t3 = setTimeout(() => setShowGrid(true), 1200);   // grid fade
    const t4 = setTimeout(() => setShowDots(true), 1500);   // bubbles
     // code panel

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      

    };
  }, []);

  // LOADING BAR
  // LOADING BAR (GUARANTEED 0 → 100)
// LOADING BAR — HARD STOP AT 100%
useEffect(() => {
  if (!showBar) return;

  let current = 0;

 const interval = setInterval(() => {
  current += current < 85 ? 2 : 1;


    if (current >= 100) {
      current = 100;
      setProgress(100);       // ✅ force final render
      clearInterval(interval);
      return;
    }

    setProgress(current);
  }, 28); // smooth speed

  return () => clearInterval(interval);
}, [showBar]);


  
useEffect(() => {
  const blink = setInterval(() => {
    setCursorVisible((v) => !v);
  }, 500);

  return () => clearInterval(blink);
}, []);

   
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-[#070b09] overflow-hidden">

      {/* GRID (AFTER BAR STARTS) */}
     {/* GRID */}
{/* GRID – ULTRA LIGHT */}
{showGrid && (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    style={{
      backgroundImage: `
        linear-gradient(rgba(0,255,132,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,132,0.025) 1px, transparent 1px)
      `,
      backgroundSize: "40px 20px",
      filter: "blur(0.6px)",
      mixBlendMode: "screen",
    }}
  />
)}



      {/* DOT BUBBLES */}
      {showDots && (
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((dot, i) => (
           <span
  key={i}
  style={{
    position: "absolute",
    width: dot.size,
    height: dot.size,
    borderRadius: "50%",
    left: `${dot.x}%`,
    top: `${dot.y}%`,
    background: "rgba(0,255,132,0.75)",
    boxShadow: "0 0 10px rgba(0,255,132,0.8)",
    animation: `blink ${dot.duration}s ease-in-out infinite`,
  }}
/>


          ))}
        </div>
      )}

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* LOGO + NAME FIRST */}
        {showBrand && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex h-[96px] w-[96px] items-center justify-center rounded-xl
              bg-[#00ff84] shadow-[0_0_40px_rgba(0,255,132,0.6)]"
            >
              <span className="text-4xl font-bold text-black">X</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[2.2rem] font-extrabold tracking-widest text-[#00ff84]"
            >
              0x
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-2 text-sm tracking-[0.35em] text-white/90"
            >
              TECHNOLOGIES
            </motion.p>
          </>
        )}

        {/* LOADING BAR SECOND */}
        {showBar && (
          <div className="mt-6 w-[300px] flex items-center">
  <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
    <div
      className="absolute left-0 top-0 h-full"
      style={{
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, #00ff84 0%, #00eaff 100%)",
        boxShadow: "0 0 8px rgba(0,255,132,0.8)",
        transition: "width 0.15s linear",
      }}
    />
  </div>

  <span className="ml-3 text-[11px] text-white/70 tabular-nums">
    {progress}%
  </span>
</div>

        )}

        {/* CODE LAST */}
        {showCode && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-[360px] rounded-xl border border-[#00ff84]/40
            bg-black/70 px-5 py-4 font-mono text-[12.5px] text-white/80"
          >
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
            <p>
  {"}"}
  {cursorVisible && (
    <span className="ml-1 text-[#00ff84]">▋</span>
  )}
</p>

          </motion.div>
        )}
      </div>
    </section>
  );
}
