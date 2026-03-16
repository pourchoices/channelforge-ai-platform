import { motion } from "framer-motion";
import { Play } from "lucide-react";

const industries = [
  {
    name: "HVAC",
    videos: [
      "3 Signs Your AC Is About To Fail",
      "Why Your Upstairs Never Cools",
      "How To Lower Your Energy Bill",
    ],
  },
  {
    name: "Roofing",
    videos: [
      "How To Spot Storm Damage On Your Roof",
      "When A Roof Repair Is No Longer Enough",
    ],
  },
  {
    name: "Plumbing",
    videos: [
      "Why Your Water Heater Keeps Shutting Off",
      "How To Prevent Expensive Plumbing Repairs",
    ],
  },
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
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Content That Converts</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-[-0.02em]">
            Example Videos That <span className="gradient-text">Generate Leads</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4">{ind.name}</h3>
              <ul className="space-y-3">
                {ind.videos.map((v, j) => (
                  <li key={j} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Play className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/90 pt-1">{v}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleVideos;
