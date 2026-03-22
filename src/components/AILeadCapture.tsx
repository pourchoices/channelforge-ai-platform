import { motion } from "framer-motion";
import { Phone, Bot, ClipboardList, CalendarCheck, Database } from "lucide-react";

const features = [
  { icon: Phone, label: "Dedicated tracking phone numbers for every channel" },
  { icon: Bot, label: "AI receptionist answers homeowner calls 24/7" },
  { icon: ClipboardList, label: "Every call recorded and logged as a lead" },
  { icon: CalendarCheck, label: "Jobs booked automatically on your calendar" },
  { icon: Database, label: "All leads managed in your Personal CRM" },
];

const AILeadCapture = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Never Miss A Lead</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Every Call <span className="gradient-text">Captured & Booked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            When a homeowner calls, our system answers, qualifies, and books the job — so you never miss an opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILeadCapture;
