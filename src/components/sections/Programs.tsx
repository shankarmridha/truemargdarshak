import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Bot, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      icon: Users,
      title: "Leadership Development",
      tagline: "Building Future-Ready Leaders",
      description:
        "Comprehensive programs designed to develop executive presence, strategic thinking, and the ability to lead through uncertainty and change.",
      features: [
        "Executive coaching and mentoring",
        "Strategic leadership workshops",
        "Change management mastery",
        "Decision-making frameworks",
      ],
    },
    {
      icon: Bot,
      title: "AI Adoption & Mindset",
      tagline: "Embracing AI Transformation",
      description:
        "Help your organization navigate the AI revolution with confidence. We focus on building the right mindset and capabilities for sustainable AI integration.",
      features: [
        "AI readiness assessment",
        "Change management for AI",
        "Building AI-first culture",
        "Practical AI implementation",
      ],
    },
    {
      icon: GraduationCap,
      title: "Train the Trainer",
      tagline: "Empowering Internal Capabilities",
      description:
        "Transform your internal training function into a strategic asset. We equip your trainers with the skills and methodologies to deliver impactful learning experiences.",
      features: [
        "Training design & delivery",
        "Facilitation excellence",
        "Learning experience design",
        "Train-the-trainer certification",
      ],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-primary text-primary-foreground">
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
              Focus Areas
            </p>
            <h2 className="text-display-sm md:text-display-md mb-6">
              Program Spotlight
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Three key areas where we create the most impact for organizations 
              seeking transformational growth.
            </p>
          </motion.div>

          {/* Program Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gold text-sm font-medium mb-4">{program.tagline}</p>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-primary-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="text-gold hover:text-gold-light hover:bg-gold/10 p-0 group"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
