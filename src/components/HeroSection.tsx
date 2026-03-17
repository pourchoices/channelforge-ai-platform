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
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8"
        >
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Only One Contractor Per City Can Claim The Channel</span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-[-0.03em] text-foreground mb-6">
          Own Your City's YouTube{" "}
          <span className="gradient-text">Lead Channel</span> Before Your Competitor Does
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-2 font-body">
          We build and manage YouTube lead channels that send homeowners searching for repairs directly to your phone.
        </p>

        <p className="text-md font-bold text-foreground mb-10 uppercase tracking-wide">
          No ads. No cold outreach. Just inbound calls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <a href="#availability">
              Check If Your City Is Still Available <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="/schedule-call">
              <PhoneCall className="mr-2 h-5 w-5" /> Book a Strategy Call
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 border-t border-border/40">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Homeowners searching YouTube</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Evergreen traffic & leads</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Exclusive city ownership</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
