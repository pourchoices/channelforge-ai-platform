import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

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
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            Start Getting Inbound Calls From YouTube — <span className="gradient-text">Before Your Competitor Does</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
            Once your city is claimed, we do not open it again.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Own the search traffic in your city before someone else claims it. Once your service area is locked, it's gone.
          </p>
          
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
          
          <p className="mt-8 text-sm text-muted-foreground font-semibold uppercase tracking-widest">
            ● Exclusive Territory Protection ● No Ad Spend Required ● 100% Done-For-You
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
