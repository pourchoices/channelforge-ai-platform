import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CityForm = () => {
  return (
    <section id="check-availability" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Check City Availability
            </h2>
            <p className="text-sm text-muted-foreground">
              We only work with one contractor per service area.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/xdawpgqq" 
            method="POST" 
            className="space-y-4"
          >
            <input type="hidden" name="formType" value="city-availability" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Business Type</label>
                <Input name="businessType" placeholder="e.g. HVAC, Plumbing, Roofing" className="bg-secondary border-border" required />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">City</label>
                <Input name="city" placeholder="Your city" className="bg-secondary border-border" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">State</label>
                <Input name="state" placeholder="State" className="bg-secondary border-border" required />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                <Input name="name" placeholder="Your name" className="bg-secondary border-border" required />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <Input name="email" type="email" placeholder="you@company.com" className="bg-secondary border-border" required />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="hero" size="lg" className="w-full btn-glow">
                Check Availability
              </Button>
              <p className="text-[11px] text-center text-muted-foreground/80 mt-4 italic">
                We’ll confirm availability and next steps on a quick call.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CityForm;
