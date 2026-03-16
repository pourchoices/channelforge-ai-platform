import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Lead Strategy", href: "#lead-strategy" },
  { label: "Availability", href: "#availability" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <span className="font-display text-lg font-bold text-foreground">
          ChannelForge <span className="text-primary">Leads</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#availability">Check Availability</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2" asChild>
            <a href="#availability">Check Availability</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
