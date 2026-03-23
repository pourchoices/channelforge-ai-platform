import { motion } from "framer-motion";
import { Lock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const claimedMarkets = [
  { market: "Dallas Roofing", status: "claimed" },
  { market: "Phoenix HVAC", status: "claimed" },
  { market: "Tulsa Plumbing", status: "claimed" },
  { market: "Austin Landscaping", status: "claimed" },
];

const MarketsClaimed = () => {
  return (
    <section className="py-20 bg-background/50 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4 uppercase tracking-tight">
            Most contractors start by claiming an existing call flow.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium">
            Once an area is claimed, it's permanently locked out for all other contractors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {claimedMarkets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 flex flex-col items-center justify-center gap-3 bg-secondary/20 border-primary/10"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-xs font-black uppercase text-foreground/70 tracking-widest">{m.market}</p>
                <p className="text-[10px] font-bold text-primary uppercase mt-0.5">{m.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsClaimed;
