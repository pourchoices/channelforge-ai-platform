import { motion } from "framer-motion";
import { Thermometer, Home, Monitor, GraduationCap, ShoppingBag } from "lucide-react";

const niches = [
  {
    icon: Thermometer,
    title: "HVAC Businesses",
    description: "Educate homeowners, rank locally, and generate service calls with how-to and seasonal maintenance content.",
  },
  {
    icon: Home,
    title: "Real Estate Agents",
    description: "Showcase neighborhoods, market updates, and home-buying tips to attract buyer and seller leads.",
  },
  {
    icon: Monitor,
    title: "SaaS Startups",
    description: "Build thought leadership, explain your product, and drive organic signups through educational content.",
  },
  {
    icon: GraduationCap,
    title: "Coaches & Consultants",
    description: "Establish authority in your niche and convert viewers into coaching clients with value-driven videos.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Brands",
    description: "Product demos, unboxings, and lifestyle content that drives traffic and increases conversion rates.",
  },
];

const WhoThisIsFor = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Who This Is For</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Built for <span className="gradient-text">Growth-Focused</span> Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {niches.map((niche, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <niche.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{niche.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{niche.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
