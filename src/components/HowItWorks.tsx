import { motion } from "framer-motion";
import { Search, Video, PhoneCall, DollarSign, ArrowDown, ShieldCheck } from "lucide-react";

const steps = [
  { 
    icon: Video, 
    title: "Create Local Content",
    description: "We build a high-authority YouTube channel for your specific city and trade." 
  },
  { 
    icon: PhoneCall, 
    title: "Generate Inbound Calls",
    description: "Homeowners find your content when they have a problem, triggering direct inbound calls." 
  },
  { 
    icon: ShieldCheck, 
    title: "AI Answers and Qualifies",
    description: "Our AI system handles the phone, answers questions, and qualifies the caller." 
  },
  { 
    icon: DollarSign, 
    title: "Send Opportunities to Contractor",
    description: "Once a call is vetted as a real job, the opportunity is routed straight to you." 
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">The Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            How Our YouTube <span className="gradient-text">Inbound Call Engine</span> Works
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-lg"
            >
              <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-primary/30 transition-all">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center relative">
                  <span className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-primary text-[10px] font-black text-white flex items-center justify-center">
                    {i + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-foreground leading-tight mb-1">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-tight">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="h-6 w-6 text-primary/40" />
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
