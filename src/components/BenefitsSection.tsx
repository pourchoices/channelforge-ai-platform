import { motion } from "framer-motion";
import { PhoneIncoming, Award, Clock, Search } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Show Up When Homeowners Search",
    description: "When a homeowner searches YouTube for repair help, your business is the one they find — and call.",
  },
  {
    icon: Award,
    title: "Become The Go-To Contractor",
    description: "Helpful videos position you as the trusted local expert homeowners want to hire.",
  },
  {
    icon: Clock,
    title: "Leads That Never Stop",
    description: "Unlike ads that stop when you stop paying, videos keep generating inbound calls for years.",
  },
  {
    icon: PhoneIncoming,
    title: "More Calls, More Booked Jobs",
    description: "Homeowners who watch your content pick up the phone and book — no cold calling required.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">The Advantage</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            What This Means for <span className="gradient-text">Your Business</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
