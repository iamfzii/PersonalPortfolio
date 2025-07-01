import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, CheckCircle } from "lucide-react";
import { generatePrintableResumePDF } from "@/lib/printable-pdf-generator";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PrintableResumeExport() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    setIsComplete(false);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for UX
      generatePrintableResumePDF();
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="resume-download" className="py-16 bg-gradient-to-b from-background/50 to-transparent">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold heading-lg mb-4 theme-text-primary">
            Professional Resume
          </h2>
          <p className="text-base md:text-lg theme-text-muted max-w-2xl mx-auto">
            Download a professionally formatted one-page resume with all technical skills and project details
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 theme-text-primary">
                    One-Page Professional Resume
                  </h3>
                  <p className="theme-text-muted text-sm max-w-2xl mx-auto">
                    Optimized two-column layout featuring actual technical skills from the live website, 
                    key projects, work experience, education, technical demonstrations, and certifications. 
                    Perfectly formatted for ATS systems and print-ready.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <ul className="text-sm theme-text-muted space-y-2 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Actual technical skills with highlighted expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Technical demonstrations and ML projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>Professional formatting and centered skill tags</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>One-page printable format</span>
                    </li>
                  </ul>

                  <Button
                    onClick={handleDownload}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white border-0 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 font-semibold text-base h-auto w-full sm:w-auto"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating PDF...
                      </>
                    ) : isComplete ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Downloaded Successfully!
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download Professional Resume
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}