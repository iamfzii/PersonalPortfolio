import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { generateProfessionalResumePDF } from "@/lib/professional-pdf-generator";
import { useState } from "react";

export default function ProfessionalResumeExport() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for UX
      generateProfessionalResumePDF();
      setIsGenerated(true);
      setTimeout(() => setIsGenerated(false), 3000);
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const features = [
    "✓ A4 format, recruiter-ready",
    "✓ ATS-optimized text format", 
    "✓ Professional typography & layout",
    "✓ All sections from live portfolio",
    "✓ Clickable links included",
    "✓ Print-safe design"
  ];

  return (
    <section id="resume-export" className="section-spacing-sm bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 md:p-12 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl theme-text-primary mb-4">
                Professional Resume Download
              </h2>
              
              <p className="text-base md:text-lg theme-text-muted max-w-2xl mx-auto mb-6">
                Get a professionally formatted PDF resume with all the content from this portfolio website - ready for job applications and international opportunities.
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium theme-text-secondary ml-2">
                  Professional Quality
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Features List */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg theme-text-primary mb-4">
                  What's Included:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm theme-text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    size="lg"
                    className={`
                      w-full h-14 rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl
                      ${isGenerated 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-2xl'
                      }
                      ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Generating PDF...</span>
                      </div>
                    ) : isGenerated ? (
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5" />
                        <span>Downloaded Successfully!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5" />
                        <span>Download Professional Resume</span>
                      </div>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs theme-text-muted mt-4 leading-relaxed">
                  📄 A4 format PDF • 🎯 ATS-friendly • 🔗 Includes portfolio link<br />
                  📧 fazeel.connects@gmail.com • 📱 +92 301 400 4214
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm theme-text-muted">
                  This resume contains authentic content sourced directly from the live portfolio website at{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    muhammadfazeel.vercel.app
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}