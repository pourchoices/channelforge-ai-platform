import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8"
        >
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Only One Contractor Per City — Claim Yours</span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-[-0.03em] text-foreground mb-6">
          Own Your City's YouTube{" "}
          <span className="gradient-text">Lead Channel</span> Before Your Competitor Does
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-body">
          We build and manage YouTube channels that bring homeowners actively searching for your services directly to your phone.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="btn-glow" asChild>
              <a href="#availability">
                See If Your City Is Available <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="/schedule-call">
                <PhoneCall className="mr-2 h-5 w-5" /> Book a Quick Call
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-medium">
              We generate inbound calls from homeowners actively searching for your service in your city.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No ads
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No cold calling
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No lead buying
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
