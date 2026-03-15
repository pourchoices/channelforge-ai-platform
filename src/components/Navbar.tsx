import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">ChannelForge AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">How It Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</a>
          <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Platform</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Testimonials</a>
        </div>
        <Button variant="hero" size="sm">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
