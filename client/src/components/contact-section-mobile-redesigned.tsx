import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle, Calendar, Rocket, Star, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammad.fazeel@email.com",
    href: "mailto:muhammad.fazeel@email.com",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/muhammad-fazeel",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/muhammad-fazeel",
    color: "from-gray-600 to-gray-700",
    bgColor: "bg-gray-50 dark:bg-gray-800"
  }
];

export default function ContactSection() {
  const { ref } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="section-reveal section-spacing bg-gradient-to-b from-transparent via-transparent to-background/5"
    >
      <div className="content-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="relative inline-block mb-6">
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
              </motion.div>
              
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl theme-text-primary tracking-tight">
                Let's Connect
              </h2>
              
              {/* Brand element similar to hero */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs md:text-sm">MF</span>
              </div>
            </div>

            {/* Available for opportunities status */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium text-green-600 dark:text-green-400">
                Available for new opportunities online
              </span>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl theme-text-secondary max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4"
            >
              Ready to transform your ideas into digital reality?
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base theme-text-muted max-w-2xl mx-auto px-4"
            >
              I'm passionate about creating innovative solutions that make a real impact. Let's build something extraordinary together.
            </motion.p>
          </motion.div>

          {/* Mobile-First Grid Layout */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
            
            {/* Primary CTA Card - First on Mobile, Right on Desktop */}
            <motion.div 
              variants={itemVariants} 
              className="order-1 lg:order-2 lg:col-span-1 flex justify-center"
            >
              <div className="w-full max-w-sm lg:max-w-none">
                <Card className="theme-surface rounded-3xl border-0 ring-1 ring-black/5 dark:ring-white/10 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-pink-50/90 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <CardContent className="p-6 md:p-8 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="font-heading font-bold text-xl md:text-2xl theme-text-primary mb-3">
                      Start Your Project
                    </h3>
                    
                    <p className="text-sm md:text-base theme-text-muted mb-6 md:mb-8 leading-relaxed">
                      Transform your vision into reality. Let's discuss your next big idea and create something amazing together.
                    </p>

                    <div className="space-y-3 md:space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group min-h-[48px]"
                          asChild
                        >
                          <a href="mailto:muhammad.fazeel@email.com?subject=Project%20Opportunity&body=Hi%20Muhammad,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20project%20opportunity.%0A%0ABest%20regards">
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300" />
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
                          className="w-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group min-h-[48px]"
                          asChild
                        >
                          <a href="https://calendly.com/muhammad-fazeel" target="_blank" rel="noopener noreferrer">
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Schedule Call
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Status indicator */}
                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                          Available now
                        </span>
                      </div>
                      <p className="text-xs theme-text-muted">
                        Typically responds within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Methods - Second on Mobile, Left on Desktop */}
            <motion.div 
              variants={itemVariants} 
              className="order-2 lg:order-1 lg:col-span-2"
            >
              {/* Contact Cards Grid - Mobile Centered */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-full max-w-2xl lg:max-w-none">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <motion.a
                          key={contact.label}
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="group block"
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card className="h-full theme-surface rounded-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:ring-blue-300 dark:hover:ring-blue-600 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                            <CardContent className="p-4 md:p-6">
                              <div className="flex items-center space-x-3 md:space-x-4">
                                <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${contact.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs md:text-sm font-medium theme-text-muted mb-1">
                                    {contact.label}
                                  </div>
                                  <div className="text-sm md:text-base font-semibold theme-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                    {contact.value}
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 theme-text-muted group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Location Card - Mobile Centered */}
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="w-full max-w-2xl lg:max-w-none">
                  <Card className="theme-surface rounded-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center space-x-3 md:space-x-4 text-center sm:text-left">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs md:text-sm font-medium theme-text-muted mb-1">
                            Location
                          </div>
                          <div className="text-sm md:text-base font-semibold theme-text-primary">
                            San Francisco, CA
                          </div>
                          <div className="text-xs md:text-sm theme-text-muted">
                            Available for remote collaboration worldwide
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}