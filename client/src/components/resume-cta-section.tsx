import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { generateSimpleResumePDF } from "@/lib/simple-pdf-generator";

export default function ResumeCTASection() {
  const { ref } = useScrollReveal();

  const handleDownloadPDF = () => {
    try {
      generateSimpleResumePDF();
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  return (
    <section
      id="resume-download"
      ref={ref}
      className="section-reveal section-spacing bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-950/20"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 dark:from-blue-400/5 dark:to-indigo-400/5" />
              
              <div className="relative text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-heading font-bold heading-lg mb-4 theme-text-primary"
                >
                  Download My Professional Resume
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="body-lg theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Get the complete overview of my 7+ years in Computer Science & IT. 
                  Comprehensive technical skills, proven project experience, and professional achievements in a clean, ATS-friendly format.
                </motion.p>

                {/* Key highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
                >
                  <div className="flex items-center justify-center space-x-3 text-blue-600 dark:text-blue-400">
                    <Star className="w-5 h-5" />
                    <span className="body-sm font-medium">7+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-green-600 dark:text-green-400">
                    <Award className="w-5 h-5" />
                    <span className="body-sm font-medium">50+ Technologies</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-purple-600 dark:text-purple-400">
                    <FileText className="w-5 h-5" />
                    <span className="body-sm font-medium">ATS-Optimized</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    onClick={handleDownloadPDF}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-12 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <Download className="w-6 h-6 mr-3" />
                    Download Resume PDF
                  </Button>
                  
                  <p className="text-xs theme-text-muted mt-4">
                    PDF optimized for ATS systems and recruiters
                  </p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}