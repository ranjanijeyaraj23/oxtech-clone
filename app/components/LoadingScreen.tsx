"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "../components/BackgroundGrid";
import type { Transition } from "framer-motion";
const cubic: Transition["ease"] = [0.4, 0.0, 0.2, 1];
export default function LoadingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [progress, setProgress] = useState(0);
const [showDots, setShowDots] = useState(false);

  const [showLogo, setShowLogo] = useState(false);
  const [showOx, setShowOx] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [visible, setVisible] = useState(true);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- TIMELINE ---------------- */

 useEffect(() => {
  if (prefersReducedMotion) {
    setShowLogo(true);
    setShowOx(true);
    setShowTech(true);
    setShowBar(true);
    setShowCode(true);
    setShowDots(true); // ✅ show dots immediately in reduced motion
    setProgress(100);
    setTimeout(() => setVisible(false), 300);
    return;
  }

  setTimeout(() => setShowLogo(true), 300);
  setTimeout(() => setShowOx(true), 900);
  setTimeout(() => setShowTech(true), 1300);
  setTimeout(() => setShowBar(true), 1750);

  // 🔥 DOTS APPEAR AFTER BAR STARTS
  setTimeout(() => setShowDots(true), 1900);

  setTimeout(() => setShowCode(true), 2500);
}, []);

  /* ---------------- PROGRESS ---------------- */

  useEffect(() => {
    if (!showBar) return;

    const duration = 2600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(pct));

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        // hold, then exit
        setTimeout(() => setVisible(false), 300);
      }
    };

    requestAnimationFrame(tick);
  }, [showBar]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: cubic }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center  overflow-x-hidden
  min-h-[100svh] will-change-opacity"
        >
          {/* GRID */}
          <BackgroundGrid />

          {/* GLOBAL GLOW */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,132,0.18),transparent_65%)]" /> */}

{/* ULTRA-LIGHT VIGNETTE GLOW */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at center, rgba(0,200,150,0.02) 0%, rgba(0,0,0,0) 65%)",
  }}
/>

          {/* DOTS */}
          {/* {showDots && <Dots />} */}

<div className="absolute inset-0 overflow-hidden">
  {showDots && <Dots />}
</div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
           {showLogo && (
  <motion.div
    initial={{ scale: 0.96, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      y: [0, -6, 0], // 👈 subtle float
    }}
    transition={{
      scale: { duration: 0.6, ease: cubic },
      opacity: { duration: 0.6, ease: cubic },
      y: {
        duration: 4.2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }}
    className="mb-6 will-change-transform"
  >
    {/* <div className="w-28 h-28 bg-[rgb(0,255,132)] rounded-md flex items-center justify-center shadow-[0_0_45px_rgba(0,255,160,0.55)]"> */}
<OxLogo />

      {/* <span className="text-black text-4xl font-bold">X</span>
    </div> */}
  </motion.div>
)}

{showOx && (
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.25, ease: cubic }}
    className="relative font-bold leading-none"
  >
    {/* O */}
    <span
      className="text-[rgb(0,255,132)] text-4xl"
      style={{
        textShadow: `
          0 0 6px rgba(0,255,132,0.45),
          0 0 14px rgba(0,255,132,0.35),
          0 0 32px rgba(0,255,132,0.25)
        `,
      }}
    >
      O
    </span>

    {/* x */}
    <span
      className="text-[#00bfff] text-3xl ml-0.5"
      style={{
        textShadow: `
          0 0 6px rgba(0,191,255,0.45),
          0 0 16px rgba(0,191,255,0.35),
          0 0 36px rgba(0,191,255,0.25)
        `,
      }}
    >
      x
    </span>
  </motion.h1>
)}




            {showTech && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: cubic }}
                className="mt-2 text-[1.8rem] tracking-wider font-bold text-white will-change-opacity"
              >
                TECHNOLOGIES
              </motion.p>
            )}

            {showBar && (
              <div className="w-64 mt-6">
                <div className="h-[2px] bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00ff84] to-[#00bfff]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 text-right mt-1">
                  {progress}%
                </p>
              </div>
            )}

            {showCode && (
              <motion.div
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: cubic }}
  className="
  mt-[22px]
  w-[90vw]
  max-w-[360px]
  bg-black/65
  border border-[#00ff84]/30
  rounded-lg
  px-4 py-[14px]
  font-mono
  text-[14px]
  leading-[18px]
  tracking-[-0.025em]
  will-change-transform will-change-opacity
"

>
<div className="space-y-[6px]">
  {/* Line 01 */}
  <div className="flex">
    <span className="w-[28px] text-white/45 text-right shrink-0">
      01
    </span>
    <span className="ml-3 text-white/45">
      // The next generation of blockchain
    </span>
  </div>

  {/* Line 02 */}
  <div className="flex">
    <span className="w-[28px] text-white/45 text-right shrink-0">
      02
    </span>
    <span className="ml-3 text-purple-300">
      class <span className="text-sky-400">BlockchainInnovation</span> {"{"}
    </span>
  </div>

  {/* Line 03 (indented code ONLY) */}
  <div className="flex">
    <span className="w-[28px] text-white/45 text-right shrink-0">
      03
    </span>
    <span className="ml-3 pl-[14px] text-amber-300">
      build(
      <span className="text-emerald-400">
        "next-gen solutions"
      </span>
      );
    </span>
  </div>

  {/* Line 04 */}
  <div className="flex">
    <span className="w-[28px] text-white/45 text-right shrink-0">
      04
    </span>
    <span className="ml-3 text-purple-300">
      {"}"}
      <span className="inline-block w-[7px] h-[14px] bg-emerald-400 ml-[6px] animate-cursor align-middle" />
    </span>
  </div>
</div>

              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- DOTS ---------------- */

function Dots() {
  const positions = [
    [12, 18],
    [32, 12],
    [58, 16],
    [78, 22],
    [22, 56],
    [48, 62],
    [72, 58],
    [16, 82],
    [56, 80],
  ];

  return (
    <>
      {positions.map(([x, y], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1 }} // ✅ snap in
          animate={{ opacity: [0.4, 1, 0.4] }} // breathing only
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: cubic,
          }}
          className="absolute rounded-full will-change-opacity"
          style={{
            width: 6,
            height: 6,
            left: `${x}%`,
            top: `${y}%`,
            background: "#00ff84",
            boxShadow: "0 0 10px rgba(0,255,160,0.55)", // 🔥 softer glow
          }}
        />
      ))}
    </>
  );
}


function OxLogo() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      className="block"
    >
      <defs>
        <filter
          id="glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          {/* inner glow */}
          <feGaussianBlur
            stdDeviation="2"
            result="blur1"
          />
         <feColorMatrix
  in="blur1"
  type="matrix"
  values="
    0 0 0 0 0
    0 0.85 0 0 0
    0 0 0.75 0 0
    0 0 0 1 0"
/>


          {/* outer bloom */}
          <feGaussianBlur
            in="greenGlow"
            stdDeviation="8"
            result="blur2"
          />

          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="greenGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* glowing square */}
      <rect
        x="16"
        y="16"
        width="80"
        height="80"
        rx="8"
        fill="#00ffb3"
        filter="url(#glow)"
      />

      {/* X text */}
      <text
        x="56"
        y="64"
        textAnchor="middle"
        fontSize="36"
        fontWeight="700"
        fill="#000"
        fontFamily="Inter, sans-serif"
      >
        X
      </text>
    </svg>
  );
}
