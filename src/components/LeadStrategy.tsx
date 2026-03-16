import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, MapPin, CheckCircle } from "lucide-react";

const strategies = [
  {
    title: "Build Your Own Channel",
    description: "We build and manage a fully branded YouTube channel for your business — designed to generate inbound calls from homeowners searching for help in your area.",
    icon: Youtube,
    features: [
      "Custom YouTube channel in your brand",
      "Local homeowner search topic research",
      "Script writing and video production",
      "Thumbnails, SEO, and publishing",
      "Ongoing content that generates calls",
    ],
    cta: "Start My Channel",
    href: "#contact",
  },
  {
    title: "Claim a Lead Channel",
    description: "We've already built YouTube channels generating homeowner traffic in specific cities. If your market is available, you can claim exclusive access to the leads.",
    icon: MapPin,
    features: [
      "Pre-built channels with existing traffic",
      "Inbound calls from homeowners in your city",
      "Exclusive — one contractor per market",
      "Leads routed directly to your phone",
    ],
    cta: "Check If Your City Is Available",
    href: "#check-availability",
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
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Two Ways To Get Leads</p>
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

              <Button variant="hero" size="lg" className="w-full btn-glow" asChild>
                <a href={s.href}>{s.cta} <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadStrategy;
