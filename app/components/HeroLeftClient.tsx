"use client";

import AnimatedHeroLeft from "./AnimatedHeroLeft";
import HeroLeftStatic from "./HeroLeftStatic";

export default function HeroLeftClient() {
  return (
    <AnimatedHeroLeft>
      <HeroLeftStatic />

      <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-4">
        <button className="px-10 py-3 rounded-md font-bold bg-[linear-gradient(135deg,#1f7aff,#3bb273)] text-white">
          Discover Solutions →
        </button>
        <button className="px-10 py-3 rounded-md font-bold border border-[#1f7aff] text-[#1f7aff]">
          View Case Studies
        </button>
      </div>
    </AnimatedHeroLeft>
  );
}
