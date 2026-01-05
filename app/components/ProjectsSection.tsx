import ProjectsClient from "../components/ProjectsClient";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0b1020] overflow-hidden"
    >
      {/* Background glow (SSR static) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(31,122,255,0.18), rgba(59,178,115,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Header (SSR) */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] text-[#3bb273]/70">
            PORTFOLIO
          </p>

          <h2
            className="
              mt-3
              text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem]
              font-space font-extrabold
              text-[#f5f9ff]
            "
          >
            Our Projects
          </h2>

          {/* Static divider (SSR) */}
          <div
            className="
              mx-auto mt-4 h-[4px] w-[90px]
              bg-[linear-gradient(90deg,transparent,#1f7aff,#3bb273,transparent)]
            "
          />
        </div>

        {/* CLIENT: filters + grid */}
        <ProjectsClient />

      </div>
    </section>
  );
}
