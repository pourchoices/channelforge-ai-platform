import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    category: "HVAC",
    title: "Emergency AC Repair in Oklahoma City: 3 Signs You Need Help Fast",
    thumbnail: "/images/hvac-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/UQH0BStPFms?autoplay=1",
  },
  {
    category: "ROOFING",
    title: "Oklahoma City Roof Leak? What Homeowners Should Check Before Calling",
    thumbnail: "/images/roofing-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/4so-kmjj6io?autoplay=1",
  },
  {
    category: "PLUMBING",
    title: "Burst Pipe or Bad Water Pressure? When OKC Homeowners Should Call a Plumber",
    thumbnail: "/images/plumbing-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/vZKuonvCU_8?autoplay=1",
  },
];

const ExampleVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border/50 bg-secondary/20 shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40">
                    <Play className="h-8 w-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                    {video.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
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
