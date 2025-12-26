"use client";

import { motion } from "framer-motion";

export default function HeroCube() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[160px]" />

      <motion.svg
        width="420"
        height="420"
        viewBox="0 0 360 360"
        className="relative"
        animate={{
          rotate: [0, 10, -8, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer orbit */}
        <circle
          cx="160"
          cy="160"
          r="130"
          stroke="rgba(0,255,132,0.25)"
          fill="none"
        />

        {/* Cube edges */}
        <g
          stroke="rgba(0,255,132,0.85)"
          strokeWidth="1"
          filter="url(#glow)"
        >
          {/* front */}
          <rect x="90" y="90" width="140" height="140" fill="none" />
          {/* back */}
          <rect x="120" y="60" width="140" height="140" fill="none" />
          {/* connectors */}
          <line x1="90" y1="90" x2="120" y2="60" />
          <line x1="230" y1="90" x2="260" y2="60" />
          <line x1="90" y1="230" x2="120" y2="200" />
          <line x1="230" y1="230" x2="260" y2="200" />
        </g>

        {/* Nodes */}
        {[
          [90, 90],
          [230, 90],
          [90, 230],
          [230, 230],
          [120, 60],
          [260, 60],
          [120, 200],
          [260, 200],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#00ff84"
            filter="url(#glow)"
          />
        ))}

        {/* Labels */}
        <Label x={150} y={52} text="Ethereum" />
        <Label x={270} y={140} text="Binance" />
        <Label x={180} y={250} text="Solana" />
        <Label x={70} y={180} text="Polygon" />

        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
}

function Label({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  return (
    <g>
      <rect
        x={x - 32}
        y={y - 10}
        width="64"
        height="20"
        rx="10"
        fill="rgba(0,0,0,0.7)"
        stroke="rgba(0,255,132,0.4)"
      />
      <text
        x={x}
        y={y + 4}
        fontSize="11"
        fill="#00ff84"
        textAnchor="middle"
        fontWeight="500"
      >
        {text}
      </text>
    </g>
  );
}
