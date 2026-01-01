import AboutClient from "../components/AboutClient";
import { Shield, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#050510] text-white"
    >
      {/* CLIENT EFFECTS */}
      <AboutClient />

      <div className="about-bg-glow" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="rounded-full border border-emerald-400/30
            bg-emerald-400/10 px-5 py-2.5
            text-[0.9rem] sm:text-[1rem]
            font-semibold tracking-widest text-emerald-400">
            ABOUT US
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center font-space font-bold leading-tight
          text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem]">
          Building the{" "}
          <span className="bg-[linear-gradient(135deg,#0affb0,#00c2ff)]
            bg-clip-text text-transparent">
            Future
          </span>
          <br className="hidden sm:block" />
          of Web3
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-center
          text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem]
          text-[#b8b8d0]">
          We're not just developers — we're architects of the decentralized world.
        </p>

        {/* Divider */}
        <div className="relative mt-14 mb-20 flex justify-center">
          <div className="h-px w-64 sm:w-72
            bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <span className="absolute -top-1 h-2 w-2 rounded-full
            bg-emerald-400 shadow-[0_0_14px_#10b981]" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <h3 className="text-[1.8rem] sm:text-[2rem] font-space font-bold mb-5">
              Our Vision & Mission
            </h3>

            <p className="text-[#b8b8d0] mb-4 leading-relaxed">
              At{" "}
              <span className="bg-[linear-gradient(135deg,#0affb0,#00c2ff)]
                bg-clip-text text-transparent font-semibold">
                0x Technologies
              </span>
              , we envision a world where blockchain technology is accessible to everyone.
            </p>

            <p className="text-[#b8b8d0] mb-12 leading-relaxed">
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
              {/* ORBIT IS CLIENT */}
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
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#191928] text-emerald-400">
        {icon}
      </div>
      <h4 className="font-semibold text-center">{title}</h4>
      <p className="text-sm text-center text-[#b8b8d0]">{desc}</p>
    </div>
  );
}
