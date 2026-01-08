"use client";

import { useEffect, useState } from "react";
import QuickInquiryPanel from "./QuickInquiryPanel";

const navHashes = ["#home", "#solutions", "#about", "#projects", "#contact"];

export default function NavbarLogic() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  /* ---------------- MOBILE + INQUIRY ---------------- */
  useEffect(() => {
    const menuBtn = document.querySelector("[data-menu-btn]");
    const menu = document.querySelector("[data-mobile-menu]");
    const inquiryBtn = document.querySelector("[data-inquiry-btn]");

    if (!menuBtn || !menu) return;

    const toggleMenu = () => menu.classList.toggle("hidden");
    menuBtn.addEventListener("click", toggleMenu);
    inquiryBtn?.addEventListener("click", () => setInquiryOpen(true));

    return () => menuBtn.removeEventListener("click", toggleMenu);
  }, []);

  /* ---------------- SET HASH ON LOAD ---------------- */
  useEffect(() => {
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }
  }, []);

  /* ---------------- SCROLL SPY ---------------- */
  useEffect(() => {
    const sections = navHashes
      .map((hash) => document.querySelector(hash))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ---------------- APPLY ACTIVE STATE ---------------- */
 /* ---------------- APPLY ACTIVE STATE ---------------- */
useEffect(() => {
  document
    .querySelectorAll<HTMLAnchorElement>("a[data-nav-item]")
    .forEach((el) => {
      el.getAttribute("data-nav-item") === activeHash
        ? el.setAttribute("data-active", "true")
        : el.removeAttribute("data-active");
    });
}, [activeHash]);


  return (
    <QuickInquiryPanel
      open={inquiryOpen}
      onClose={() => setInquiryOpen(false)}
    />
  );
}
