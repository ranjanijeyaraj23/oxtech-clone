"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Layers,
  Coins,
  Image as ImageIcon,
  Shuffle,
  AppWindow,
} from "lucide-react";
const FILTERS = [
  { label: "All Projects", symbol: "✨" },
  { label: "DeFi", symbol: "💰" },
  { label: "NFT", symbol: "🖼️" },
  { label: "DEX", symbol: "🔁" },
  { label: "Dapps", symbol: "🧩" },
];

// const FILTERS = ["All Projects", "DeFi", "NFT", "DEX", "Dapps"];

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
    tags: ["TypeScript", "Base", "Next.js", "Anchor"],
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
    <section id="projects" className="relative bg-[#121212] py-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] text-emerald-400/60">
            PORTFOLIO
          </p>
          <h2 className="mt-3 text-[2.8rem] font-space font-extrabold text-[#f5f5f5]">
            Our Projects
          </h2>
          <motion.div
  className="
    mx-auto mt-3 h-[4px] w-[100px]
    overflow-hidden
    bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]
    shadow-[0_0_10px_rgba(0,255,132,0.6)]
  "
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
/>

        </div>


        {/* FILTERS */}
       <div className="mt-10 flex flex-wrap justify-center gap-3">
  {FILTERS.map(({ label, symbol }) => (
    <button
      key={label}
      onClick={() => setActive(label)}
      className={`flex items-center rounded-md px-4 py-[6px] text-[0.95rem] transition
        ${
          active === label
            ? "bg-[rgba(0,255,132,.1)] border-2 border-[#00ff84] text-[#00ff84] shadow-[0_5px_15px_rgba(0,255,132,0.5)]"
            : "border-2 border-[rgba(42,42,42,.7)] bg-[rgba(30,30,30,.5)] text-[#f0f0f0] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
        }`}
    >
      <span
        className="inline-block mr-2 text-[1.1em] align-middle"
        aria-hidden
      >
        {symbol}
      </span>
      {label}
    </button>
  ))}
</div>


        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-emerald-500/10" />

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-20 flex justify-center">
          <button className=" w-full justify-center flex items-center gap-2 rounded-md border border-[#00ff84] px-5 py-2 text-sm text-[#00ff84] hover:bg-emerald-400 hover:text-black transition">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ProjectCard({
  title,
  desc,
  image,
  category,
  tags,
}: any) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-black/50 shadow-[inset_0_0_35px_rgba(16,185,129,0.12)] transition hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]">
      {/* IMAGE */}
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* CATEGORY */}
        <span className="absolute right-3 border border-[rgba(0,255,132,.3)] top-3 rounded-full bg-[rgba(0,0,0,.7)] px-3 py-[3px] text-[0.8rem] text-[#00ff84">
          {category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex h-[220px] flex-col justify-between p-5">
        <div>
          <h3 className="text-[1.5rem] font-bold font-space text-[#f5f5f5]">
            {title}
          </h3>
          <p className="mt-2 text-[1rem] leading-relaxed text-[#d0d0d0]">
            {desc}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(0,255,132,.15)] bg-[rgba(0,255,132,.08)] px-3 py-[3px] text-[0.85] text-[#00ff84]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
