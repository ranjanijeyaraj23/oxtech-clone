import ServicesClient from "../components/ServicesClient";
import { services } from "./servicesData";

export default function ServicesSection() {
  return (
    <section
      id="solutions" aria-labelledby="services-heading"
      className=" scroll-mt-[90px] relative w-full bg-[#0f0f0f] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-[2.1rem] sm:text-[2.4rem] font-space font-extrabold text-[#f8f8f8]">
            Our Services
          </h2>

          {/* Logo-gradient divider */}
          <div
            className="
              mx-auto mt-4 h-[2px] w-[60px]
              bg-[linear-gradient(90deg,transparent,#1f7aff,#3bb273,transparent)]
            "
          />

          <p className="mt-4 text-[#a8b6cc] text-[0.95rem] sm:text-[1rem]">
           Custom blockchain and web development services designed to build secure, scalable, and modern digital products.

          </p>
        </div>

        {/* Cards */}
        <ServicesClient services={services} />

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <div
            className="
              w-full max-w-2xl rounded-2xl
              border border-[rgba(31,122,255,0.25)]
              bg-[linear-gradient(180deg,rgba(31,122,255,0.08),rgba(59,178,115,0.06))]
              p-8 sm:p-10 text-center
            "
          >
            <h3 className="text-xl sm:text-2xl font-bold font-space text-[#f5f9ff]">
              Ready to Build Your Blockchain Project?
            </h3>

            <p className="mt-3 mb-6 text-[#b6c4da] text-[0.95rem] sm:text-[1rem]">
              Let our experts help bring your vision to life.
            </p>

            <a href="#contact"
              className="
                mt-12 rounded-full
                bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
                px-7 py-3
                text-white font-medium
                shadow-[0_0_22px_rgba(31,122,255,0.35)]
                hover:shadow-[0_0_30px_rgba(59,178,115,0.45)]
                transition-all
              "
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
