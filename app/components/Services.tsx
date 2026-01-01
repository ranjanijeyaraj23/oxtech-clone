import ServicesClient from "../components/ServicesClient";
import { services } from "./servicesData";

export default function ServicesSection() {
  return (
    <section
      id="solutions"
      className="relative w-full bg-[#0f0f0f] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Title (SSR) */}
        <div className="text-center mb-16">
          <h2 className="text-[2.1rem] sm:text-[2.4rem] font-space font-extrabold text-[#f8f8f8]">
            Our Services
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-[60px]
            bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />

          <p className="mt-4 text-[#a0a0a0] text-[0.95rem] sm:text-[1rem]">
            Blockchain solutions tailored to your needs
          </p>
        </div>

        {/* Cards (CLIENT INTERACTION, SSR HTML) */}
        <ServicesClient services={services} />

        {/* CTA (SSR) */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl
            border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold font-space text-[#f5f5f5]">
              Ready to Build Your Blockchain Project?
            </h3>

            <p className="mt-3 text-[#b0b0b0] text-[0.95rem] sm:text-[1rem]">
              Let our experts help bring your vision to life.
            </p>

            <button className="mt-6 rounded-full
              bg-[linear-gradient(135deg,#00ff84,#00cc6a)]
              px-7 py-3 text-[#0a0a0a] font-medium">
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
