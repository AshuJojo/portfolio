import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperiencesSection />
      </main>
    </>
  );
}
