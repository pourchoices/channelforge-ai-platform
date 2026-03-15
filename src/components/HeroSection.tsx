import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, ArrowRight, TrendingUp, Video, Calendar, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse-glow pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 mb-8">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">AI-Powered YouTube Production</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
          Your YouTube Channel.{" "}
          <span className="gradient-text">Fully Built and Run</span>{" "}
          for You.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
          We plan, script, and produce niche-specific YouTube content so your business grows on autopilot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            View Plans <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="hero-outline" size="xl">
            <Play className="mr-1 h-5 w-5" /> See Demo
          </Button>
        </div>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-16"
      >
        <div className="glass-card gradient-border p-1 rounded-2xl glow-primary">
          <div className="bg-card rounded-xl p-4 md:p-6">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-success/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">channelforge.ai/dashboard</span>
              <div />
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Stats row */}
              {[
                { label: "Videos Published", value: "47", icon: Video, change: "+12 this month" },
                { label: "Total Views", value: "284K", icon: Eye, change: "+38% growth" },
                { label: "Subscribers", value: "12.4K", icon: TrendingUp, change: "+2.1K this month" },
                { label: "Scheduled", value: "8", icon: Calendar, change: "Next 2 weeks" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-success mt-1">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Pipeline preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {["Scripting", "In Production", "Ready to Upload"].map((stage, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">{stage}</span>
                    <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-0.5">{3 - i}</span>
                  </div>
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3 py-2 border-t border-border/50">
                      <div className="h-8 w-14 rounded bg-secondary flex items-center justify-center">
                        <Play className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground truncate">Video Idea {i * 2 + j + 1}</p>
                        <p className="text-[10px] text-muted-foreground">HVAC Niche</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
