"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.16,
    },
  },
};

const item: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function AnimatedHeroLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative w-full max-w-xl text-center xl:text-left"
    >
      {/* OPENING L BRACKET */}
      <div
        className="pointer-events-none absolute -top-6 left-0 origin-top-left"
        style={{
          animation: "heroBracketIn 0.6s ease-out 0.1s forwards",
          opacity: 0,
        }}
      >
        <div className="h-[2px] w-12 bg-gradient-to-r from-[#1f7aff] to-[#3bb273]" />
        <div className="h-12 w-[2px] bg-gradient-to-b from-[#1f7aff] to-[#3bb273]" />
      </div>

      {/* CONTENT */}
      <div className="relative">
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))}
      </div>

      {/* CLOSING L BRACKET */}
      <div
        className="pointer-events-none absolute -bottom-6 right-0 flex flex-col items-end origin-bottom-right"
        style={{
          animation: "heroBracketIn 0.6s ease-out 0.9s forwards",
          opacity: 0,
        }}
      >
        {/* vertical */}
        <div className="h-12 w-[2px] bg-gradient-to-t from-[#1f7aff] to-[#3bb273]" />

        {/* horizontal */}
        <div className="h-[2px] w-12 bg-gradient-to-l from-[#1f7aff] to-[#3bb273]" />
      </div>
    </motion.div>
  );
}
