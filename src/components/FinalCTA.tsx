import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            Start Getting Inbound Calls From YouTube — <span className="gradient-text">Before Your Competitor Does</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            Once your city is claimed, we do not open it again. Own the search traffic in your city before someone else locks it down.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-4 border-t border-border/20 w-full max-w-xl">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 uppercase">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No ads
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 uppercase">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No cold calling
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 uppercase">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No lead buying
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
