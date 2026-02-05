import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, FileText, Linkedin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import training1 from "@/assets/gallery/training-1.jpg";
import training2 from "@/assets/gallery/training-2.jpg";
import training3 from "@/assets/gallery/training-3.jpg";
import training4 from "@/assets/gallery/training-4.jpg";
import training5 from "@/assets/gallery/training-5.jpg";
import training6 from "@/assets/gallery/training-6.jpg";
import training7 from "@/assets/gallery/training-7.jpg";

const InsightsHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: training1, title: "Corporate Training at Wirtgen Group" },
    { src: training2, title: "Dale Carnegie Leadership Session" },
    { src: training3, title: "Executive Workshop" },
    { src: training4, title: "AI-Powered HR Excellence Conference" },
    { src: training5, title: "Symbiosis Distance Learning Program" },
    { src: training6, title: "Tenneco Corporate Training" },
    { src: training7, title: "Sales Leadership Excellence Program" },
  ];

  const resources = [
    {
      title: "PACER Technique Document",
      type: "Google Doc",
      pages: "Interactive",
      link: "https://docs.google.com/document/d/1u6ewzZc8iV03u2aHhZUGm3zH8p0gLPV4g2MuK1vFMFo/edit?usp=sharing",
    },
    {
      title: "5 Intelligences Framework Whitepaper",
      type: "PDF Guide",
      pages: "24 pages",
      link: "#",
    },
    {
      title: "Leadership Development Playbook",
      type: "eBook",
      pages: "48 pages",
      link: "#",
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

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Photo Gallery</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Training session"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </DialogContent>
          </Dialog>

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
                  >
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
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
                <h3 className="text-2xl font-semibold text-foreground">Connect on LinkedIn</h3>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <p className="text-muted-foreground mb-4">
                  Follow Shankar Mridha for thought leadership and latest insights on corporate transformation.
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
                <a
                  href="https://www.linkedin.com/in/shankarmridha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Follow Shankar Mridha
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHub;
