import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="section-spacing bg-gradient-to-b from-transparent to-background/50"
      aria-labelledby="contact-heading"
    >
      <div className="content-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="contact-heading"
            className="font-heading font-semibold text-2xl mb-4 theme-text-primary"
          >
            Let's Connect
          </h2>
          <p className="theme-text-secondary mb-6">
            Ready to collaborate on your next project? Let's discuss how I can help bring your technical vision to life.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="mailto:muhammad.fazeel@email.com"
              className="flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">muhammad.fazeel@email.com</span>
            </a>
            <a
              href="https://linkedin.com/in/muhammad-fazeel"
              className="flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Linkedin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/muhammad-fazeel"
              className="flex items-center justify-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Github className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button
              className="theme-primary-bg text-white px-6 sm:px-8 py-2 sm:py-3 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="theme-surface theme-border px-6 sm:px-8 py-2 sm:py-3 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>

          {/* Availability Status */}
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