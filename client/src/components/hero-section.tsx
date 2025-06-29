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
      className="section-reveal section-spacing bg-gradient-to-b from-transparent via-transparent to-background/5 pt-32 md:pt-16"
    >
      <div className="content-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
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
                className="font-heading font-black theme-text-primary tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
              >
                Muhammad Fazeel
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="font-heading font-bold theme-text-secondary mb-4"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
              >
                Technical Operations Coordinator
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-blue-600 dark:text-blue-400 font-semibold mb-6"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
              >
                Tech delivery, systems, and support coordination
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="body-base mb-8 theme-text-muted max-w-3xl mx-auto leading-relaxed"
              >
                7 Years of passion in Computer Science & IT. I believe technology should solve real problems and create meaningful connections. Let's build something extraordinary together.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Team Builder
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Innovation Driver
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6"
              >
                <a
                  href="mailto:fazeel.connects@gmail.com"
                  className="group flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-all duration-300 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Email</span>
                </a>
                <a
                  href="tel:+923014004214"
                  className="group flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-all duration-300 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Phone</span>
                </a>
                <a
                  href="https://linkedin.com/in/iamfzii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-all duration-300 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/iamfzii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-all duration-300 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <Github className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      // Focus on the "Start Your Project" card after scrolling
                      setTimeout(() => {
                        const startProjectCard = document.getElementById('start-project-card');
                        if (startProjectCard) {
                          startProjectCard.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                          });
                        }
                      }, 800);
                    }
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Let's Work Together
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
