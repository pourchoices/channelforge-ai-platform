import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    category: "HVAC",
    title: "Emergency AC Repair in Oklahoma city: 3 Signs You Need Help Fast",
    thumbnail: "/images/hvac-thumbnail.jpg",
    fallback: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/UQH0BStPFms?autoplay=1",
  },
  {
    category: "ROOFING",
    title: "Oklahoma City Roof Leak? What Homeowners Should Check Before Calling",
    thumbnail: "/images/roofing-thumbnail.jpg",
    fallback: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/4so-kmjj6io?autoplay=1",
  },
  {
    category: "PLUMBING",
    title: "Burst Pipe or Bad Water Pressure? When OKC Homeowners Should Call a Plumber",
    thumbnail: "/images/plumbing-thumbnail.jpg",
    fallback: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/vZKuonvCU_8?autoplay=1",
  },
];

const ExampleVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Proof of Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Real Calls Generated From <span className="gradient-text">One Call Flow</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border/50 bg-secondary/20 shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== video.fallback) {
                      target.src = video.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40">
                    <Play className="h-8 w-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card p-10 md:p-16 rounded-3xl border border-primary/20 bg-primary/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
            Want Calls Like This For Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            We build high-converting local assets designed to bring you more calls and inbound opportunities.
          </p>
          
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <a href="#contact">
              Check If Your Area is Available <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z- flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExampleVideos;
