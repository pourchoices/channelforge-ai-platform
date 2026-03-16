import { motion } from "framer-motion";
import { Search, FileText, Video, Youtube, UserCheck, ArrowDown } from "lucide-react";

const steps = [
  { icon: Search, label: "Homeowner Search Topics" },
  { icon: FileText, label: "Script Creation" },
  { icon: Video, label: "Video Production" },
  { icon: Youtube, label: "YouTube Publishing" },
  { icon: UserCheck, label: "Local Leads" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">The Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            How Our YouTube <span className="gradient-text">Lead Engine</span> Works
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-md"
            >
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-semibold">STEP {i + 1}</span>
                  <p className="font-display text-base font-bold text-foreground">{step.label}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-5 w-5 text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
