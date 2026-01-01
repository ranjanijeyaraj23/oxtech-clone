import HeroLeftClient from "../components/HeroLeftClient";
import HeroCubeClient from "../components/HeroCubeClient";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] py-24 sm:py-28 lg:py-32
 w-full flex items-center overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row items-center gap-14 xl:gap-24">

          {/* LEFT : SSR TEXT + CLIENT ANIMATION */}
          <HeroLeftClient />

          {/* RIGHT : CLIENT CUBE */}
          <div className="flex justify-center xl:justify-end w-full overflow-hidden">
            <div className="scale-[0.75] sm:scale-[0.85]
  md:scale-100 ">
              <HeroCubeClient />
            </div>
          </div>
        </div>

        {/* Scroll Indicator (SSR static) */}
        <div className="absolute bottom-6 sm:bottom-10 hidden sm:flex left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[0.85rem] text-[#d0d0d0]">
          <div className="flex h-7 w-5 items-start justify-center rounded-full border border-[#d0d0d0] pt-1">
            <span className="mouse-dot" />
          </div>
          <span>Explore Our Ecosystem</span>
        </div>
      </div>
    </section>
  );
}
