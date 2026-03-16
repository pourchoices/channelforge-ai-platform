import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Clock } from "lucide-react";

const reasons = [
  { icon: TrendingUp, text: "YouTube is the second largest search engine." },
  { icon: Users, text: "Homeowners search YouTube daily for home repair solutions." },
  { icon: ShieldCheck, text: "Videos build trust faster than ads." },
  { icon: Clock, text: "One helpful video can generate leads for years." },
];

const WhyYouTube = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">The Opportunity</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Why YouTube Is the Next <span className="gradient-text">Local SEO</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed pt-2">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouTube;
