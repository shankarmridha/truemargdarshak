import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "The leadership development program transformed how our executive team approaches decision-making. The 5 Intelligences framework has become part of our organizational DNA.",
      author: "Rajesh Kumar",
      role: "CEO",
      company: "Fortune 500 Manufacturing Company",
    },
    {
      quote:
        "True Margdarshak helped us navigate our AI transformation journey with clarity and confidence. Their blend of technical expertise and human insight is remarkable.",
      author: "Priya Sharma",
      role: "CHRO",
      company: "Leading Financial Services Firm",
    },
    {
      quote:
        "The Train the Trainer program elevated our internal learning function from good to exceptional. Our trainers now deliver with confidence and impact.",
      author: "Amit Patel",
      role: "VP Learning & Development",
      company: "Global IT Services Provider",
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "500+", label: "Leaders Trained" },
    { value: "50+", label: "Organizations Served" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
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
              Success Stories
            </p>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from the leaders and organizations we've had the privilege 
              to work with.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="bg-card p-8 rounded-xl shadow-elegant relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-gold" />
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 pr-12">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gold">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
