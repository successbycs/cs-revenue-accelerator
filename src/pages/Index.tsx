import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LifecycleVisual from "@/components/LifecycleVisual";
import BuilderRoutingCard from "@/components/BuilderRoutingCard";
import BuilderSection from "@/components/BuilderSection";
import StewardSection from "@/components/StewardSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import RiskReversal from "@/components/RiskReversal";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <LifecycleVisual />
      <BuilderRoutingCard />
      <BuilderSection />
      <StewardSection />
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
