import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Shield, Settings, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechnicalTraining = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offerings = [
    {
      icon: Database,
      title: "SAP Implementation",
      description:
        "End-to-end SAP training and implementation support for enterprise-level digital transformation.",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Comprehensive security awareness and technical training to protect your organization.",
    },
    {
      icon: Settings,
      title: "Enterprise Systems",
      description:
        "Training for ERP, CRM, and other enterprise software implementations.",
    },
    {
      icon: Code,
      title: "Technical Skills",
      description:
        "Customized technical training programs aligned with your technology stack.",
    },
  ];

  return (
    <section id="technical" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-medium tracking-wider uppercase text-sm mb-4">
                Technical Excellence
              </p>
              <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
                Technical Training
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Beyond leadership and transformation, we provide enterprise-level 
                technical training to support your organization's implementation 
                and adoption of critical systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our technical training programs complement our transformation 
                offerings, ensuring that your teams have both the mindset and 
                the skills to succeed with new technologies.
              </p>
              <Button
                className="bg-primary hover:bg-navy-light text-primary-foreground"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discuss Your Training Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Offerings Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <offering.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {offering.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalTraining;
