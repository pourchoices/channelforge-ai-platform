import { motion } from "framer-motion";
import { LayoutDashboard, Video, Calendar, Image, Lightbulb, BarChart3, Play, Clock, CheckCircle2 } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Video, label: "Videos", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Image, label: "Thumbnails", active: false },
  { icon: Lightbulb, label: "Ideas", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
];

const upcomingVideos = [
  { title: "5 HVAC Mistakes Homeowners Make", status: "Scheduled", date: "Mar 18" },
  { title: "Best Thermostat Settings for Spring", status: "In Review", date: "Mar 20" },
  { title: "When to Replace Your AC Unit", status: "Scripting", date: "Mar 22" },
  { title: "Energy Saving Tips for Summer", status: "Idea", date: "Mar 25" },
];

const PlatformPreview = () => {
  return (
    <section id="platform" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Platform Preview</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Your Content, <span className="gradient-text">One Dashboard</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Track your video pipeline, review thumbnails, and monitor analytics — all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border rounded-2xl glow-primary overflow-hidden"
        >
          <div className="flex min-h-[500px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-56 border-r border-border p-4 gap-1">
              <div className="flex items-center gap-2 mb-6 px-2">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                  <Play className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-foreground">ChannelForge</span>
              </div>
              {sidebarItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    item.active
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg font-bold text-foreground">Content Pipeline</h3>
                <span className="text-xs text-muted-foreground">March 2026</span>
              </div>

              {/* Thumbnail previews */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video rounded-lg bg-secondary flex items-center justify-center border border-border/50">
                    <div className="text-center">
                      <Image className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                      <span className="text-[10px] text-muted-foreground">Thumbnail {i}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming videos table */}
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 gap-4 px-4 py-2.5 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <span>Video Title</span>
                  <span>Status</span>
                  <span>Date</span>
                </div>
                {upcomingVideos.map((video, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 px-4 py-3 border-b border-border/50 last:border-0">
                    <span className="text-sm text-foreground font-medium truncate">{video.title}</span>
                    <span className={`text-xs font-medium flex items-center gap-1.5 ${
                      video.status === "Scheduled" ? "text-success" :
                      video.status === "In Review" ? "text-primary" :
                      video.status === "Scripting" ? "text-accent" : "text-muted-foreground"
                    }`}>
                      {video.status === "Scheduled" ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      {video.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{video.date}</span>
                  </div>
                ))}
              </div>

              {/* Mini analytics */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Avg. Views", value: "6.2K", change: "+24%" },
                  { label: "Watch Time", value: "1,847h", change: "+18%" },
                  { label: "CTR", value: "8.4%", change: "+3.2%" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-success">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformPreview;
