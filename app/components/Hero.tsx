"use client";

import HeroCube3D from "./Herocube";
import AnimatedHeroLeft from "../components/AnimatedHeroLeft";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        h-screen
        w-full
      
        flex
        items-center
      "
    >
      {/* Inner Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Layout */}
        <div className="flex flex-col xl:flex-row items-center gap-14 xl:gap-24">

         


{/* LEFT : TEXT */}
<AnimatedHeroLeft>
  {/* TITLE */}
  <h1
    className="
      font-semibold leading-[1.1]
      text-[2rem]
      sm:text-[2.6rem]
      md:text-[3.2rem]
      xl:text-[4.2rem]
    "
  >
    <span className="block font-space">Building</span>
    <span className="block">
      The{" "}
      <span className="block text-[#00ff84] font-space">
        Decentralized
      </span>
    </span>
    <span className="block">Future</span>
  </h1>

  {/* PARAGRAPH */}
  <p
    className="
      mt-6 text-neutral-400
      text-[0.95rem]
      sm:text-[1rem]
      md:text-[1.05rem]
      xl:text-[1.15rem]
      max-w-lg mx-auto xl:mx-0
    "
  >
    Pioneering blockchain solutions that transform industries and
    redefine technological boundaries. Where innovation meets
    enterprise-grade reliability.
  </p>

  {/* BUTTONS */}
  <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-4">
    <button className="px-10 py-3 rounded-md font-bold text-[15px] bg-[linear-gradient(135deg,#00ff84,#00cc6a)] text-black">
      Discover Solutions →
    </button>
    <button className="px-10 py-3 rounded-md font-bold text-[15px] border border-[rgba(0,194,255,0.8)] text-[rgb(0,194,255)]">
      View Case Studies
    </button>
  </div>

  {/* STATS */}
  <div className="mt-10 flex justify-center xl:justify-start gap-10">
    <Stat value="35+" label="Enterprise Clients" />
    <Stat value="250+" label="Projects Delivered" />
    <Stat value="99.9%" label="Uptime Guarantee" />
  </div>
</AnimatedHeroLeft>

          {/* RIGHT : CUBE */}
          <div className="flex justify-center xl:justify-end w-full">
            <div className="scale-[0.85] sm:scale-100">
              <HeroCube3D />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[0.85rem] text-[#d0d0d0]">
          <div className="flex h-7 w-5 items-start justify-center rounded-full border border-[#d0d0d0] pt-1">
            <span className="mouse-dot" />
          </div>
          <span>Explore Our Ecosystem</span>
        </div>

      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center xl:text-left">
      <div className="text-[16px] font-bold">{value}</div>
      <div className="text-[13px] text-[#b0b0b0] mt-1">{label}</div>
    </div>
  );
}
