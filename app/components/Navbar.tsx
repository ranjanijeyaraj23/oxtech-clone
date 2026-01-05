"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QuickInquiryPanel from "./QuickInquiryPanel";
import {
  Home,
  Layers,
  Users,
  Folder,
  Mail,
  Menu,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Solutions", href: "#solutions", icon: Layers },
  { name: "About Us", href: "#about", icon: Users },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((i) => document.querySelector(i.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
     <header
  className="
    fixed top-0 left-0 z-[100]
    w-full h-[80px]
    bg-[#070b12]
    backdrop-blur-xl
    border-b border-white/5
    shadow-[0_6px_30px_rgba(0,0,0,0.55)]
  "
>


        {/* HEADER GRID */}
        {/* HEADER GRADIENT GLOW */}
<div
  className="absolute inset-0 pointer-events-none z-0"
  style={{
    background:
      "linear-gradient(135deg, rgba(31,122,255,0.08), rgba(59,178,115,0.08))",
  }}
/>

{/* HEADER GRID */}
<div
  className="absolute inset-0 pointer-events-none z-0"
  style={{
    backgroundImage: `
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 0),
      linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 0)
    `,
    backgroundSize: "40px 40px",
    opacity: 0.15,
  }}
/>


        <nav className="relative z-10 mx-auto w-full max-w-[1440px] h-full px-4 lg:px-5 xl:px-10 flex items-center">
          <div className="flex items-center w-full gap-6">

            {/* ================= LEFT ================= */}
            <div className="flex items-center gap-2">

              {/* LOGO */}
              <Link href="#home" className="flex items-center gap-2">
                <EeshisoftLogo />
                
              </Link>

              {/* HAMBURGER — mobile + tablet */}
              <button
                className="md:flex lg:hidden text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Menu size={22} />
              </button>
            </div>

            {/* ================= CENTER (DESKTOP NAV ONLY) ================= */}
            <div className="relative hidden lg:flex items-center gap-1.5 xl:gap-2.5 ml-auto px-2 xl:px-3 py-2 rounded-xl">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href;

                return (
                  <div
                    key={item.name}
                    className="
                      relative flex items-center
                      after:content-['']
                      after:absolute
                      after:right-[-7px]
                      after:top-1/2
                      after:-translate-y-1/2
                      after:w-[4px]
                      after:h-[4px]
                      after:rounded-full
                      after:bg-[#3bb273]
after:shadow-[0_0_6px_rgba(59,178,115,0.6)]

                      after:z-[2]
                      last:after:hidden
                    "
                  >
                    <div className="absolute inset-0 bg-[rgba(30,30,30,.5)] z-0" />

                    {/* GRID INSIDE EACH NAV ITEM */}
                    <div
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(90deg, rgba(30,30,30,0.05) 1px, transparent 0),
                          linear-gradient(180deg, rgba(30,30,30,0.05) 1px, transparent 0)
                        `,
                        backgroundSize: "20px 20px",
                        opacity: 0.2,
                      }}
                    />

                    <Link
                      href={item.href}
                      className={`
                        relative z-10 flex items-center gap-2.5
                        h-[40px] px-3 xl:px-5
                        border transition-all text-[0.95rem]
                        ${
                          isActive
                            ? "border-[#1f7aff] bg-[linear-gradient(135deg,rgba(31,122,255,.18),rgba(59,178,115,.18))] shadow-[0_0_18px_rgba(31,122,255,0.35)] text-white"
                            : "border-[rgba(80,80,80,.5)] hover:shadow-[0_0_12px_rgba(31,122,255,0.25)] text-[#b0b0b0] hover:bg-[rgba(31,122,255,0.08)] hover:text-[#e6f0ff]"
                        }
                      `}
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* ================= RIGHT ================= */}
            <button
  onClick={() => setInquiryOpen(true)}
  className="
    ml-auto
    flex items-center gap-2
    rounded-full
    px-5 py-2
    border-[#3bb273]
bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
    text-white
   transition-all duration-200

    hover:shadow-[0_0_28px_rgba(59,178,115,0.55)]
    hover:-translate-y-[1px]

    active:translate-y-0
    active:shadow-[0_0_16px_rgba(31,122,255,0.45)]

    focus:outline-none
    focus:ring-2
    focus:ring-[#3bb273]/50
  "
>
  <MessageSquare size={16} />
  <span className="hidden md:inline">Quick Inquiry</span>
</button>


          </div>
        </nav>
      </header>

      {/* ================= MOBILE / TABLET MENU ================= */}
    {mobileOpen && (
  <aside
    className="
      fixed
      top-[80px]              /* starts from header */
      right-0
      bottom-0                /* full remaining height */
      z-[1000]
      w-[280px]
      bg-[#070b12]            /* darker background */
      border-l border-[#3bb273]
      lg:hidden
    "
  >
    {/* CENTER CONTENT */}
    <div className="h-full flex items-center">
      <div className="w-full px-4 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href;

          return (
            <div key={item.name} className="relative">
              {/* base background */}
              <div className="absolute inset-0 bg-[rgba(18,28,38,.65)] rounded-lg" />

              {/* grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(30,30,30,0.05) 1px, transparent 0),
                    linear-gradient(180deg, rgba(30,30,30,0.05) 1px, transparent 0)
                  `,
                  backgroundSize: "20px 20px",
                  opacity: 0.18,
                }}
              />

              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  relative z-10 flex items-center gap-3
                  h-[46px] px-4 w-full
                  rounded-lg border transition-all text-[0.95rem]
                  ${
                    isActive
                      ? "border-[#1f7aff] bg-[linear-gradient(135deg,rgba(31,122,255,.22),rgba(59,178,115,.22))] shadow-[0_0_16px_rgba(31,122,255,0.35)] text-white"
                      : "border-[rgba(90,120,160,.35)] text-[#b8c7e0] hover:bg-[rgba(31,122,255,0.12)] hover:text-[#eef4ff] hover:shadow-[0_0_14px_rgba(31,122,255,0.3)]"
                  }
                `}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </aside>
)}



      <QuickInquiryPanel open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}

// function OxLogo1() {
//   return (
//     <svg width="48" height="48" viewBox="0 0 112 112" className="block">
//       <defs>
//         <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="2" />
//         </filter>
//       </defs>
//       <rect x="16" y="16" width="80" height="80" rx="8" fill="#00ffb3" filter="url(#glow)" />
//       <text x="56" y="64" textAnchor="middle" fontSize="36" fontWeight="700" fill="#000">
//         X
//       </text>
//     </svg>
//   );
// }
function EeshisoftLogo() {
  return (
    <div
      className="
        w-[80px]
        h-[80px]
        flex
        items-center
        justify-center
        drop-shadow-[0_0_30px_rgba(31,122,255,0.45)]
      "
    >
      <Image
        src="/eeshisoft-logo.png" // or .png
        alt="Eeshisoft Logo"
        width={80}
        height={80}
        priority
        unoptimized
      />
    </div>
  );
}
