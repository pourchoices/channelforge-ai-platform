import { motion } from "framer-motion";
import { Eye, PhoneIncoming, CalendarCheck, TrendingUp } from "lucide-react";

const stats = [
  { icon: Eye, label: "Views", value: "3,400", color: "text-foreground" },
  { icon: PhoneIncoming, label: "Calls Generated", value: "29", color: "text-primary" },
  { icon: CalendarCheck, label: "Booked Jobs", value: "11", color: "text-primary" },
];

const ExampleLeads = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Real Results</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Example Leads From <span className="gradient-text">a Channel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here's what a single YouTube lead channel can produce for a local contractor in just one month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">OKC HVAC Lead Channel</h3>
              <p className="text-xs text-muted-foreground">30-day performance snapshot</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-4 rounded-xl bg-secondary/50"
              >
                <div className="inline-flex h-9 w-9 rounded-lg bg-primary/10 items-center justify-center mb-3">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <p className={`font-display text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            These are real inbound calls from homeowners searching YouTube for HVAC help — not paid ads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleLeads;
