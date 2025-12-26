"use client";

import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050508] flex items-center justify-center">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,132,0.15),transparent_60%)]" />

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-emerald-400/60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${12 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* LOGO */}
        <div className="relative mb-6 flex h-[96px] w-[96px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#00ff84,#00d9ff)] shadow-[0_0_40px_rgba(0,255,132,0.6)]">
          <span className="text-4xl font-bold text-black">X</span>
        </div>

        {/* BRAND */}
        <h1 className="text-[2.2rem] font-extrabold tracking-widest">
          <span className="text-[#00ff84]">0x</span>
          <span className="text-[#00d9ff]"> </span>
        </h1>

        <p className="mt-2 text-sm tracking-[0.35em] text-white/80">
          TECHNOLOGIES
        </p>

        {/* PROGRESS */}
        <div className="mt-6 w-[240px]">
          <div className="mb-1 text-right text-[11px] text-white/60">100%</div>
          <div className="h-[2px] w-full bg-white/10">
            <motion.div
              className="h-full bg-[#00ff84]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* CODE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 rounded-xl border border-[#00ff84] bg-black/60 px-6 py-4 text-left font-mono text-[13px] text-white/80 shadow-[0_0_30px_rgba(0,255,132,0.15)]"
        >
          <p className="text-white/40">01 // The next generation of blockchain</p>
          <p className="mt-2">
            <span className="text-purple-400">class</span>{" "}
            <span className="text-emerald-400">BlockchainInnovation</span>{" "}
            {"{"}
          </p>
          <p className="ml-4 text-yellow-400">
            build(<span className="text-emerald-300">"next-gen solutions"</span>);
          </p>
          <p>{"}"}</p>
        </motion.div>
      </div>
    </section>
  );
}
