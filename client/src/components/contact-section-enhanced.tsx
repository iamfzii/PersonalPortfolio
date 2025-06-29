import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink, MessageCircle, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammad.fazeel@email.com",
    href: "mailto:muhammad.fazeel@email.com",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-green-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-fazeel",
    href: "https://linkedin.com/in/muhammad-fazeel",
    color: "text-blue-600"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/muhammad-fazeel",
    href: "https://github.com/muhammad-fazeel",
    color: "text-gray-700 dark:text-gray-300"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
    color: "text-red-500"
  }
];

export default function ContactSection() {
  const { ref } = useScrollReveal();

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-reveal section-spacing-sm section-accent border-t border-slate-200 dark:border-slate-700"
      aria-labelledby="contact-heading"
    >
      <div className="content-container">
        <div className="section-header">
          <h2 className="section-title text-slate-900 dark:text-white">
            Ready to Connect?
          </h2>
          <p className="section-subtitle">
            Open to remote opportunities and ready to contribute to your next technical project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 lg:space-y-6 text-center lg:text-left"
          >
            <h3 className="font-heading font-semibold heading-sm theme-text-primary mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-xl theme-surface border-0 ring-1 ring-black/5 dark:ring-white/10 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:ring-blue-500/20 hover:scale-105"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:scale-110 transition-transform">
                          <IconComponent className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="font-semibold theme-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors body-lg">
                            {item.label}
                          </h4>
                          <p className="body-sm sm:body-base theme-text-secondary break-all sm:break-words">
                            {item.value}
                          </p>
                        </div>
                        {item.href.startsWith('http') && (
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 theme-text-muted group-hover:text-blue-500 transition-colors" />
                        )}
                      </a>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-xl theme-surface border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
                          <IconComponent className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="font-semibold theme-text-primary body-lg">
                            {item.label}
                          </h4>
                          <p className="body-sm sm:body-base theme-text-secondary">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="enhanced-card">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Let's Work Together
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Open to remote opportunities and ready to contribute to innovative technical solutions.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <Button 
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <a
                      href="mailto:muhammad.fazeel@email.com?subject=Project%20Inquiry&body=Hi%20Muhammad,%0A%0AI%20would%20like%20to%20discuss..."
                      className="flex items-center justify-center min-h-[56px]"
                    >
                      <Mail className="w-6 h-6 mr-3" />
                      Send Message
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                  >
                    <a
                      href="https://linkedin.com/in/muhammad-fazeel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center min-h-[56px]"
                    >
                      <Linkedin className="w-6 h-6 mr-3" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full theme-surface border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="body-base theme-text-secondary font-medium">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}