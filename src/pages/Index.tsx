import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LifecycleVisual from "@/components/LifecycleVisual";
import BuilderRoutingCard from "@/components/BuilderRoutingCard";
import BuilderSection from "@/components/BuilderSection";
import StewardSection from "@/components/StewardSection";
import MentoringSection from "@/components/MentoringSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import RiskReversal from "@/components/RiskReversal";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <main>
      <Navbar />
      <Hero />
      <LifecycleVisual />
      <BuilderRoutingCard />
      <BuilderSection />
      <StewardSection />
      <MentoringSection />
      <ResultsSection />
      <HowItWorks />
      <AboutSection />
      <RiskReversal />
      <FooterCTA />
      <Footer />
    </main>
  );
};

export default Index;
