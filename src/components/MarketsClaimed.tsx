import { motion } from "framer-motion";
import { Lock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const claimedMarkets = [
  { market: "Dallas Roofing", status: "claimed" },
  { market: "Phoenix HVAC", status: "claimed" },
  { market: "Tulsa Plumbing", status: "available" },
  { market: "OKC Pest Control", status: "available" },
  { market: "Atlanta Landscaping", status: "claimed" },
];

const MarketsClaimed = () => {
  return (
    <section className="section-padding border-y border-border/40">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Markets Being <span className="gradient-text">Claimed By Contractors</span>
          </h2>
          <p className="text-primary font-bold uppercase tracking-wide mb-2">
            Cities are being locked in by contractors right now.
          </p>
          <p className="text-muted-foreground">
            Only one contractor per city can own the YouTube lead channel. Once claimed, it's gone for your competitors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {claimedMarkets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card rounded-xl p-5 flex items-center justify-between ${
                item.status === "claimed" ? "opacity-50 grayscale" : "border-primary/20 bg-primary/5 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  item.status === "claimed" ? "bg-muted" : "bg-primary/20"
                }`}>
                  {item.status === "claimed" ? <Lock className="h-4 w-4" /> : <MapPin className="h-4 w-4 text-primary" />}
                </div>
                <span className="font-display font-bold text-foreground">{item.market}</span>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${
                item.status === "available" ? "text-green-500" : "text-muted-foreground"
              }`}>
                {item.status === "available" ? "✓ Available" : "Claimed"}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <a href="#availability">
              Check If Your City Is Still Available <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketsClaimed;
