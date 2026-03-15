import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Owner, CoolBreeze HVAC",
    quote: "We went from zero YouTube presence to 15K subscribers in 6 months. Now 40% of our new leads come from video content.",
  },
  {
    name: "Sarah Chen",
    role: "Realtor, Keller Williams",
    quote: "ChannelForge handles everything. I just review the content and watch my pipeline fill up with qualified buyer leads.",
  },
  {
    name: "David Park",
    role: "Founder, MetricFlow SaaS",
    quote: "Our product demos on YouTube now drive more signups than our paid ads. The ROI is unbelievable.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Trusted by <span className="gradient-text">Growing Businesses</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
