import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for getting started with YouTube Shorts content.",
    features: [
      "8 YouTube Shorts",
      "Script writing",
      "Basic thumbnails",
      "Upload-ready delivery",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$799",
    description: "Full content strategy with Shorts and long-form videos.",
    features: [
      "20 YouTube Shorts",
      "2 Long-form videos",
      "Custom thumbnails",
      "SEO titles and descriptions",
    ],
    highlighted: true,
  },
  {
    name: "Authority",
    price: "$1,497",
    description: "Complete channel management for maximum growth.",
    features: [
      "40 Shorts",
      "4 Long-form videos",
      "Full channel management",
      "Competitor research",
      "Analytics reporting",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Simple, <span className="gradient-text">Transparent</span> Plans
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose the plan that fits your growth goals. Upgrade or cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`glass-card rounded-2xl p-8 flex flex-col relative ${
                plan.highlighted ? "glow-primary gradient-border" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="font-display text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Subscribe
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
