"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import BackgroundGrid from "../components/BackgroundGrid";
import type { Transition } from "framer-motion";
import Image from "next/image";
const cubic: Transition["ease"] = [0.4, 0.0, 0.2, 1];
export default function LoadingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [progress, setProgress] = useState(0);
const [showDots, setShowDots] = useState(false);

  const [showLogo, setShowLogo] = useState(true);
  const [showOx, setShowOx] = useState(true);
  const [showTech, setShowTech] = useState(true);
  const [showBar, setShowBar] = useState(true);
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

  // setTimeout(() => setShowLogo(true), 300);
  // setTimeout(() => setShowOx(true), 900);
  // setTimeout(() => setShowTech(true), 1300);
  // setTimeout(() => setShowBar(true), 1750);
// ✅ INITIAL STATIC LOAD
  setShowLogo(true);
  setShowOx(true);
  setShowTech(true);
  setShowBar(true);

  // ⏳ WAIT before progress starts
  const startProgressTimer = setTimeout(() => {
    setProgress(0); // triggers progress effect
  }, 200); // reference-like delay

  return () => {
    clearTimeout(startProgressTimer);
  };
}, []);

  /* ---------------- PROGRESS ---------------- */

 /* ---------------- PROGRESS ---------------- */

useEffect(() => {
  if (!showBar) return;

  let started = false;
  const duration = 3000;

  const start = performance.now();

  const tick = (now: number) => {
    if (!started) started = true;

    const elapsed = now - start;
    const pct = Math.min((elapsed / duration) * 100, 100);
    setProgress(pct);

    if (pct < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => setVisible(false), 500);
    }
  };

  // ⛔ prevent auto-start on mount
  if (progress === 0) {
    requestAnimationFrame(tick);
  }
}, [showBar, progress]);
/* ---------------- PROGRESS-DRIVEN REVEALS ---------------- */

useEffect(() => {
  // ✅ Dots appear AFTER progress starts
  if (progress > 0 && !showDots) {
    setShowDots(true);
  }

  // ✅ Code appears DURING progress
  if (progress > 0 && !showCode) {
    setShowCode(true);
  }
}, [progress]);

const [animateLogo, setAnimateLogo] = useState(false);

useEffect(() => {
  setAnimateLogo(true);
}, []);
  return (
    <MotionConfig reducedMotion="never">
     {/* <AnimatePresence onExitComplete={onFinish}> */}
    <AnimatePresence initial={false} onExitComplete={onFinish}>

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
  "radial-gradient(circle at center, rgba(31,122,255,0.08), transparent 65%)",

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
  initial={{ y: 0 }}
  animate={animateLogo ? { y: [0, -14, 0] } : false}
  transition={{
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
  }}
>
  <EeshisoftLogo />
</motion.div>



)}



{showOx && (
  <motion.h1
    className="text-4xl font-bold tracking-wider flex leading-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, ease: cubic }}
  >
    {/* EESHI */}
    <span
      style={{
        color: "#1f7aff",
        textShadow: `
          0 0 12px rgba(31,122,255,0.35),
          0 0 22px rgba(31,122,255,0.25)
        `,
      }}
    >
      EESHI
    </span>

    {/* SOFT */}
    <span
      style={{
        color: "#3bb273",
        textShadow: `
          0 0 12px rgba(59,178,115,0.35),
          0 0 22px rgba(59,178,115,0.25)
        `,
      }}
    >
      SOFT
    </span>
  </motion.h1>
)}

            {showTech && (
              <motion.p
                initial={false}
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
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#1f7aff] to-[#3bb273]
"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 text-right mt-1">
                   {Math.round(progress)}%
                </p>
              </div>
            )}


            {showCode && (
              <motion.div
  initial={false}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: cubic }}
  className="
  mt-[22px]
  w-[90vw]
  max-w-[360px]
  bg-black/65
  border border-[#2ec4b6]/30

  rounded-lg
  px-4 py-[14px]
  font-space
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
    </MotionConfig>
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
            background: "#2ec4b6",
boxShadow: "0 0 10px rgba(46,196,182,0.45)",
 // 🔥 softer glow
          }}
        />
      ))}
    </>
  );
}


function EeshisoftLogo() {
  return (
    <div
      className="
        w-[112px]
        h-[112px]
        flex
        items-center
        justify-center
        drop-shadow-[0_0_30px_rgba(31,122,255,0.45)]
      "
    >
      <Image
        src="/eeshisoft-logo.png" // or .png
        alt="Eeshisoft Logo"
        width={112}
        height={112}
        priority
        unoptimized
      />
    </div>
  );
}



