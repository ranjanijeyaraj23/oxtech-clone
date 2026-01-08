"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AnimatedHeroLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animate, setAnimate] = useState(false);

  // 🚀 Delay animation until browser is idle
  useEffect(() => {
  const start = () => setAnimate(true);

  // Lighthouse-safe delay
  const t = setTimeout(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(start);
    } else {
      start();
    }
  }, 1200); // ⬅ critical

  return () => clearTimeout(t);
}, []);


  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full max-w-xl text-center xl:text-left">
        {/* OPENING L BRACKET (NON-LCP) */}
        <m.div
          aria-hidden
          initial={false}
          animate={animate ? { opacity: 1, x: 0, y: 0 } : false}
          style={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-none absolute -top-6 left-0 origin-top-left"
        >
          <div className="h-[2px] w-12 bg-gradient-to-r from-[#1f7aff] to-[#3bb273]" />
          <div className="h-12 w-[2px] bg-gradient-to-b from-[#1f7aff] to-[#3bb273]" />
        </m.div>

        {/* CONTENT (VISIBLE IMMEDIATELY) */}
        <div className="relative">
          {React.Children.map(children, (child, index) => (
            <m.div
              key={index}
              initial={false}              // ❗ no hidden state
              animate={animate ? { y: 0, opacity: 1 } : false}
              style={{ opacity: 1 }}       // ❗ visible at first paint
              transition={{
                duration: 0.45,
                delay: animate ? index * 0.05 : 0,
                ease: "easeOut",
              }}
            >
              {child}
            </m.div>
          ))}
        </div>

        {/* CLOSING L BRACKET (NON-LCP) */}
        <m.div
          aria-hidden
          initial={false}
          animate={animate ? { opacity: 1 } : false}
          style={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="pointer-events-none absolute -bottom-6 right-0 flex flex-col items-end origin-bottom-right"
        >
          <div className="h-12 w-[2px] bg-gradient-to-t from-[#1f7aff] to-[#3bb273]" />
          <div className="h-[2px] w-12 bg-gradient-to-l from-[#1f7aff] to-[#3bb273]" />
        </m.div>
      </div>
    </LazyMotion>
  );
}
