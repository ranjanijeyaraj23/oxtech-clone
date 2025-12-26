"use client";

import { Shield, Lightbulb, Users } from "lucide-react";
import AnimatedOrbit from "./AnimatedOrbit";
import { useEffect, useState } from "react";
type Particle = {
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
};
export default function AboutSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${2 + Math.random() * 4}px`,
      duration: `${12 + Math.random() * 8}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(generated);
  }, []);
  return (
    <section
      id="about"
      className="relative overflow-hidden  text-white px-6 lg:px-16 py-32 bg-[#050510]"
      
    >
      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="about-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* GLOW */}
      <div className="about-bg-glow" />

     
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* BADGE */}
        <div className="flex justify-center mb-6">
          <span className="rounded-full bg-[rgba(10,255,176,0.2)] font-semibold border-2 border-[rgba(10,255,176,0.2)] px-5 py-3 text-[1rem] tracking-widest text-[#0affb0]">
            ABOUT US
          </span>
        </div>

        {/* TITLE */}
       <h2 className="text-center text-4xl md:text-6xl font-space font-bold leading-tight">
  Building the{" "}
  <span
    className="
      bg-[linear-gradient(135deg,rgb(10,255,176)_0%,rgb(0,194,255)_100%)]
      bg-clip-text text-transparent
    "
  >
    Future
  </span>
  <br className="hidden sm:block" />
  of Web3
</h2>

        {/* SUBTITLE */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-[1.4rem] text-[#b8b8d0]">
          We're not just developers — we're architects of the decentralized world.
        </p>

        {/* DIVIDER */}
        <div className="relative mt-14 mb-20 flex justify-center">
          <div className="h-px w-72 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <span className="absolute -top-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#10b981]" />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-[2rem] font-bold font-space mb-5">Our Vision & Mission</h3>

            <p className="text-[#b8b8d0] text-[1.1rem] mb-4 leading-relaxed">
              "At "<span className="bg-[linear-gradient(135deg,rgb(10,255,176)_0%,rgb(0,194,255)_100%)]
      bg-clip-text text-transparent">0x Technologies</span>, "we envision a world where blockchain technology is accessible to everyone, creating a more transparent and equitable digital ecosystem. "
            </p>

            <p className="text-[#b8b8d0] text-[1.1rem] mb-12 leading-relaxed">
              Our mission is to bridge the gap between cutting-edge blockchain innovation and practical business applications, empowering organizations to harness the full potential of decentralized technologies.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Feature
                icon={<Lightbulb size={18} />}
                title="Innovation"
                desc="Pushing boundaries and exploring new possibilities."
              />
              <Feature
                icon={<Shield size={18} />}
                title="Security"
                desc="Building with safety and protection as priorities."
              />
              <Feature
                icon={<Users size={18} />}
                title="Community"
                desc="Contributing to open-source and knowledge sharing."
              />
            </div>
          </div>

          {/* RIGHT ORB */}
          <div className="relative flex justify-center lg:justify-end">
           <div className="relative z-20 h-[280px] w-[280px]">
  <AnimatedOrbit />
</div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 flex flex-wrap justify-center gap-5">
          <button 
          onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
           className="rounded-full bg-[linear-gradient(135deg,rgb(10,255,176),rgb(0,194,255))] px-8 py-3 text-black text[1rem] font-semibold shadow-[0_0_20px_rgba(16,185,129,0.5)]  transition">
            Work With Us →
          </button>
          <button 
          onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
           className="rounded-full border-2 border-[#0affb0] px-8 py-3 text-[#0affb0] text-[1rem] font-medium transition">
            Explore Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,.1)] bg-white/5 p-5 backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/40 transition-all">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(25,25,40,0.6)] text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)]">
        {icon}
      </div>
      <h4 className="font-semibold text-[1.2rem] text-center  font-space mb-1">{title}</h4>
      <p className="text-[0.95rem] text-center text-[#b8b8d0]">{desc}</p>
    </div>
  );
}
