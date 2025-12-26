"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FILTERS = [
  { label: "All Projects", symbol: "✨" },
  { label: "DeFi", symbol: "💰" },
  { label: "NFT", symbol: "🖼️" },
  { label: "DEX", symbol: "🔁" },
  { label: "Dapps", symbol: "🧩" },
];

const PROJECTS = [
  {
    title: "Dehack Web3",
    desc: "A powerful decentralized exchange with cross-chain swapping capabilities and optimized liquidity pools.",
    category: "DEFI",
    image: "/project1.jpg",
    tags: ["Solidity", "React", "Web3.js"],
  },
  {
    title: "Rolling Doge",
    desc: "Web3 Reward MLM program on Polygon chain.",
    category: "DAPPS",
    image: "/project2.jpg",
    tags: ["ERC-20", "IPFS", "React", "Ethereum"],
  },
  {
    title: "Orbit Swap",
    desc: "Secure decentralized Swap Exchange on base blockchain.",
    category: "DAPPS",
    image: "/project6.jpg",
    tags: ["TypeScript", "Base", "Next.js"],
  },
  {
    title: "Patent Portfolio Tracker",
    desc: "Advanced patent portfolio tracker on blockchain.",
    category: "NFT",
    image: "/project3.jpg",
    tags: ["Solidity", "Hardhat", "React"],
  },
  {
    title: "EQ Vault",
    desc: "Decentralized governance DAO with staking vault creation.",
    category: "DAO",
    image: "/project4.jpg",
    tags: ["React", "Solidity", "ERC20"],
  },
  {
    title: "Foxify Perpetual Futures Trading",
    desc: "Advanced perpetual futures trading platform with leverage.",
    category: "DEX",
    image: "/project5.jpg",
    tags: ["Solidity", "Chainlink", "Node.js"],
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active.toUpperCase());

  return (
    <section
      id="projects"
      className="relative w-full bg-[#121212] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_55%)]" />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] text-emerald-400/60">
            PORTFOLIO
          </p>

          <h2 className="mt-3 text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem]
            font-space font-extrabold text-[#f5f5f5]">
            Our Projects
          </h2>

          <motion.div
            className="mx-auto mt-4 h-[4px] w-[90px]
              bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]
              shadow-[0_0_10px_rgba(0,255,132,0.6)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map(({ label, symbol }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`
                flex items-center gap-2 rounded-md
                px-3 sm:px-4 py-[6px]
                text-[0.85rem] sm:text-[0.95rem]
                transition
                ${
                  active === label
                    ? "bg-emerald-400/10 border-2 border-emerald-400 text-emerald-400 shadow-[0_5px_15px_rgba(0,255,132,0.4)]"
                    : "border-2 border-white/10 bg-white/5 text-[#f0f0f0]"
                }
              `}
            >
              <span className="text-[1.1em]">{symbol}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-emerald-500/10" />

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 flex justify-center">
          <button
            className="
              inline-flex items-center gap-2
              rounded-md border border-emerald-400
              px-6 py-2.5
              text-sm text-emerald-400
              hover:bg-emerald-400 hover:text-black
              transition"
          >
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function ProjectCard({
  title,
  desc,
  image,
  category,
  tags,
}: any) {
  return (
    <div className="
      group relative overflow-hidden
      rounded-[18px] border border-white/10
      bg-black/50
      transition
      hover:border-emerald-400
      hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]">

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full
          border border-emerald-400/30
          bg-black/70 px-3 py-[3px]
          text-[0.75rem] text-emerald-400">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="text-[1.3rem] font-bold font-space text-[#f5f5f5]">
            {title}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[#d0d0d0]">
            {desc}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="
                rounded-full border border-emerald-400/20
                bg-emerald-400/10
                px-3 py-[3px]
                text-[0.75rem] text-emerald-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
