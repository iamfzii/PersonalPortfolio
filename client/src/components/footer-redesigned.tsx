import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    href: "mailto:muhammad.fazeel@email.com",
    label: "Email"
  },
  {
    icon: Phone,
    href: "tel:+15551234567",
    label: "Phone"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammad-fazeel",
    label: "LinkedIn"
  },
  {
    icon: Github,
    href: "https://github.com/muhammad-fazeel",
    label: "GitHub"
  }
];

const quickLinks = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 border-t border-gray-200 dark:border-gray-800">
      <div className="content-container">
        <div className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">MF</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl theme-text-primary">
                    Muhammad Fazeel
                  </h3>
                  <p className="text-sm theme-text-secondary">
                    Technical Operations Coordinator
                  </p>
                </div>
              </div>
              
              <p className="text-sm md:text-base theme-text-muted leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions that make a real impact. 
                Combining 7 years of expertise in Computer Science & IT to deliver exceptional results.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="w-4 h-4 theme-text-secondary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-heading font-semibold text-lg theme-text-primary">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                    className="block text-sm theme-text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact CTA */}
            <div className="space-y-6">
              <h4 className="font-heading font-semibold text-lg theme-text-primary">
                Let's Connect
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs theme-text-muted">Available for opportunities</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm theme-text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>

                <Button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-sm rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-xs md:text-sm theme-text-muted text-center md:text-left">
                © 2025 Muhammad Fazeel. Crafted with{" "}
                <Heart className="w-4 h-4 inline text-red-500 mx-1" />{" "}
                using modern web technologies.
              </p>
              
              <div className="flex items-center space-x-6 text-xs theme-text-muted">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>React & TypeScript</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Framer Motion</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}