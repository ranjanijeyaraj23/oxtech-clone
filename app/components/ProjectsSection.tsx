import ProjectsClient from "../components/ProjectsClient";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#121212] overflow-hidden"
    >
      {/* Background glow (SSR static) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Header (SSR) */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] text-emerald-400/60">
            PORTFOLIO
          </p>

          <h2 className="mt-3 text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem]
            font-space font-extrabold text-[#f5f5f5]">
            Our Projects
          </h2>

          {/* Static divider (SSR) */}
          <div
            className="mx-auto mt-4 h-[4px] w-[90px]
              bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]"
          />
        </div>

        {/* CLIENT: filters + grid */}
        <ProjectsClient />

      </div>
    </section>
  );
}
