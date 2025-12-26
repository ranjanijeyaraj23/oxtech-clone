"use client";

import { useState } from "react";
import { services } from "./servicesData";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("smart-contract");

  return (
    <section id="solutions" className="w-full bg-[#0f0f0f] px-12 py-28">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-[2.5rem] font-space text-[#f8f8f8]  font-smooth font-extrabold">
          Our Services
        </h2>
        <div className="mx-auto mb-4 h-[2px] w-[60px] bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />
        <p className="text-[#a0a0a0] font-[1rem] font-body mt-3">
          Blockchain solutions tailored to your needs
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 font-space md:grid-cols-2 xl:grid-cols-4 gap-7 uppercase">
  {services.map((service) => {
    const Icon = service.icon;
    const isActive = activeId === service.id;

    return (
      <div
        key={service.id}
        onClick={() => setActiveId(service.id)}
        style={{ "--accent": service.color } as React.CSSProperties}
        className={`
          group relative cursor-pointer rounded-2xl border p-6
          transition-all duration-300 ease-out

          ${
            isActive
              ? `
                border-[var(--accent)]
                bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]
                shadow-[0_0_40px_var(--accent)]
                -translate-y-[2px]
              `
              : `
                border-white/10
                bg-white/5
                hover:border-[var(--accent)]
                hover:-translate-y-[2px]
                hover:shadow-[0_0_30px_var(--accent)]
              `
          }
        `}
      >
        {/* LEFT ACCENT BAR */}
        <span
          className={`
            absolute left-0 top-6 h-[65%] w-[3px] rounded-full
            bg-[var(--accent)] transition-opacity
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />

        {/* Icon */}
        <div
          className={`
            mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
            transition-all duration-300
            ${
              isActive
                ? "bg-[var(--accent)] text-black "
                : "bg-white/10 text-white group-hover:text-[var(--accent)] group-hover:shadow-[0_0_18px_var(--accent)]"
            }
          `}
        >
          <Icon size={22} />
        </div>

        {/* Title */}
        <h3
          className={`
            text-xl font-bold transition-colors
            ${
              isActive
                ? "text-[var(--accent)]"
                : "text-white group-hover:text-[var(--accent)]"
            }
          `}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-[15px] text-[#b0b0b0]">
          {service.description}
        </p>

        {/* Features (ACTIVE ONLY) */}
        {isActive && service.features && (
          <ul className="mt-5 space-y-2 text-[0.95rem] text-[#d0d0d0]">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  })}
</div>

      <div className="mt-20  flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          <h3 className="text-2xl font-bold font-space text-[#f5f5f5] mb-3">
            Ready to Build Your Blockchain Project?
          </h3>
          <p className="text-[#b0b0b0] text-[1rem] mb-6">
            Let our experts help bring your vision to life.
          </p>
          <button className="rounded-full bg-[linear-gradient(135deg,#00ff84,#00cc6a)]
 px-6 py-3 text-[#0a0a0a] font-accent font-medium hover:bg-[linear-gradient(135deg,#00ff84,#00cc6a)]
 transition">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
