import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, FileText, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsightsHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      title: "The Future of Leadership in the AI Era",
      duration: "15:24",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
    },
    {
      title: "Building Emotional Intelligence in Teams",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
    },
    {
      title: "Train the Trainer: Best Practices",
      duration: "18:30",
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=225&fit=crop",
    },
  ];

  const resources = [
    {
      title: "5 Intelligences Framework Whitepaper",
      type: "PDF Guide",
      pages: "24 pages",
    },
    {
      title: "AI Adoption Readiness Assessment",
      type: "Assessment Tool",
      pages: "Interactive",
    },
    {
      title: "Leadership Development Playbook",
      type: "eBook",
      pages: "48 pages",
    },
  ];

  return (
    <section id="insights" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-4">
              Resources
            </p>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Insights Hub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of thought leadership content, resources, 
              and tools to support your transformation journey.
            </p>
          </motion.div>

          {/* Video Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Video Gallery</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                      {video.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resources and LinkedIn */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Downloadable Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Resources</h3>
              </div>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-card p-4 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {resource.type} • {resource.pages}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-all duration-300 group-hover:translate-x-1" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* LinkedIn Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0A66C2]/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Latest from LinkedIn</h3>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <p className="text-muted-foreground mb-4">
                  Follow our thought leadership and latest insights on LinkedIn.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-2 border-gold pl-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      "The most effective leaders I've worked with share one trait: they continuously 
                      integrate multiple forms of intelligence in their decision-making..."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Posted 2 days ago</p>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      "AI adoption isn't just about technology—it's about mindset transformation. 
                      Here's what successful organizations do differently..."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Posted 1 week ago</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Follow on LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHub;
