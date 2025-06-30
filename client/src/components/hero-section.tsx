import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Download, MessageCircle, Heart, Zap, Target, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useOptimizedScrollReveal } from "@/hooks/use-optimized-scroll-reveal";
import { generateProfessionalResumePDF } from "@/lib/professional-pdf-generator";
import profilePicture from "@assets/profile picture_1751053870878.jpg";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { elementRef, animationClass } = useOptimizedScrollReveal({
    enableInstantLoad: true,
    animationClass: 'animate-fade-in-up-fast'
  });
  const [typewriterText, setTypewriterText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "7+ Years of passion in Computer Science & IT. I believe technology should solve real problems and create meaningful connections. Let's build something extraordinary together.";

  const handleDownloadPDF = () => {
    try {
      generateProfessionalResumePDF();
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  // Typewriter effect
  useEffect(() => {
    // Start typing after a brief delay
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, 50); // 50ms per character for smooth typing

      return () => clearInterval(timer);
    }, 1000); // Start after 1 second

    return () => clearTimeout(startDelay);
  }, []);

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
      ref={elementRef}
      className={`section-reveal section-spacing bg-gradient-to-b from-transparent via-transparent to-background/5 pt-32 md:pt-16 content-section fast-load ${animationClass}`}
    >
      <div className="content-container">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 lg:p-16 xl:p-20">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="relative mx-auto mb-8 group">
                  {/* Tech grid background */}
                  <div className="absolute inset-0 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/30 dark:border-blue-500/30 backdrop-blur-sm"></div>
                    {/* Floating tech elements */}
                    <div className="absolute top-4 left-6 w-2 h-2 bg-blue-400 rounded-sm opacity-60 tech-pulse"></div>
                    <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 tech-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-6 left-8 w-2 h-2 bg-cyan-400 rounded-sm opacity-50 tech-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60 tech-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Corner tech details */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-blue-400 opacity-40"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-purple-400 opacity-40"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400 opacity-40"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-green-400 opacity-40"></div>
                  </div>
                  
                  {/* Profile picture container */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <img 
                      src={profilePicture} 
                      alt="Muhammad Fazeel - Technical Operations Coordinator" 
                      className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tech badge */}
                  <motion.div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white font-bold text-xs">MF</span>
                  </motion.div>
                  
                  {/* Online status */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full border border-white shadow-sm tech-pulse">
                    <div className="w-full h-full bg-green-500 rounded-full opacity-30"></div>
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
              >Where Strategy Meets Technical Execution</motion.p>

              <motion.p
                variants={itemVariants}
                className="body-base mb-8 theme-text-muted max-w-3xl mx-auto leading-relaxed min-h-[4rem]"
              >
                {typewriterText}
                {!isTypingComplete && (
                  <span className="animate-pulse text-blue-500 font-bold ml-1">|</span>
                )}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-xs sm:max-w-md mx-auto"
              >
                <motion.div 
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="px-2 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 rounded-full text-xs font-semibold shadow-lg transition-all duration-300">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 animate-pulse" />
                    Project Leader
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 shimmer" />
                  </Badge>
                </motion.div>
                
                <motion.div 
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="px-2 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 rounded-full text-xs font-semibold shadow-lg transition-all duration-300">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 heartbeat" />
                    Process Optimizer
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 shimmer" />
                  </Badge>
                </motion.div>
                
                <motion.div 
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="px-2 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 rounded-full text-xs font-semibold shadow-lg transition-all duration-300">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 animate-bounce" />
                    Operations Expert
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 shimmer" />
                  </Badge>
                </motion.div>
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
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
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
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-12 py-5 text-lg rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform border-0"
                  >
                    <MessageCircle className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Let's Work Together</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Star className="absolute top-1 right-2 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 px-12 py-5 text-lg font-bold rounded-3xl transition-all duration-500 hover:shadow-xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-sm"
                  >
                    <Download className="w-6 h-6 mr-3 group-hover:animate-bounce transition-transform duration-300" />
                    <span className="relative z-10">Download Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
