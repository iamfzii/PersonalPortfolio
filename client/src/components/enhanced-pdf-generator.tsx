import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { generateProfessionalResumePDF } from "@/lib/professional-pdf-generator";
import { useState } from "react";

export default function EnhancedPDFGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      generateProfessionalResumePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      className="btn-primary focus-visible"
      size="lg"
      aria-label="Download resume as PDF"
    >
      {isGenerating ? (
        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
      ) : (
        <Download className="h-5 w-5 mr-2" />
      )}
      {isGenerating ? 'Generating PDF...' : 'Download Resume'}
    </Button>
  );
}