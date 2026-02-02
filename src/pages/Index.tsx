import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import IntelligenceFramework from "@/components/sections/IntelligenceFramework";
import Programs from "@/components/sections/Programs";
import TechnicalTraining from "@/components/sections/TechnicalTraining";
import Testimonials from "@/components/sections/Testimonials";
import InsightsHub from "@/components/sections/InsightsHub";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <IntelligenceFramework />
        <Programs />
        <TechnicalTraining />
        <Testimonials />
        <InsightsHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
