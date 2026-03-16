import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Lock } from "lucide-react";

const cities = [
  { name: "OKC Plumbing", status: "available" },
  { name: "Tulsa Roofing", status: "available" },
  { name: "Dallas HVAC", status: "claimed" },
  { name: "Phoenix Pest Control", status: "available" },
];

const CityAvailability = () => {
  return (
    <section id="city-availability" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Limited Availability</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em] mb-4">
            Claim Your City <span className="gradient-text">Before Your Competitor Does</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We only partner with one contractor per service area. Once a market is claimed, it's locked — and your competitor gets the calls instead of you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-10">
          {cities.map((city, i) => {
            const claimed = city.status === "claimed";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card rounded-xl p-5 text-center ${claimed ? "opacity-60" : "hover:border-primary/30"} transition-all`}
              >
                <div className={`inline-flex h-10 w-10 rounded-lg items-center justify-center mb-3 ${claimed ? "bg-muted" : "bg-primary/10"}`}>
                  {claimed ? <Lock className="h-4 w-4 text-muted-foreground" /> : <MapPin className="h-4 w-4 text-primary" />}
                </div>
                <p className="font-display text-sm font-bold text-foreground mb-1">{city.name}</p>
                <span className={`text-xs font-semibold uppercase tracking-wider ${claimed ? "text-muted-foreground" : "text-success"}`}>
                  {city.status === "available" ? "✓ Available" : "Claimed"}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <a href="#check-availability">Check If Your City Is Available <ArrowRight className="ml-1 h-5 w-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CityAvailability;
