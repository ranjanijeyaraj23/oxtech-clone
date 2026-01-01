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
    desc: "A powerful decentralized exchange with cross-chain swapping capabilities.",
    category: "DEFI",
    image: "/project1.jpg",
    tags: ["Solidity", "React", "Web3.js"],
  },
  {
    title: "Rolling Doge",
    desc: "Web3 Reward MLM program on Polygon chain.",
    category: "DAPPS",
    image: "/project2.jpg",
    tags: ["ERC-20", "IPFS", "React"],
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

export default function ProjectsClient() {
  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active.toUpperCase());

  return (
    <>
      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {FILTERS.map(({ label, symbol }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`
              flex items-center gap-2 rounded-md
              px-3 sm:px-4 py-[6px]
              text-[0.85rem]
              transition
              ${
                active === label
                  ? "bg-emerald-400/10 border-2 border-emerald-400 text-emerald-400"
                  : "border-2 border-white/10 bg-white/5 text-[#f0f0f0]"
              }
            `}
          >
            <span>{symbol}</span>
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

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <button className="inline-flex items-center gap-2
          rounded-md border border-emerald-400
          px-6 py-2.5 text-sm text-emerald-400
          hover:bg-emerald-400 hover:text-black transition">
          View All Projects <ArrowRight size={16} />
        </button>
      </div>
    </>
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
    <div className="group relative overflow-hidden rounded-[18px]
      border border-white/10 bg-black/50 transition">

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full
          border border-emerald-400/30 bg-black/70
          px-3 py-[3px] text-[0.75rem] text-emerald-400">
          {category}
        </span>
      </div>

      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="text-[1.3rem] font-bold font-space text-[#f5f5f5]">
            {title}
          </h3>
          <p className="mt-2 text-[0.95rem] text-[#d0d0d0]">
            {desc}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-emerald-400/20
                bg-emerald-400/10 px-3 py-[3px]
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
