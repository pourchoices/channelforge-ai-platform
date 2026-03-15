import { motion } from "framer-motion";
import { Target, Clapperboard, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Choose Your Niche",
    description: "Tell us about your business and audience. We'll identify the best content strategy to capture your market.",
  },
  {
    icon: Clapperboard,
    title: "We Build the Content",
    description: "Our team creates scripts, thumbnails, and AI-powered video content tailored to your brand and audience.",
  },
  {
    icon: Rocket,
    title: "Your Channel Grows",
    description: "Consistent uploads bring views, leads, and authority. Watch your channel become a growth engine.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Three Steps to a <span className="gradient-text">Thriving Channel</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center hover:glow-primary transition-shadow duration-300"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
