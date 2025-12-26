export default function AnimatedOrbit() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      
      {/* OUTER GLOW */}
      <div className="absolute h-full w-full rounded-full bg-emerald-500/20 blur-[80px]" />

      {/* MID GLOW */}
      <div className="absolute h-40 w-40 rounded-full bg-emerald-400/40 blur-[40px]" />

      {/* CORE */}
      <div className="absolute h-16 w-16 rounded-full bg-emerald-400 shadow-[0_0_40px_#10b981]" />

      {/* ORBIT RING */}
      <div className="absolute h-full w-full rounded-full border border-emerald-400/30 animate-spin-slow" />
    </div>
  );
}
