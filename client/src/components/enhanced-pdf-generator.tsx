import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Loader2 } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Muhammad Fazeel",
    title: "Technical Operations Coordinator",
    email: "muhammad.fazeel@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/muhammad-fazeel",
    github: "github.com/muhammad-fazeel"
  },
  summary: "Technical Operations Coordinator with 7 years of Computer Science & IT experience specializing in full-stack applications, AI workflows, and cloud-based solutions. Proven track record in managing complex technical systems, optimizing operational processes, and delivering scalable technology solutions.",
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript/TypeScript", "SQL", "Java", "C++"]
    },
    {
      category: "Web Technologies",
      items: ["React", "Node.js", "Express", "Next.js", "HTML5/CSS3"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Firebase", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Trello", "Jira", "Slack", "VS Code"]
    }
  ],
  experience: [
    {
      title: "Technical Operations Coordinator",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led technical operations for 50+ enterprise clients, improving system reliability by 40%",
        "Implemented automated monitoring systems reducing downtime by 60%",
        "Coordinated cross-functional teams to deliver 15+ major system upgrades",
        "Developed operational procedures improving team efficiency by 35%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovation Labs",
      period: "2019 - 2021",
      location: "San Francisco, CA",
      achievements: [
        "Built 12+ responsive web applications using React and Node.js",
        "Optimized database queries improving application performance by 50%",
        "Collaborated with UI/UX team to enhance user experience",
        "Mentored 3+ junior developers in modern web technologies"
      ]
    }
  ],
  projects: [
    {
      title: "Enterprise Dashboard Platform",
      description: "Comprehensive analytics platform for enterprise clients",
      technologies: ["React", "Node.js", "PostgreSQL", "Firebase"],
      highlights: [
        "Real-time data visualization for 100+ metrics",
        "Scalable architecture supporting 10K+ concurrent users",
        "Advanced filtering and export capabilities"
      ]
    },
    {
      title: "AI Workflow Automation",
      description: "Machine learning pipeline for automated business processes",
      technologies: ["Python", "TensorFlow", "Docker", "AWS"],
      highlights: [
        "Reduced manual processing time by 70%",
        "Implemented ML models with 95% accuracy",
        "Cloud-native deployment with auto-scaling"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      location: "San Francisco, CA"
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022"
    }
  ]
};

export default function EnhancedPDFGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { theme, fontCombination } = useTheme();
  const hiddenResumeRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!hiddenResumeRef.current) return;

    setIsGenerating(true);
    
    try {
      // Show the hidden resume temporarily for rendering
      const hiddenElement = hiddenResumeRef.current;
      hiddenElement.style.display = 'block';
      hiddenElement.style.position = 'absolute';
      hiddenElement.style.left = '-9999px';
      hiddenElement.style.top = '0';
      hiddenElement.style.width = '210mm'; // A4 width
      hiddenElement.style.background = 'white';
      hiddenElement.style.padding = '20mm';

      // Wait for fonts to load
      await document.fonts.ready;

      // Generate canvas from HTML
      const canvas = await html2canvas(hiddenElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123, // A4 height in pixels at 96 DPI
      });

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Save the PDF
      pdf.save(`${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);

      // Hide the element again
      hiddenElement.style.display = 'none';
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
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

      {/* Hidden resume for PDF generation */}
      <div
        ref={hiddenResumeRef}
        className="print-optimized"
        style={{ 
          display: 'none',
          fontFamily: fontCombination === 'classic' ? 'Playfair Display, serif' : 
                     fontCombination === 'tech' ? 'Space Grotesk, sans-serif' :
                     fontCombination === 'elegant' ? 'Montserrat, sans-serif' :
                     fontCombination === 'bold' ? 'Poppins, sans-serif' :
                     fontCombination === 'minimal' ? 'Inter, sans-serif' : 'Inter, sans-serif'
        }}
      >
        {/* PDF Header */}
        <header style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#1a1a1a' }}>
            {resumeData.personalInfo.name}
          </h1>
          <h2 style={{ fontSize: '18px', fontWeight: '500', margin: '0 0 15px 0', color: '#666' }}>
            {resumeData.personalInfo.title}
          </h2>
          <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
            <div>{resumeData.personalInfo.email} | {resumeData.personalInfo.phone}</div>
            <div>{resumeData.personalInfo.location}</div>
            <div>{resumeData.personalInfo.linkedin} | {resumeData.personalInfo.github}</div>
          </div>
        </header>

        {/* Professional Summary */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
            {resumeData.summary}
          </p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Technical Skills
          </h3>
          {resumeData.skills.map((skillCategory, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: '#333' }}>{skillCategory.category}:</strong>
              <span style={{ fontSize: '14px', color: '#555', marginLeft: '8px' }}>
                {skillCategory.items.join(', ')}
              </span>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Professional Experience
          </h3>
          {resumeData.experience.map((job, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                    {job.title}
                  </h4>
                  <div style={{ fontSize: '14px', color: '#666', margin: '2px 0' }}>
                    {job.company} | {job.location}
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                  {job.period}
                </div>
              </div>
              <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} style={{ fontSize: '14px', color: '#333', marginBottom: '4px', lineHeight: '1.5' }}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Key Projects
          </h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 3px 0', color: '#1a1a1a' }}>
                {project.title}
              </h4>
              <p style={{ fontSize: '13px', color: '#666', margin: '0 0 5px 0' }}>
                {project.description}
              </p>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </div>
              <ul style={{ margin: '0', paddingLeft: '16px' }}>
                {project.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex} style={{ fontSize: '13px', color: '#333', marginBottom: '2px' }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {edu.institution} | {edu.location}
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#1a1a1a', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            Certifications
          </h3>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>
                  {cert.title}
                </span>
                <span style={{ fontSize: '14px', color: '#666', marginLeft: '8px' }}>
                  - {cert.issuer}
                </span>
              </div>
              <span style={{ fontSize: '14px', color: '#666' }}>
                {cert.year}
              </span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}