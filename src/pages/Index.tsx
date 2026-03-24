import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarketsClaimed from "@/components/MarketsClaimed";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import ExampleVideos from "@/components/ExampleVideos";
import CityAvailability from "@/components/CityAvailability";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ChannelForge | Tracked Call Flow Systems</title>
        <meta name="description" content="We build and manage tracked inbound call flows for local service businesses." />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <MarketsClaimed />
      <BenefitsSection />
      <HowItWorks />
      <ExampleVideos />
      <CityAvailability />

      {/* Tracked Results Mini-Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tight">
              We Don’t Just Send Calls — <span className="gradient-text">We Track Results</span>
            </h2>
            <div className="glass-card p-8 md:p-12 text-left">
              <p className="text-xl text-foreground mb-6 font-bold">
                We don’t leave you guessing. Every call is recorded, tracked, and analyzed.
              </p>
              <p className="text-muted-foreground mb-8">We monitor:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 font-bold text-foreground uppercase tracking-widest text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" /> every inbound call
                </li>
                <li className="flex items-center gap-2 font-bold text-foreground uppercase tracking-widest text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" /> every qualified opportunity
                </li>
                <li className="flex items-center gap-2 font-bold text-foreground uppercase tracking-widest text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" /> every booked job
                </li>
                <li className="flex items-center gap-2 font-bold text-foreground uppercase tracking-widest text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" /> your close rate
                </li>
              </ul>
              <p className="text-lg text-foreground">
                Then provide a clear monthly breakdown so you know exactly what your call flow is producing.
              </p>
              <p className="mt-4 text-lg font-black text-primary italic uppercase tracking-tight">
                No fluff. No vague metrics. Just real numbers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
