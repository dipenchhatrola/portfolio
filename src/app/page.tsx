import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <ScrollProgress />
      <div className="noise" aria-hidden />
      <Navbar />

      <main className="relative">
        <Hero />
        <Story />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
