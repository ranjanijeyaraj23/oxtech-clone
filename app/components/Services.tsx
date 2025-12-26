"use client";

import { useState } from "react";
import { services } from "./servicesData";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("smart-contract");

  return (
    <section
      id="solutions"
      className="relative w-full bg-[#0f0f0f] overflow-hidden"
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[2.1rem] sm:text-[2.4rem] font-space font-extrabold text-[#f8f8f8]">
            Our Services
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-[60px]
            bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />

          <p className="mt-4 text-[#a0a0a0] text-[0.95rem] sm:text-[1rem]">
            Blockchain solutions tailored to your needs
          </p>
        </div>

        {/* Cards */}
        <div
          className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                style={{ "--accent": service.color } as React.CSSProperties}
                className={`
                  group relative cursor-pointer rounded-2xl border
                  p-6 min-h-[260px]
                  transition-all duration-300 ease-out

                  ${
                    isActive
                      ? `
                        border-[var(--accent)]
                        bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]
                        shadow-[0_0_35px_var(--accent)]
                      `
                      : `
                        border-white/10
                        bg-white/5
                        hover:border-[var(--accent)]
                        hover:shadow-[0_0_25px_var(--accent)]
                      `
                  }
                `}
              >
                {/* Accent bar */}
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
                        ? "bg-[var(--accent)] text-black"
                        : "bg-white/10 text-white group-hover:text-[var(--accent)]"
                    }
                  `}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-lg font-bold transition-colors
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
                <p className="mt-2 text-[14.5px] text-[#b0b0b0]">
                  {service.description}
                </p>

                {/* Features (active only, no layout shift) */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isActive ? "max-h-40 mt-4" : "max-h-0"}
                  `}
                >
                  <ul className="space-y-2 text-[0.9rem] text-[#d0d0d0]">
                    {service.features?.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <div
            className="
            w-full max-w-2xl
            rounded-2xl border border-white/10
            bg-white/5 p-8 sm:p-10 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-space text-[#f5f5f5]">
              Ready to Build Your Blockchain Project?
            </h3>

            <p className="mt-3 text-[#b0b0b0] text-[0.95rem] sm:text-[1rem]">
              Let our experts help bring your vision to life.
            </p>

            <button
              className="
              mt-6 rounded-full
              bg-[linear-gradient(135deg,#00ff84,#00cc6a)]
              px-7 py-3
              text-[#0a0a0a]
              font-accent font-medium
              transition"
            >
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
