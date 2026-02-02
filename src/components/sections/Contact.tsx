import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
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
              Get In Touch
            </p>
            <h2 className="text-display-sm md:text-display-md mb-6">
              Start Your Transformation
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock the potential of your organization? 
              Let's discuss how we can partner in your journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-foreground/80">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-foreground/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary-foreground/80">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your organization"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-primary-foreground/80">
                      Area of Interest
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leadership">Leadership Development</SelectItem>
                        <SelectItem value="ai">AI Adoption & Mindset</SelectItem>
                        <SelectItem value="trainer">Train the Trainer</SelectItem>
                        <SelectItem value="technical">Technical Training</SelectItem>
                        <SelectItem value="keynote">Keynote Speaking</SelectItem>
                        <SelectItem value="coaching">Executive Coaching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-foreground/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-primary font-semibold py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Book a Call */}
              <div className="bg-gold/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Book a Discovery Call</h3>
                    <p className="text-primary-foreground/70 text-sm">
                      Schedule a 30-minute conversation
                    </p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 mb-6">
                  Prefer a direct conversation? Book a complimentary discovery 
                  call to discuss your specific needs and explore how we can help.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary py-6"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@truemargdarshak.com"
                    className="flex items-center gap-4 text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Email</p>
                      <p>contact@truemargdarshak.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Phone</p>
                      <p>+91 98765 43210</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-primary-foreground/80">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Location</p>
                      <p>Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
