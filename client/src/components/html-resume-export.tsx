import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, CheckCircle, Loader2, Palette } from 'lucide-react';
import { generateHTMLResumePDF } from '@/lib/html-pdf-generator';

export default function HTMLResumeExport() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      generateHTMLResumePDF();
      
      setIsGenerated(true);
      setTimeout(() => setIsGenerated(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="section" id="resume-download">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="section-title">Enhanced Resume Download</h2>
            <p className="section-subtitle">
              Professional HTML-styled resume with clean typography and modern layout
            </p>
          </div>

          {/* Resume Preview Card */}
          <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 border-2 border-blue-200 dark:border-blue-800 p-8 shadow-xl">
            <div className="flex flex-col items-center space-y-6">
              
              {/* Preview Info */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                  <Palette className="w-5 h-5" />
                  <span className="font-semibold">Two-Column Resume</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Technical Project Coordinator
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                  Compact two-column layout with gradient header, optimized for single-page printing. 
                  Professional typography with space-efficient design perfect for technical roles.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl text-sm">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Two-column compact layout</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Gradient header design</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Single-page optimized</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Professional color scheme</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Space-efficient design</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Print-optimized format</span>
                </div>
              </div>

              {/* Download Button */}
              <div className="w-full max-w-md">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    size="lg"
                    className={`
                      w-full h-12 sm:h-16 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl
                      ${isGenerated 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-blue-600 hover:shadow-2xl'
                      }
                      ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Generating Enhanced Resume...</span>
                      </div>
                    ) : isGenerated ? (
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Downloaded Successfully!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Download Two-Column Resume</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </div>

              {/* Additional Info */}
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-lg">
                <p>
                  Compact two-column resume layout with gradient header, optimized for single-page printing. 
                  Professional styling with efficient space utilization for technical roles.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}