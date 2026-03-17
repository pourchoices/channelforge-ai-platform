import { motion } from "framer-motion";
import { Eye, PhoneIncoming, CalendarCheck, TrendingUp, Wallet, DollarSign } from "lucide-react";

const stats = [
  { icon: Eye, label: "Local Homeowners Reached", value: "3,400", color: "text-foreground" },
  { icon: PhoneIncoming, label: "Inbound Calls", value: "29", color: "text-primary" },
  { icon: CalendarCheck, label: "Booked Jobs", value: "11", color: "text-primary" },
  { icon: Wallet, label: "Average Job Value", value: "$1,600", color: "text-primary", featured: true },
];

const typicalJobs = [
  { name: "Roof Repair", value: "$3,200" },
  { name: "HVAC Replacement", value: "$4,800" },
  { name: "Water Heater Install", value: "$1,200" },
  { name: "Emergency Plumbing", value: "$950" },
];

const ExampleLeads = () => {
  return (
    <section id="proof" className="pt-16 pb-12 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">REAL RESULTS</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Real Inbound Calls From <span className="gradient-text">One YouTube Channel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here’s what a single YouTube lead channel can produce for a local contractor in just one month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center p-6 rounded-xl transition-all duration-300 ${
                  stat.featured 
                    ? "bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(234,88,12,0.1)]" 
                    : "bg-secondary/50"
                }`}
              >
                <div className={`inline-flex h-10 w-10 rounded-lg items-center justify-center mb-4 ${
                  stat.featured ? "bg-primary text-white" : "bg-primary/10 text-primary"
                }`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className={`font-display text-2xl md:text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 border-t border-border/20">
            <h4 className="text-center font-display text-lg font-bold text-foreground mb-6 uppercase tracking-wide">
              Typical Jobs Generated From YouTube Leads
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {typicalJobs.map((job, idx) => (
                <div key={idx} className="bg-secondary/40 border border-border/30 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground mb-1">{job.name}</span>
                  <span className="text-lg font-bold text-primary">{job.value}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] text-muted-foreground mt-4 italic">
              Typical job values. Actual results vary by service and location.
            </p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            These are real inbound calls from homeowners searching YouTube for HVAC help — no paid ads, no cold outreach.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleLeads;
