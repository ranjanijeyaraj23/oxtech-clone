"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    image: "/dehack_landing.png",
    tags: ["Solidity", "React", "Web3.js"],
  },
  {
    title: "Rolling Doge",
    desc: "Web3 Reward MLM program on Polygon chain.",
    category: "DAPPS",
    image: "/rollingDoge.png",
    tags: ["ERC-20", "IPFS", "React"],
  },
  {
    title: "Orbit Swap",
    desc: "Secure decentralized Swap Exchange on base blockchain.",
    category: "DAPPS",
    image: "/orbitswap.png",
    tags: ["TypeScript", "Base", "Next.js"],
  },
  {
    title: "Patent Portfolio Tracker",
    desc: "Advanced patent portfolio tracker on blockchain.",
    category: "NFT",
    image: "/potent.png",
    tags: ["Solidity", "Hardhat", "React"],
  },
  {
    title: "EQ Vault",
    desc: "Decentralized governance DAO with staking vault creation.",
    category: "DAO",
    image: "/eqvault.png",
    tags: ["React", "Solidity", "ERC20"],
  },
  {
    title: "Foxify Perpetual Futures Trading",
    desc: "Advanced perpetual futures trading platform with leverage.",
    category: "DEX",
    image: "/foxify.png",
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
                  ? "border-2 border-[#1f7aff] bg-[rgba(31,122,255,0.12)] text-[#3bb273] shadow-[0_0_12px_rgba(31,122,255,0.35)]"
                  : "border-2 border-white/10 bg-white/5 text-[#f0f0f0] hover:border-[#1f7aff]/60 hover:text-[#3bb273]"
              }
            `}
          >
            <span>{symbol}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="my-12 h-px w-full bg-[linear-gradient(90deg,transparent,#1f7aff,#3bb273,transparent)]" />

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <button
          className="
            inline-flex items-center gap-2
            rounded-md border border-[#1f7aff]
            px-6 py-2.5 text-sm text-[#3bb273]
            bg-[rgba(31,122,255,0.08)]
            hover:bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
            hover:text-white
            transition
          "
        >
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
    <div
      className="
        group relative overflow-hidden rounded-[18px]
        border border-white/10
        bg-black/50
        transition
        hover:border-[#1f7aff]/50
        hover:shadow-[0_0_28px_rgba(31,122,255,0.25)]
      "
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className="
            absolute right-3 top-3 rounded-full
            border border-[#1f7aff]/40
            bg-black/70
            px-3 py-[3px]
            text-[0.75rem]
            text-[#3bb273]
          "
        >
          {category}
        </span>
      </div>

      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="text-[1.3rem] font-bold font-space text-[#f5f9ff]">
            {title}
          </h3>
          <p className="mt-2 text-[0.95rem] text-[#d0d6e5]">
            {desc}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-[#1f7aff]/25
                bg-[rgba(31,122,255,0.12)]
                px-3 py-[3px]
                text-[0.75rem]
                text-[#3bb273]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
