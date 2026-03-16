import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, MapPin, CheckCircle } from "lucide-react";

const strategies = [
  {
    title: "Build Your Own Channel",
    description: "We build and manage a fully branded YouTube channel for your business designed to generate long-term homeowner traffic.",
    icon: Youtube,
    features: [
      "Custom YouTube channel setup",
      "Local search topic research",
      "Script writing and video production",
      "Thumbnails and publishing",
      "Ongoing content management",
    ],
    cta: "Start My Channel",
  },
  {
    title: "Claim a Lead Channel",
    description: "We build and grow YouTube channels targeting homeowner search traffic in specific cities. If a channel exists in your market, you can claim the lead flow.",
    icon: MapPin,
    features: [
      "Pre-built YouTube lead channels",
      "Existing homeowner search traffic",
      "Exclusive city availability",
      "Leads routed directly to your business",
    ],
    cta: "Check Availability",
  },
];

const LeadStrategy = () => {
  return (
    <section id="lead-strategy" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Your Options</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Choose Your <span className="gradient-text">Lead Strategy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card gradient-border rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" className="w-full btn-glow">
                {s.cta} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadStrategy;
