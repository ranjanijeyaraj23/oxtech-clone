"use client";
import HeroCube from "./Herocube";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-[linear-gradient(135deg,#0a0a0a,#121212_50%, #1a1a1a)] px-30 pt-10 pb-10"
    >
      <div
        className="
      container
      flex
      flex-col
      xl:flex-row
      items-center
      gap-22
      pt-24
    "
      >
        {/* LEFT / TOP : TEXT */}
        <div className="relative
    w-full
    max-w-[580px] text-center lg:text-left">
          <h1 className="hero-fade-up text-[2rem]           /* mobile S */
    sm:text-[2.5rem]      /* mobile L */
    md:text-[3rem]        /* tablet */
    lg:text-[3.6rem]      /* 1024px */
    xl:text-[4.2rem]      /* 1140px+ */
    font-semibold
    leading-[1.1] ">
            <span className="font-space font-feature">Building</span>  <br />
            The{" "}
            <span className="text-[#00ff84] font-space font-feature">
              Decentralized
            </span>{" "}
            <br />
            Future
          </h1>

          <p className="mt-6 text-neutral-400 text-[0.9rem]           /* mobile S */
    sm:text-[0.95rem]      /* mobile L */
    md:text-[1rem]        /* tablet */
    lg:text-[1.16rem]      /* 1024px */
    xl:text-[1.15rem]      /* 1140px+ */ max-w-xl mx-auto lg:mx-0">
            Pioneering blockchain solutions that transform industries and redefine technological boundaries. Where innovation meets enterprise-grade reliability..
          </p>
          <div className="mx-auto mb-4 h-[2px] w-[60px] bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-3 bg-[linear-gradient(135deg,#00ff84_0%,#00cc6a_100%)] font-accent font-feature
 text-black rounded-md font-bold text-[15px] transition">
              Discover Solutions →
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-3  rounded-md font-bold text-[15px] font-accent border 
border-[rgba(0,194,255,0.8)]
 text-[rgb(0,194,255)] outline
outline-[rgb(0,194,255)]
 transition">
              View Case Studies
            </button>
          </div>

          {/* STATS */}
          <div className="mt-10 flex justify-center lg:justify-start gap-12">
            <Stat value="35+" label="Enterprise Clients" />
            <Stat value="250+" label="Projects Delivered" />
            <Stat value="99.9%" label="Uptime Guarantee" />
          </div>
        </div>

        {/* RIGHT / BOTTOM : CUBE */}
        <div
          className="
            flex justify-center
            lg:justify-end
            lg:translate-y-0
            translate-y-6
          "
        >
          <HeroCube />
        </div>
      </div>
      <div className="group flex flex-col items-center gap-3 text-[0.85rem] text-[#d0d0d0] group-hover:text-[#00ff84] cursor-pointer">
  {/* Mouse Icon */}
  <div className="flex h-7 w-5 items-start justify-center rounded-full border border-[#d0d0d0] hover:text-[#00ff84] pt-1">
    <span className="mouse-dot" />
  </div>

  {/* Text + Cursor */}
  <div className="flex items-center gap-1 group-hover:text-[#00ff84]   transition-colors">
    <span>Explore Our Ecosystem</span>
   
  </div>
</div>


    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-[16px] font-bold">
        {value}
      </div>
      <div className="text-[13.2px] text-[#b0b0b0] font-light mt-1">
        {label}
      </div>
    </div>
  );
}
