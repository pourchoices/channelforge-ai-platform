import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

const CityForm = () => {
  return (
    <section id="availability" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Request Market Availability
            </h2>
            <p className="text-sm text-muted-foreground">
              Submit your details below to see if your service area is still open for a YouTube lead channel.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider ml-1">Business Type</label>
                <Input placeholder="e.g. HVAC, Plumbing, Roofing" className="bg-background border-border h-12" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider ml-1">City</label>
                <Input placeholder="Your city" className="bg-background border-border h-12" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider ml-1">State</label>
                <Input placeholder="State" className="bg-background border-border h-12" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider ml-1">Your Name</label>
                <Input placeholder="Full name" className="bg-background border-border h-12" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider ml-1">Business Email</label>
              <Input type="email" placeholder="name@company.com" className="bg-background border-border h-12" />
            </div>

            <div className="pt-2">
              <Button variant="hero" size="xl" className="w-full btn-glow text-lg">
                Check Availability
              </Button>
              <p className="text-[11px] text-center text-muted-foreground mt-4 italic">
                Note: We review market requests manually to ensure exclusivity. Popular contractor markets can be claimed quickly.
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-center gap-2 text-xs text-muted-foreground/80">
            <AlertCircle className="h-4 w-4 text-primary/60" />
            <span>Only one contractor accepted per service area.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CityForm;
