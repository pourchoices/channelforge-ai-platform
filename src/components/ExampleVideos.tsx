import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp } from "lucide-react";

const videos = [
  { title: "3 Signs Your AC Is About to Fail", views: "24K", likes: "1.2K" },
  { title: "The Thermostat Mistake Costing Homeowners Money", views: "18K", likes: "890" },
  { title: "How to Lower Your Energy Bill This Summer", views: "31K", likes: "2.1K" },
  { title: "Should You Repair or Replace Your Furnace?", views: "15K", likes: "720" },
  { title: "Top 5 Air Filters Ranked by HVAC Pros", views: "22K", likes: "1.5K" },
  { title: "Why Your Vents Are Blowing Warm Air", views: "27K", likes: "1.8K" },
];

const ExampleVideos = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Content Samples</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Video Ideas That <span className="gradient-text">Drive Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video bg-secondary flex items-center justify-center relative">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="h-5 w-5 text-primary ml-0.5" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-3 leading-snug">{video.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {video.views}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> {video.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleVideos;
