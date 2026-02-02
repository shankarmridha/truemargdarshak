import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Compass } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every program is designed with clear business outcomes in mind",
    },
    {
      icon: Users,
      title: "Executive Focus",
      description: "Tailored specifically for C-Suite and senior leadership",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of measurable transformation across industries",
    },
    {
      icon: Compass,
      title: "Holistic Approach",
      description: "Integrating multiple intelligences for complete development",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
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
              About Us
            </p>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              True Margdarshak
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted guide — "Margdarshak" — in navigating the complex landscape 
              of corporate transformation. We partner with organizations to develop 
              leaders who can thrive in an era of constant change.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations and their leaders with the wisdom of the 
                5 Intelligences — creating a harmonious blend of Human insight, 
                Emotional depth, Artificial capability, Local awareness, and 
                Spiritual alignment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true leadership excellence comes from integrating 
                these intelligences, enabling executives to make decisions that 
                are not only smart but also wise, connected, and purposeful.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement begins with understanding your unique challenges 
                and aspirations. We then craft customized programs that blend 
                cutting-edge methodologies with timeless wisdom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's keynote speaking, corporate training, or one-on-one 
                coaching, our programs are designed to create lasting impact — 
                transforming not just skills, but mindsets.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
