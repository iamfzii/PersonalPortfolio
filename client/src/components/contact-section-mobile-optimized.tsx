import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink, MessageCircle, Calendar, Heart, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fazeel.connects@gmail.com",
    href: "mailto:fazeel.connects@gmail.com",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03014004214",
    href: "tel:+923014004214",
    color: "text-green-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iamfzii",
    href: "https://www.linkedin.com/in/iamfzii/",
    color: "text-blue-600"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/iamfzii",
    href: "https://github.com/iamfzii/",
    color: "text-gray-700 dark:text-gray-300"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
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
      className="section-reveal section-spacing-sm bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
    >
      <div className="content-container">
        {/* Enhanced Header with Emotional Appeal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="relative inline-block mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
            
            <h2 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl theme-text-primary">
              Ready to Connect
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Let's turn your vision into reality. I'm passionate about creating solutions that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="mt-4"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-full">
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Available for new opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Contact Information - Mobile Centered */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 order-2 lg:order-1"
          >
            <div className="text-center lg:text-left">
              <h3 className="font-heading font-semibold text-xl md:text-2xl theme-text-primary mb-3 md:mb-4">
                Get in Touch
              </h3>
              <p className="text-sm md:text-base theme-text-secondary leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="flex items-center justify-center lg:justify-start space-x-3 p-3 md:p-4 rounded-xl theme-surface hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-blue-200 dark:hover:border-blue-800 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 hover:scale-105"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`p-2 rounded-lg ${contact.color.includes('blue') ? 'bg-blue-50 dark:bg-blue-900/30' : contact.color.includes('green') ? 'bg-green-50 dark:bg-green-900/30' : contact.color.includes('red') ? 'bg-red-50 dark:bg-red-900/30' : 'bg-gray-50 dark:bg-gray-800'} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${contact.color}`} />
                        </div>
                        <div className="flex-1 min-w-0 text-center lg:text-left">
                          <div className="text-xs md:text-sm font-medium theme-text-muted">
                            {contact.label}
                          </div>
                          <div className="text-sm md:text-base theme-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                            {contact.value}
                          </div>
                        </div>
                        {contact.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 theme-text-muted group-hover:text-blue-500 transition-colors flex-shrink-0" />
                        )}
                      </a>
                    ) : (
                      <div className="flex items-center justify-center lg:justify-start space-x-3 p-3 md:p-4 rounded-xl theme-surface backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                        <div className={`p-2 rounded-lg ${contact.color.includes('red') ? 'bg-red-50 dark:bg-red-900/30' : 'bg-gray-50 dark:bg-gray-800'}`}>
                          <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${contact.color}`} />
                        </div>
                        <div className="flex-1 min-w-0 text-center lg:text-left">
                          <div className="text-xs md:text-sm font-medium theme-text-muted">
                            {contact.label}
                          </div>
                          <div className="text-sm md:text-base theme-text-primary">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action - Mobile Centered */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <Card className="theme-surface rounded-2xl shadow-xl border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-8 backdrop-blur-sm bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-0 space-y-4 md:space-y-6">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg"
                  >
                    <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="font-heading font-semibold text-xl md:text-2xl theme-text-primary mb-2">
                    Let's Work Together
                  </h3>
                  <p className="text-sm md:text-base theme-text-secondary">
                    Ready to bring your ideas to life? I'm just one message away!
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full h-12 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group text-sm md:text-base font-semibold"
                      asChild
                    >
                      <a href="mailto:muhammad.fazeel@email.com?subject=Project%20Opportunity&body=Hi%20Muhammad,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20project%20opportunity.%0A%0ABest%20regards">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Send Message
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full h-12 md:h-14 border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group text-sm md:text-base font-semibold"
                      asChild
                    >
                      <a href="https://calendly.com/iamfzii/" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        Schedule Call
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                      Online now
                    </span>
                  </div>
                  <p className="text-xs md:text-sm theme-text-muted">
                    Typical response time: Within 4 hours
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}