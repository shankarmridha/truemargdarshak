import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Framework", href: "#framework" },
    { label: "Programs", href: "#programs" },
    { label: "Training", href: "#technical" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                True <span className="text-gold">Margdarshak</span>
              </h3>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner in corporate transformation, leadership 
                development, and organizational excellence.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@truemargdarshak.com"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-background/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-background/70">
                <li>Leadership Development</li>
                <li>AI Adoption & Mindset</li>
                <li>Train the Trainer</li>
                <li>Executive Coaching</li>
                <li>Keynote Speaking</li>
                <li>SAP Training</li>
                <li>Cyber Security</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} True Margdarshak. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
