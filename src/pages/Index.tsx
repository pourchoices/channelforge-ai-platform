import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PlatformPreview from "@/components/PlatformPreview";
import PricingSection from "@/components/PricingSection";
import ExampleVideos from "@/components/ExampleVideos";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhoThisIsFor />
      <PlatformPreview />
      <PricingSection />
      <ExampleVideos />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
