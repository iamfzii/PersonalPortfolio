import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Download, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { generateSimpleResumePDF } from "@/lib/simple-pdf-generator";
import profilePicture from "@assets/profile picture_1751053870878.jpg";

export default function HeroSection() {
  const { ref } = useScrollReveal();

  const handleDownloadPDF = () => {
    try {
      generateSimpleResumePDF();
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="section-reveal section-spacing bg-gradient-to-b from-transparent via-transparent to-background/5"
    >
      <div className="content-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 overflow-hidden">
            <div className="p-8 sm:p-12 md:p-16 lg:p-20">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="relative mx-auto mb-8">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-800">
                    <img 
                      src={profilePicture} 
                      alt="Muhammad Fazeel - Technical Operations Coordinator" 
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  {/* Subtle brand element */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">MF</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-heading font-bold heading-xl mb-4 theme-text-primary"
              >
                Muhammad Fazeel
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="body-lg mb-8 theme-text-secondary font-medium max-w-2xl mx-auto"
              >
                Technical Operations Coordinator
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="body-base mb-12 theme-text-muted max-w-3xl mx-auto leading-relaxed"
              >
                7 years of Computer Science & IT experience with expertise in technical operations, 
                system optimization, and cross-functional team leadership.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              >
                <a
                  href="mailto:fazeel@example.com"
                  className="group flex items-center justify-center space-x-3 theme-text-muted hover:theme-primary transition-all duration-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="body-sm font-medium">Email</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="group flex items-center justify-center space-x-3 theme-text-muted hover:theme-primary transition-all duration-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="body-sm font-medium">Phone</span>
                </a>
                <a
                  href="https://linkedin.com/in/fazeel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 theme-text-muted hover:theme-primary transition-all duration-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="body-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/fazeel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 theme-text-muted hover:theme-primary transition-all duration-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Github className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="body-sm font-medium">GitHub</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  onClick={handleDownloadPDF}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
