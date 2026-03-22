import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

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
            Check If Your City Is <span className="gradient-text">Available Before It's Gone</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            Once a city is claimed, we do not open it again.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
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

            <div className="space-y-1">
              <p className="text-sm text-primary font-bold uppercase tracking-wider">
                Answered instantly — no voicemail
              </p>
              <p className="text-xs text-muted-foreground italic">
                We only partner with serious contractors ready to dominate their local market.
              </p>
            </div>
          </div>
          
          <p className="mt-12 text-sm text-muted-foreground font-semibold uppercase tracking-widest">
            ● Exclusive Territory Protection ● No Ad Spend Required ● 100% Done-For-You
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
