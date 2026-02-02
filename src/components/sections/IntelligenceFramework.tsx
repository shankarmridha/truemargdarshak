import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Cpu, MapPin, Sparkles } from "lucide-react";

const IntelligenceFramework = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const intelligences = [
    {
      icon: Brain,
      title: "Human Intelligence",
      subtitle: "IQ",
      description: "Logical decision making, analytical thinking, and strategic reasoning that forms the foundation of executive capability.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      subtitle: "EQ",
      description: "The ability to connect, empathize, and maintain meaningful human relationships that drive organizational culture.",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      subtitle: "AI",
      description: "Leveraging technology and AI capabilities for higher efficiency, innovation, and competitive advantage.",
      color: "bg-violet-500/10 text-violet-600",
    },
    {
      icon: MapPin,
      title: "Local Intelligence",
      subtitle: "LQ",
      description: "Understanding and connecting with the local ecosystem, culture, and market dynamics for contextual leadership.",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Spiritual Intelligence",
      subtitle: "SQ",
      description: "Being spiritually aware with alignment to the higher self, purpose, and values that guide ethical leadership.",
      color: "bg-amber-500/10 text-amber-600",
    },
  ];

  return (
    <section id="framework" className="py-24 bg-background">
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
              Our Framework
            </p>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              The 5 Intelligences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A holistic framework for developing complete leaders who can navigate 
              complexity with wisdom, empathy, and purpose.
            </p>
          </motion.div>

          {/* Intelligence Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligences.map((intel, index) => (
              <motion.div
                key={intel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`group relative bg-card p-8 rounded-xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${intel.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <intel.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {intel.title}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      ({intel.subtitle})
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {intel.description}
                  </p>
                </div>

                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent rounded-tr-xl" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Discover how integrating all 5 intelligences can transform your leadership.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFramework;
