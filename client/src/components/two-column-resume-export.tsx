import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, CheckCircle, Loader2 } from 'lucide-react';
import { generateTwoColumnPDF } from '@/lib/two-column-pdf-generator';

export default function TwoColumnResumeExport() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 800));
      
      generateTwoColumnPDF();
      
      setIsGenerated(true);
      setTimeout(() => setIsGenerated(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-16 md:py-24 relative" id="resume-download">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 mb-6 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold theme-text-primary mb-4">
            Resume Download
          </h2>
          
          <p className="text-lg theme-text-secondary max-w-2xl mx-auto leading-relaxed">
            Download professional resume in PDF format, optimized for ATS systems and recruiter review
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-12 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold theme-text-primary mb-2">
                Professional Resume PDF
              </h3>
              
              <p className="theme-text-secondary text-base">
                Download professional resume optimized for ATS systems
              </p>
              
              <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Ready to Download
                </span>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-md"
              >
                <Button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  size="lg"
                  className={`
                    w-full h-12 sm:h-16 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl px-4 sm:px-6
                    ${isGenerated 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:shadow-2xl'
                    }
                    ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}
                  `}
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span className="hidden sm:inline">Generating Resume...</span>
                      <span className="sm:hidden">Generating...</span>
                    </div>
                  ) : isGenerated ? (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Downloaded Successfully!</span>
                      <span className="sm:hidden">Downloaded!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Download Resume PDF</span>
                      <span className="sm:hidden">Download</span>
                    </div>
                  )}
                </Button>
              </motion.div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs theme-text-secondary">
                PDF Format • A4 Size • ATS Optimized
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}