import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import ExampleLeads from "@/components/ExampleLeads";
import LeadStrategy from "@/components/LeadStrategy";
import CityAvailability from "@/components/CityAvailability";
import CityForm from "@/components/CityForm";
import ExampleVideos from "@/components/ExampleVideos";
import AILeadCapture from "@/components/AILeadCapture";
import WhyYouTube from "@/components/WhyYouTube";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <ExampleLeads />
      <LeadStrategy />
      <CityAvailability />
      <CityForm />
      <ExampleVideos />
      <AILeadCapture />
      <WhyYouTube />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
