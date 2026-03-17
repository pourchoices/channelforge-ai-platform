import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExampleLeads from "@/components/ExampleLeads";
import MarketsClaimed from "@/components/MarketsClaimed";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import LeadStrategy from "@/components/LeadStrategy";
import CityAvailability from "@/components/CityAvailability";
import ExampleVideos from "@/components/ExampleVideos";
import AILeadCapture from "@/components/AILeadCapture";
import WhyYouTube from "@/components/WhyYouTube";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. ExampleLeads (Proof) */}
      <ExampleLeads />
      
      {/* 3. MarketsClaimed (Scarcity) */}
      <MarketsClaimed />
      
      {/* 4. Benefits (WhatThisMeans) */}
      <BenefitsSection />
      
      {/* 5. HowItWorks */}
      <HowItWorks />
      
      {/* 6. LeadStrategy */}
      <LeadStrategy />
      
      {/* 7. Availability (Form) */}
      <CityAvailability />
      
      {/* 8. VideoExamples */}
      <ExampleVideos />
      
      {/* 9. AILeadCapture (CallHandling) */}
      <AILeadCapture />
      
      {/* 10. WhyYouTube */}
      <WhyYouTube />
      
      {/* 11. Contact */}
      <ContactSection />
      
      {/* 12. FinalCTA */}
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
