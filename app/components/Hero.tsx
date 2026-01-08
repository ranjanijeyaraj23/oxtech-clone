import HeroLeft from "../components/HeroLeft.server";
import dynamic from "next/dynamic";
import CubeTailwind from "../components/CubeTailwind";
const HeroCubeClient = dynamic(
  () => import("../components/HeroCubeClient"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Hero() {
  return (
    <section
  id="home" 
  className="scroll-mt-[90px]
    relative min-h-screen
    py-24 sm:py-28 lg:py-32
    w-full flex items-center overflow-hidden
    bg-[radial-gradient(circle_at_top,rgba(31,122,255,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,178,115,0.10),transparent_55%)]
  "
>
<h1 className="sr-only">
        Software & Web Development Company
      </h1>
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row items-center gap-14 xl:gap-24">

          {/* LEFT : SSR TEXT + CLIENT ANIMATION */}
          <HeroLeft />


          {/* RIGHT : CLIENT CUBE */}
          <div className="flex justify-center xl:justify-end w-full ">
            <div className="hidden  md:block justify-center xl:justify-end">
  <CubeTailwind />
</div>
{/* MOBILE ONLY – CSS cube */}
<div className="md:hidden w-[220px] h-[220px]
  border border-[#1f7aff]/30
  bg-[linear-gradient(135deg,rgba(31,122,255,.08),transparent)]
  shadow-[0_0_30px_rgba(31,122,255,.15)]
" />

          </div>
        </div>
</div>
        {/* Scroll Indicator (SSR static) */}
       <div className="
  absolute bottom-6 sm:bottom-10 hidden sm:flex
  left-1/2 -translate-x-1/2
  flex flex-col items-center gap-3
  text-[0.85rem]
  text-[#b8c7e0]
">
  <div className="
    flex h-7 w-5 items-start justify-center
    rounded-full
    border border-[#1f7aff]
    pt-1
    shadow-[0_0_10px_rgba(31,122,255,0.35)]
  ">
    <span className="mouse-dot bg-[#3bb273]" />
  </div>
  <span className="tracking-wide">Explore Our Ecosystem</span>
</div>

    
    </section>
  );
}
