// components/HomeContent.tsx
"use client";
import AboutSection from "../components/About";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "./Navbar";

export default function HomeContent() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
       <Hero />
             <ServicesSection />
             <AboutSection />
             <ProjectsSection />
             <ContactSection />
      </main>
    </>
  );
}
