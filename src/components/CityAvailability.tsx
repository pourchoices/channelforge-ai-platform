import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock, AlertCircle } from "lucide-react";

const CityAvailability = () => {
  return (
    <section id="availability" className="section-padding bg-secondary/10">
      <div className="container mx-auto max-w-2xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Check If Your City Is <span className="gradient-text">Still Available</span>
          </h2>
          
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex flex-col items-center gap-2 text-primary font-bold bg-primary/10 px-6 py-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>Only one contractor per city is accepted.</span>
              </div>
              <span className="text-sm md:text-base">Once a city is claimed, it is permanently closed.</span>
            </div>
            <p className="text-muted-foreground max-w-lg mt-4 font-medium italic">
              We only accept a limited number of contractors each month to maintain lead quality.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock className="h-24 w-24" />
          </div>
          
          <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Business Type</label>
                <input placeholder="e.g. HVAC, Plumbing" className="w-full bg-secondary border border-border h-12 px-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">City</label>
                <input placeholder="Your city" className="w-full bg-secondary border border-border h-12 px-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">State</label>
                <input placeholder="State" className="w-full bg-secondary border border-border h-12 px-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Name</label>
                <input placeholder="Full name" className="w-full bg-secondary border border-border h-12 px-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" />
              </div>
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Business Email</label>
              <input type="email" placeholder="name@company.com" className="w-full bg-secondary border border-border h-12 px-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" />
            </div>
            <div className="pt-2">
              <Button variant="hero" size="xl" className="w-full btn-glow text-lg mt-4">
                Check Availability
              </Button>
              <p className="text-[11px] text-center text-muted-foreground mt-4 italic">
                Note: We review every submission within 24 hours.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CityAvailability;
