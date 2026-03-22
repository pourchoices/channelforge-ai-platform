import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-1.5 md:gap-2 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <PhoneCall className="text-white h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="font-display text-lg md:text-xl font-black tracking-tight text-foreground uppercase">
            CHANNEL<span className="text-primary">FORGE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Button variant="hero" size="sm" className="btn-glow px-6" asChild>
            <a href="tel:+14053381707">
              <Phone className="mr-2 h-4 w-4" /> (405) 338-1707
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-border/40 p-6 animate-in fade-in slide-in-from-top-4">
          <Button variant="hero" className="w-full text-lg h-14" asChild>
            <a href="tel:+14053381707">
              <Phone className="mr-3 h-6 w-6" /> Call (405) 338-1707
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
