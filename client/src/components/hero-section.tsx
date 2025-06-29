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
      className="section-reveal pt-24 pb-16 px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="theme-surface rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 card-hover theme-border border">
          <motion.div variants={itemVariants}>
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
              <img 
                src={profilePicture} 
                alt="Muhammad Fazeel - Technical Operations Coordinator" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 theme-text-primary tracking-tight"
          >
            Muhammad Fazeel
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 theme-text-secondary font-medium"
          >
            Technical Operations Coordinator
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8"
          >
            <a
              href="mailto:fazeel@example.com"
              className="flex items-center justify-center sm:justify-start space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">fazeel@example.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center sm:justify-start space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">+1 (234) 567-8900</span>
            </a>
            <a
              href="https://linkedin.com/in/fazeel"
              className="flex items-center justify-center sm:justify-start space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Linkedin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/fazeel"
              className="flex items-center justify-center sm:justify-start space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Github className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}
