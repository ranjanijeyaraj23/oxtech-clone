import AboutClient from "../components/AboutClient";
import { Shield, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#05080f] text-white"
    >
      {/* CLIENT EFFECTS */}
      <AboutClient />

      <div className="about-bg-glow" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="
              rounded-full
              border border-[#1f7aff]/30
              bg-[#1f7aff]/10
              px-5 py-2.5
              text-[0.9rem] sm:text-[1rem]
              font-semibold tracking-widest
              text-[#3bb273]
            "
          >
            ABOUT US
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            text-center font-space font-bold leading-tight
            text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem]
          "
        >
          Building the{" "}
          <span
            className="
              bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
              bg-clip-text text-transparent
            "
          >
            Future
          </span>
          <br className="hidden sm:block" />
          of Web3
        </h2>

        {/* Subtitle */}
        <p
          className="
            mx-auto mt-6 max-w-xl text-center
            text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem]
            text-[#b6c4da]
          "
        >
          We're not just developers — we're architects of the decentralized world.
        </p>

        {/* Divider */}
        <div className="relative mt-14 mb-20 flex justify-center">
          <div
            className="
              h-px w-64 sm:w-72
              bg-gradient-to-r
              from-transparent
              via-[#3bb273]/60
              to-transparent
            "
          />
          <span
            className="
              absolute -top-1 h-2 w-2 rounded-full
              bg-[#1f7aff]
              shadow-[0_0_14px_rgba(31,122,255,0.6)]
            "
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <h3 className="text-[1.8rem] sm:text-[2rem] font-space font-bold mb-5">
              Our Vision & Mission
            </h3>

            <p className="text-[#b6c4da] mb-4 leading-relaxed">
              At{" "}
              <span
                className="
                  bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
                  bg-clip-text text-transparent font-semibold
                "
              >
                Eeshisoft Technologies
              </span>
              , we envision a world where blockchain technology is accessible to everyone.
            </p>

            <p className="text-[#b6c4da] mb-12 leading-relaxed">
              Our mission is to bridge innovation and real-world adoption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Feature icon={<Lightbulb size={18} />} title="Innovation" desc="Pushing boundaries." />
              <Feature icon={<Shield size={18} />} title="Security" desc="Safety first." />
              <Feature icon={<Users size={18} />} title="Community" desc="Open collaboration." />
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-20 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]">
              <AboutClient.Orbit />
            </div>
          </div>
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
    <div
      className="
        rounded-xl
        border border-[#1f7aff]/25
        bg-[linear-gradient(180deg,rgba(31,122,255,0.08),rgba(59,178,115,0.06))]
        p-5
        backdrop-blur-md
      "
    >
      <div
        className="
          mb-3 flex h-9 w-9 items-center justify-center rounded-lg
          bg-[#0b1324]
          text-[#3bb273]
          shadow-[0_0_12px_rgba(59,178,115,0.35)]
        "
      >
        {icon}
      </div>
      <h4 className="font-semibold text-center">{title}</h4>
      <p className="text-sm text-center text-[#b6c4da]">{desc}</p>
    </div>
  );
}
