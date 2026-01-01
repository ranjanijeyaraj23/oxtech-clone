"use client";

import { useEffect, useState } from "react";
import AnimatedOrbit from "./AnimatedOrbit";

type Particle = {
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
};

export default function AboutClient() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 4}px`,
        duration: `${12 + Math.random() * 8}s`,
        delay: `${Math.random() * 5}s`,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <span
          key={i}
          className="about-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

AboutClient.Orbit = function Orbit() {
  return <AnimatedOrbit />;
};
