import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

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
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em] mb-6">
              Launch Your YouTube Channel{" "}
              <span className="gradient-text">Without Building a Content Team.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Let our AI-powered team handle everything — from strategy to upload. Your channel grows while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Subscription <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <PhoneCall className="mr-1 h-5 w-5" /> Book Strategy Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
