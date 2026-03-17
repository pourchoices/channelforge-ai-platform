import { motion } from "framer-motion";
import { Search, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

const strategies = [
  {
    icon: MapPin,
    title: "Claim an Existing Channel",
    description: "Instantly take over a pre-built lead channel already ranking for your service and city."
  },
  {
    icon: Search,
    title: "Custom Channel Build",
    description: "We build a dedicated YouTube engine from scratch designed specifically for your brand and market."
  },
  {
    icon: PhoneCall,
    title: "Lead Capture & Routing",
    description: "Every call is recorded, tracked, and sent directly to your dispatch or office phone."
  },
  {
    icon: ShieldCheck,
    title: "Total Market Defense",
    description: "We block your competitors from using our network in your service area once you are locked in."
  }
];

const LeadStrategy = () => {
  return (
    <section id="lead-strategy" className="section-padding border-t border-border/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">The Strategy</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em] mb-6">
            Two Ways to Own Your <span className="gradient-text">Local Market</span>
          </h2>
          <p className="text-lg text-primary font-bold mb-8 uppercase tracking-wide">
            Most contractors start by claiming an existing lead channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <strategy.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{strategy.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadStrategy;
