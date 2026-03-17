import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-[-0.02em] mb-4">
            Contact Our Team
          </h2>
          <p className="text-muted-foreground font-medium italic">
            Prefer to talk? Book a quick call instead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-10"
        >
          <form 
            action="https://formspree.io/f/mqeygbzk" 
            method="POST" 
            className="space-y-4"
          >
            <input type="hidden" name="formType" value="contact" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                <Input name="name" placeholder="Your name" className="bg-secondary border-border" required />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                <Input name="email" type="email" placeholder="you@company.com" className="bg-secondary border-border" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
                <Input name="phone" type="tel" placeholder="(555) 000-0000" className="bg-secondary border-border" required />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Business Type</label>
                <Input name="businessType" placeholder="e.g. HVAC, Plumbing" className="bg-secondary border-border" required />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">City</label>
              <Input name="city" placeholder="Your city" className="bg-secondary border-border" required />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <Textarea name="message" placeholder="Tell us about your business..." rows={4} className="bg-secondary border-border resize-none" required />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" variant="hero" size="lg" className="flex-1 btn-glow">
                <Send className="mr-1 h-4 w-4" /> Send Message
              </Button>
              <Button variant="hero-outline" size="lg" className="flex-1" asChild>
                <a href="https://calendly.com/channelforge/strategy-call">
                  <PhoneCall className="mr-1 h-4 w-4" /> Book Strategy Call
                </a>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
