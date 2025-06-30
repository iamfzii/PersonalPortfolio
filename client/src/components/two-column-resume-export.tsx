import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, CheckCircle, Loader2, Columns, Layout } from 'lucide-react';
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

  const features = [
    "Professional two-column A4 layout",
    "Clean typography with proper hierarchy", 
    "Full-width hero section with contact info",
    "Left column: Career profile, skills, certifications",
    "Right column: Projects, demos, experience, education",
    "Optimized for ATS and recruiter review",
    "Text-selectable content (not image-based)",
    "Modern design with consistent spacing"
  ];

  return (
    <section className="py-16 md:py-24 relative" id="two-column-resume">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 mb-6 shadow-lg">
            <Layout className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold theme-text-primary mb-4">
            Two-Column Professional Resume
          </h2>
          
          <p className="text-lg theme-text-secondary max-w-2xl mx-auto leading-relaxed">
            Download a modern, recruiter-optimized two-column resume format with clean layout and professional design
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
                <Columns className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold theme-text-primary mb-2">
                Two-Column Layout Resume
              </h3>
              
              <p className="theme-text-secondary text-base">
                Professional A4 format with optimized two-column design
              </p>
              
              <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  New Enhanced Layout
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Features List */}
              <div className="space-y-4 px-4 md:px-0">
                <h3 className="font-heading font-semibold text-lg theme-text-primary mb-4">
                  Layout Features:
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
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm theme-text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <div className="px-4 md:px-0">
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
                      w-full h-16 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 shadow-xl
                      ${isGenerated 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                        : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:shadow-2xl'
                      }
                      ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Generating Resume...</span>
                      </div>
                    ) : isGenerated ? (
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5" />
                        <span>Downloaded Successfully!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5" />
                        <span>Download Two-Column Resume</span>
                      </div>
                    )}
                  </Button>
                </motion.div>

                <div className="mt-4 text-center">
                  <p className="text-xs theme-text-secondary">
                    PDF Format • A4 Size • ATS Optimized
                  </p>
                </div>
              </div>
            </div>

            {/* Layout Preview */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h4 className="font-heading font-semibold text-lg theme-text-primary mb-6 text-center">
                Layout Structure Preview
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="font-semibold theme-text-primary">Left Column (40%)</div>
                  <div className="space-y-2 pl-4 border-l-2 border-emerald-200 dark:border-emerald-700">
                    <div className="theme-text-secondary">• Career Profile</div>
                    <div className="theme-text-secondary">• Technical Skills (categorized)</div>
                    <div className="theme-text-secondary">• Professional Certifications</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="font-semibold theme-text-primary">Right Column (60%)</div>
                  <div className="space-y-2 pl-4 border-l-2 border-emerald-200 dark:border-emerald-700">
                    <div className="theme-text-secondary">• Featured Projects</div>
                    <div className="theme-text-secondary">• Technical Demonstrations</div>
                    <div className="theme-text-secondary">• Professional Experience</div>
                    <div className="theme-text-secondary">• Education Background</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="text-center">
                  <div className="font-semibold theme-text-primary mb-2">Full-Width Hero Section</div>
                  <div className="text-sm theme-text-secondary">
                    Name • Title • Tagline • Summary • Portfolio URL • Contact Information
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}