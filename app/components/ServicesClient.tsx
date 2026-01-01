"use client";

import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  features?: string[];
  color: string;
  icon: any;
};

export default function ServicesClient({
  services,
}: {
  services: Service[];
}) {
  const [activeId, setActiveId] = useState("smart-contract");

  return (
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

            {/* Features */}
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
  );
}
