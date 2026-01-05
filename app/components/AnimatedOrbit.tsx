export default function AnimatedOrbit() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      
      {/* OUTER GLOW */}
      <div
        className="
          absolute h-full w-full rounded-full
          bg-[rgba(31,122,255,0.22)]
          blur-[80px]
        "
      />

      {/* MID GLOW */}
      <div
        className="
          absolute h-40 w-40 rounded-full
          bg-[rgba(59,178,115,0.45)]
          blur-[40px]
        "
      />

      {/* CORE */}
      <div
        className="
          absolute h-16 w-16 rounded-full
          bg-[#1f7aff]
          shadow-[0_0_40px_rgba(31,122,255,0.75)]
        "
      />

      {/* ORBIT RING */}
      <div
        className="
          absolute h-full w-full rounded-full
          border border-[#3bb273]/40
          animate-spin-slow
        "
      />
    </div>
  );
}
