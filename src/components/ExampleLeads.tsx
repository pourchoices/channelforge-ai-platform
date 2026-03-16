import { motion } from "framer-motion";
import { Eye, PhoneIncoming, CalendarCheck, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { 
    icon: Eye, 
    label: "Local Homeowners Reached", 
    value: "3,400", 
    color: "text-foreground" 
  },
  { 
    icon: PhoneIncoming, 
    label: "Inbound Calls", 
    value: "29", 
    color: "text-primary" 
  },
  { 
    icon: CalendarCheck, 
    label: "Booked Jobs", 
    value: "11", 
    color: "text-primary" 
  },
  { 
    icon: DollarSign, 
    label: "Estimated Revenue Generated", 
    value: "$18,000+", 
    color: "text-primary",
    featured: true 
  },
];

const ExampleLeads = () => {
  return (
    <section id="proof" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">REAL RESULTS</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Example Leads From <span className="gradient-text">a Channel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here’s what a single YouTube lead channel can produce for a local contractor in just one month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
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
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-tight leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            These are real inbound calls from homeowners searching YouTube for HVAC help — no paid ads, no cold outreach.
          </p>
        </motion.div>

        {/* CTA Button below the proof card */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="hero" size="xl" className="btn-glow" asChild>
              <a href="#availability">
                Check If Your City Is Available <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExampleLeads;
