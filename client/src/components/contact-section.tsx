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

const quickActions = [
  {
    icon: MessageCircle,
    label: "Send Message",
    description: "Get in touch via email",
    href: "mailto:muhammad.fazeel@email.com?subject=Hello%20Muhammad&body=Hi%20Muhammad,%0A%0AI%20would%20like%20to%20discuss...",
    variant: "default" as const
  },
  {
    icon: Calendar,
    label: "Schedule Call",
    description: "Book a consultation",
    href: "https://calendly.com/muhammad-fazeel",
    variant: "outline" as const
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    description: "Let's connect professionally",
    href: "https://linkedin.com/in/muhammad-fazeel",
    variant: "outline" as const
  }
];

export default function ContactSection() {
  const { ref } = useScrollReveal();

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-reveal section-spacing bg-gradient-to-b from-transparent to-background/50"
      aria-labelledby="contact-heading"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            id="contact-heading"
            className="font-heading font-bold heading-lg mb-4 theme-text-primary"
            tabIndex={-1}
          >
            Let's Work Together
          </h2>
          <p className="body-lg theme-text-secondary max-w-3xl mx-auto">
            Ready to collaborate on innovative technical solutions? I'm available for new opportunities 
            and would love to discuss how I can contribute to your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="typography-h3 theme-text-primary mb-6 font-heading">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center space-x-4 p-4 rounded-lg theme-surface border theme-border hover:shadow-lg transition-all duration-300 group focus-visible"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={`Contact via ${item.label}: ${item.value}`}
                        >
                          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            <IconComponent className={`h-5 w-5 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium theme-text-primary group-hover:theme-primary transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm theme-text-secondary">
                              {item.value}
                            </p>
                          </div>
                          {item.href.startsWith('http') && (
                            <ExternalLink className="h-4 w-4 theme-text-muted group-hover:theme-primary transition-colors" />
                          )}
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 p-4 rounded-lg theme-surface border theme-border">
                          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            <IconComponent className={`h-5 w-5 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium theme-text-primary">
                              {item.label}
                            </h4>
                            <p className="text-sm theme-text-secondary">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="typography-h3 theme-text-primary mb-6 font-heading">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  
                  return (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="theme-surface border theme-border hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold theme-text-primary group-hover:theme-primary transition-colors text-sm sm:text-base">
                                {action.label}
                              </h4>
                              <p className="text-xs sm:text-sm theme-text-secondary truncate">
                                {action.description}
                              </p>
                            </div>
                          </div>
                          
                          <Button
                            asChild
                            variant={action.variant}
                            size="sm"
                            className="w-full focus-visible text-xs sm:text-sm"
                          >
                            <a
                              href={action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={action.label}
                              className="flex items-center justify-center gap-1 sm:gap-2"
                            >
                              <span className="truncate">{action.label}</span>
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border theme-border"
            >
              <div className="text-center">
                <h4 className="font-semibold theme-text-primary mb-2">
                  Ready to Start Your Project?
                </h4>
                <p className="text-sm theme-text-secondary mb-4">
                  Let's discuss how I can help bring your technical vision to life.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="btn-primary focus-visible"
                >
                  <a
                    href="mailto:muhammad.fazeel@email.com?subject=Project%20Inquiry&body=Hi%20Muhammad,%0A%0AI%20have%20a%20project%20idea%20and%20would%20like%20to%20discuss..."
                    aria-label="Send project inquiry email"
                  >
                    Start a Conversation
                    <Mail className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full theme-surface border theme-border">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm theme-text-secondary">
              Currently available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}