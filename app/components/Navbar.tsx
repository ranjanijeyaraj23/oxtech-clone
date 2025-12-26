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
  Send,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Solutions", href: "#solutions", icon: Layers },
  { name: "About Us", href: "#about", icon: Users },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  // ✅ separate states (IMPORTANT)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  /* ---------------- Scroll Active Section ---------------- */
  useEffect(() => {
    const sections = navItems.map((i) =>
      document.querySelector(i.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
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
      <header className="fixed top-0 left-0 z-[100] w-full">
        <nav className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-black/70 backdrop-blur-xl px-4 py-3">

            {/* LOGO */}
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/40 text-[0.95rem] font-bold text-emerald-400">
                0x
              </div>
              <span className="hidden sm:block text-[0.95rem] font-medium text-white">
                Technologies
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-2  px-4 py-2 text-[0.95rem] transition-all
                      ${
                        isActive
                          ? "border border-[rgba(0,255,132,0.6)] bg-[linear-gradient(135deg,rgba(0,255,132,0.15),rgba(0,194,255,0.15))] text-white shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                          : "border border-[rgba(60,60,60,0.5)] text-[#b0b0b0] hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <Icon
                      size={16}
                      className={isActive ? "text-emerald-400" : "group-hover:text-white"}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP QUICK INQUIRY */}
            <div className="hidden lg:block">
             <button
  onClick={() => setInquiryOpen(true)}
  className="
    group flex items-center gap-2 rounded-full
    border border-[rgba(0,255,132,0.6)]
    bg-[linear-gradient(135deg,rgba(0,255,132,0.15),rgba(0,194,255,0.15))]
    px-5 py-2 text-[0.95rem] font-medium
    transition-all
    hover:shadow-[0_0_25px_rgba(0,255,132,0.45)]
    focus-visible:ring-2 focus-visible:ring-[#00ff84]/60
    active:scale-[0.97]
  "
>
  <span
    className="
      text-white
      transition-colors duration-200
      group-hover:text-[#00ff84]
      group-active:text-[#00ff84]
      group-focus-visible:text-[#00ff84]
    "
  >
    Quick Inquiry
  </span>

  <Send size={16} className="text-[#00ff84]" />
</button>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileOpen && (
            <div className="mt-2 rounded-2xl border border-emerald-500/20 bg-black/80 backdrop-blur-xl p-4 lg:hidden">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
                      ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "text-neutral-300 hover:bg-white/5"
                      }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}

              {/* MOBILE QUICK INQUIRY */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setInquiryOpen(true);
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full
                border border-[rgba(0,255,132,0.6)]
                bg-[linear-gradient(135deg,rgba(0,255,132,0.15),rgba(0,194,255,0.15))]
                px-5 py-2 text-[0.95rem] font-medium text-white
                hover:text-[#00ff84]
                hover:shadow-[0_0_25px_rgba(0,255,132,0.45)]
                transition"
              >
                <Send size={16} className="text-[#00ff84]" />
                Quick Inquiry
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* ================= QUICK INQUIRY PANEL ================= */}
      <QuickInquiryPanel
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
}
