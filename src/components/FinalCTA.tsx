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
              Start Building Your YouTube{" "}
              <span className="gradient-text">Lead Engine</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Stop relying only on ads and start building evergreen traffic that brings homeowners to your business every month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow">
                Start My Channel <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <MapPin className="mr-1 h-5 w-5" /> Check Availability
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
