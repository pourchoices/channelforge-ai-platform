import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    category: "HVAC",
    title: "Emergency AC Repair in Oklahoma City: 3 Signs You Need Help Fast",
    // Updated with a fresh HVAC service image link
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Roofing",
    title: "Oklahoma City Roof Leak? What Homeowners Should Check Before Calling",
    thumbnail: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Plumbing",
    title: "Burst Pipe or Bad Water Pressure? When OKC Homeowners Should Call a Plumber",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
];

const ExampleVideos = () => {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Content Strategy</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            The Type of Videos That <span className="gradient-text">Generate Calls</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border/50 bg-secondary/20">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback in case of local loading issues
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                    {video.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
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
