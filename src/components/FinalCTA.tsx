import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em] mb-6">
              Check If Your City Is <span className="gradient-text">Available Before It’s Gone</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Once your city is claimed, we do not open it again. Build a YouTube lead channel that brings homeowners directly to your phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <a href="https://calendly.com/channelforge/strategy-call">
                  Check If Your City Is Available <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="https://calendly.com/channelforge/strategy-call">
                  <MapPin className="mr-1 h-5 w-5" /> Book a Strategy Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
