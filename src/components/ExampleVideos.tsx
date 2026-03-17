import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: 1, title: "Emergency Repair Call Generation", category: "HVAC" },
  { id: 2, title: "Local Roofing Authority System", category: "Roofing" },
  { id: 3, title: "Plumbing Service Lead Engine", category: "Plumbing" },
];

const ExampleVideos = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Proof of Performance</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            The Type of Videos That <span className="gradient-text">Generate Calls</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We produce evergreen content optimized for localized search intent that drives homeowners to pick up the phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-primary fill-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{video.category}</span>
                </div>
              </div>
              <h3 className="mt-4 font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleVideos;
