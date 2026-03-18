import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-material";

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
              <a href="tel:+14053381707">
                Call Now to See If Your Area Is Available <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+14053381707">
                <Phone className="mr-2 h-5 w-5" /> (405) 338-1707
              </a>
            </Button>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-primary font-bold uppercase tracking-wider">
              Answered instantly — no voicemail
            </p>
            <p className="text-sm text-muted-foreground">
              Homeowners are already searching YouTube for your services every day.
            </p>
            <p className="text-xs font-medium text-foreground/80 flex items-center justify-center gap-4">
              <span>✔ No ads</span>
              <span>✔ No cold calling</span>
              <span>✔ No lead buying</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
