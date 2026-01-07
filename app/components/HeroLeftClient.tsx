"use client";

import AnimatedHeroLeft from "./AnimatedHeroLeft";

export default function HeroLeftClient() {
  return (
    <AnimatedHeroLeft>
      <h2
        className="font-semibold leading-[1.1]
        text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] xl:text-[4.2rem]"
      >
        <span className="block font-space">Building</span>
        <span className="block">
          The{" "}
          <span className="block text-[#1f7aff] font-space">
            Decentralized
          </span>
        </span>
        <span className="block text-[#ffffff]">Future</span>
      </h2>

      <p
        className="mt-6 text-[#c9d4e6] text-[0.95rem]
        sm:text-[1rem] md:text-[1.05rem] xl:text-[1.15rem]
        max-w-lg mx-auto xl:mx-0"
      >
        Pioneering blockchain solutions that transform industries and
        redefine technological boundaries.
      </p>

      <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-4">
        <button className="px-10 py-3 rounded-md font-bold bg-[linear-gradient(135deg,#1f7aff,#3bb273)] text-white">
          Discover Solutions →
        </button>
        <button className="px-10 py-3 rounded-md font-bold border border-[#1f7aff] text-[#1f7aff]">
          View Case Studies
        </button>
      </div>

      <div
        className="
          mt-10
          grid grid-cols-1 sm:grid-cols-3
          gap-6
          justify-items-center
          xl:justify-items-start
        "
      >
        <Stat value="35+" label="Enterprise Clients" />
        <Stat value="250+" label="Projects Delivered" />
        <Stat value="99.9%" label="Uptime Guarantee" />
      </div>
    </AnimatedHeroLeft>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center xl:text-left">
      <div className="text-[16px] font-bold text-[#1f7aff]">{value}</div>
      <div className="text-[13px] text-[#9fb0c8] mt-1">{label}</div>
    </div>
  );
}
