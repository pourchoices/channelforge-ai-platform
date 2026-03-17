import { motion } from "framer-motion";
import { PhoneCall, MapPin, Search, Calendar } from "lucide-react";

const benefits = [
  {
    icon: PhoneCall,
    title: "Inbound Calls",
    description: "Homeowners call you directly. No chasing leads or cold calling required."
  },
  {
    icon: MapPin,
    title: "City Exclusivity",
    description: "We work with one contractor per city. Once you're in, your competitors are locked out."
  },
  {
    icon: Search,
    title: "High Intent",
    description: "YouTube users are searching for solutions. They are ready to book a repair now."
  },
  {
    icon: Calendar,
    title: "Evergreen ROI",
    description: "Videos continue to generate leads for years after they are posted. Pure profit."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="pt-12 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Why YouTube?</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            The Most Powerful Lead Source <span className="gradient-text">for Contractors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
