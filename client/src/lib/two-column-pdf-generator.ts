import jsPDF from 'jspdf';

export interface TwoColumnResumeData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
    portfolioUrl: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  careerProfile: string;
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
  }[];
  demonstrations: {
    web: {
      title: string;
      tools: string[];
      purpose: string;
    }[];
    ml: {
      title: string;
      tools: string[];
      purpose: string;
    }[];
  };
  experience: {
    title: string;
    company: string;
    period: string;
    achievements: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
}

const twoColumnResumeData: TwoColumnResumeData = {
  personalInfo: {
    name: "Muhammad Fazeel",
    title: "Technical Operations Coordinator",
    tagline: "Transforming ideas into digital solutions",
    summary: "Technical Operations Coordinator with 7 years of Computer Science & IT experience. Specialized in system optimization, technical support, and cross-functional team leadership.",
    portfolioUrl: "https://fazeel-resume.replit.app",
    email: "fazeel.connects@gmail.com",
    phone: "03014004214",
    location: "Lahore, Pakistan",
    linkedin: "linkedin.com/in/iamfzii",
    github: "github.com/iamfzii"
  },
  careerProfile: "Experienced Technical Operations Coordinator with a proven track record in system administration, technical support, and project management. Skilled in optimizing operational workflows, implementing technical solutions, and leading cross-functional teams to achieve organizational objectives.",
  skills: [
    {
      category: "Core Technologies",
      items: ["Python", "JavaScript", "React", "Node.js", "Firebase", "MongoDB"]
    },
    {
      category: "Development Tools",
      items: ["Git", "Docker", "AWS", "Linux", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Operations & Management",
      items: ["Technical Support", "System Administration", "Project Management", "Team Leadership"]
    },
    {
      category: "Specialized Skills",
      items: ["Machine Learning", "Data Analysis", "Process Optimization", "Quality Assurance"]
    }
  ],
  certifications: [
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google Career Certificates",
      year: "2023"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2022"
    },
    {
      title: "Project Management Fundamentals",
      issuer: "LinkedIn Learning",
      year: "2022"
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, product management, and payment integration",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team coordination features",
      techStack: ["JavaScript", "Firebase", "Material-UI"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence and data visualization",
      techStack: ["Python", "Flask", "Chart.js", "PostgreSQL"]
    },
    {
      title: "Mobile Inventory App",
      description: "Cross-platform mobile application for inventory management and tracking",
      techStack: ["React Native", "Firebase", "Redux"]
    }
  ],
  demonstrations: {
    web: [
      {
        title: "Interactive Web Components",
        tools: ["React", "TypeScript", "Tailwind CSS"],
        purpose: "Modern UI/UX implementations"
      },
      {
        title: "Real-time Dashboard",
        tools: ["Next.js", "WebSocket", "Chart.js"],
        purpose: "Live data visualization"
      },
      {
        title: "API Integration Suite",
        tools: ["Node.js", "Express", "MongoDB"],
        purpose: "Backend service architecture"
      }
    ],
    ml: [
      {
        title: "Predictive Analytics Model",
        tools: ["Python", "Scikit-learn", "Pandas"],
        purpose: "Business forecasting solution"
      },
      {
        title: "Image Classification System",
        tools: ["TensorFlow", "OpenCV", "Flask"],
        purpose: "Computer vision application"
      },
      {
        title: "Natural Language Processing",
        tools: ["NLTK", "spaCy", "Transformers"],
        purpose: "Text analysis and insights"
      }
    ]
  },
  experience: [
    {
      title: "Technical Operations Coordinator",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      achievements: [
        "Led technical support operations for 500+ clients with 98% satisfaction rate",
        "Implemented automated workflows reducing response time by 40%",
        "Coordinated cross-functional teams on 15+ successful project deliveries"
      ]
    },
    {
      title: "System Administrator",
      company: "Digital Systems Ltd.",
      period: "2019 - 2021",
      achievements: [
        "Managed server infrastructure supporting 200+ concurrent users",
        "Reduced system downtime by 60% through proactive monitoring",
        "Streamlined deployment processes using CI/CD pipelines"
      ]
    },
    {
      title: "Technical Support Specialist",
      company: "InfoTech Services",
      period: "2018 - 2019",
      achievements: [
        "Resolved 95% of technical issues within SLA requirements",
        "Developed comprehensive documentation improving team efficiency",
        "Trained 8 junior technicians on best practices and procedures"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Punjab",
      period: "2014 - 2018"
    }
  ]
};

export function generateTwoColumnPDF(): void {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const leftColumnWidth = 75; // 40% of usable width
  const rightColumnWidth = 105; // 60% of usable width
  const columnGap = 5;
  
  let currentY = margin;
  
  // Set font
  pdf.setFont('helvetica');
  
  // Helper function to add text with word wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10): number => {
    pdf.setFontSize(fontSize);
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y);
    return y + (lines.length * fontSize * 0.35);
  };
  
  // Helper function to check if we need a new page
  const checkNewPage = (requiredHeight: number): number => {
    if (currentY + requiredHeight > pageHeight - margin) {
      pdf.addPage();
      return margin;
    }
    return currentY;
  };
  
  // HERO SECTION (Full Width)
  // Name
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59); // slate-800
  const nameWidth = pdf.getTextWidth(twoColumnResumeData.personalInfo.name);
  pdf.text(twoColumnResumeData.personalInfo.name, (pageWidth - nameWidth) / 2, currentY);
  currentY += 8;
  
  // Title
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(71, 85, 105); // slate-600
  const titleWidth = pdf.getTextWidth(twoColumnResumeData.personalInfo.title);
  pdf.text(twoColumnResumeData.personalInfo.title, (pageWidth - titleWidth) / 2, currentY);
  currentY += 6;
  
  // Tagline
  pdf.setFontSize(11);
  pdf.setTextColor(100, 116, 139); // slate-500
  const taglineWidth = pdf.getTextWidth(twoColumnResumeData.personalInfo.tagline);
  pdf.text(twoColumnResumeData.personalInfo.tagline, (pageWidth - taglineWidth) / 2, currentY);
  currentY += 8;
  
  // Summary
  pdf.setFontSize(10);
  pdf.setTextColor(51, 65, 85); // slate-700
  currentY = addWrappedText(twoColumnResumeData.personalInfo.summary, margin, currentY, pageWidth - 2 * margin);
  currentY += 5;
  
  // Portfolio URL
  pdf.setFontSize(10);
  pdf.setTextColor(37, 99, 235); // blue-600
  pdf.setFont('helvetica', 'normal');
  const portfolioText = `Portfolio: ${twoColumnResumeData.personalInfo.portfolioUrl}`;
  const portfolioWidth = pdf.getTextWidth(portfolioText);
  pdf.text(portfolioText, (pageWidth - portfolioWidth) / 2, currentY);
  currentY += 6;
  
  // Contact info (centered)
  pdf.setFontSize(9);
  pdf.setTextColor(71, 85, 105);
  const contactInfo = `${twoColumnResumeData.personalInfo.email} | ${twoColumnResumeData.personalInfo.phone} | ${twoColumnResumeData.personalInfo.location}`;
  const contactWidth = pdf.getTextWidth(contactInfo);
  pdf.text(contactInfo, (pageWidth - contactWidth) / 2, currentY);
  currentY += 4;
  
  const socialInfo = `${twoColumnResumeData.personalInfo.linkedin} | ${twoColumnResumeData.personalInfo.github}`;
  const socialWidth = pdf.getTextWidth(socialInfo);
  pdf.text(socialInfo, (pageWidth - socialWidth) / 2, currentY);
  currentY += 10;
  
  // Horizontal line
  pdf.setDrawColor(203, 213, 225); // slate-300
  pdf.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 10;
  
  // TWO-COLUMN LAYOUT STARTS HERE
  const leftX = margin;
  const rightX = margin + leftColumnWidth + columnGap;
  let leftY = currentY;
  let rightY = currentY;
  
  // LEFT COLUMN
  // Career Profile
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('CAREER PROFILE', leftX, leftY);
  leftY += 6;
  
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(51, 65, 85);
  leftY = addWrappedText(twoColumnResumeData.careerProfile, leftX, leftY, leftColumnWidth, 9);
  leftY += 8;
  
  // Skills
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('TECHNICAL SKILLS', leftX, leftY);
  leftY += 6;
  
  twoColumnResumeData.skills.forEach(skillGroup => {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(71, 85, 105);
    pdf.text(skillGroup.category, leftX, leftY);
    leftY += 4;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 65, 85);
    skillGroup.items.forEach(skill => {
      pdf.text(`• ${skill}`, leftX + 2, leftY);
      leftY += 3.5;
    });
    leftY += 2;
  });
  
  leftY += 3;
  
  // Certifications
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('CERTIFICATIONS', leftX, leftY);
  leftY += 6;
  
  twoColumnResumeData.certifications.forEach(cert => {
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    leftY = addWrappedText(cert.title, leftX, leftY, leftColumnWidth, 9);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 116, 139);
    pdf.text(`${cert.issuer} | ${cert.year}`, leftX, leftY);
    leftY += 6;
  });
  
  // RIGHT COLUMN
  // Projects
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('FEATURED PROJECTS', rightX, rightY);
  rightY += 6;
  
  twoColumnResumeData.projects.forEach(project => {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(project.title, rightX, rightY);
    rightY += 4;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    rightY = addWrappedText(project.description, rightX, rightY, rightColumnWidth, 9);
    
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 116, 139);
    pdf.text(`Tech Stack: ${project.techStack.join(', ')}`, rightX, rightY);
    rightY += 6;
  });
  
  rightY += 2;
  
  // Demonstrations
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('DEMONSTRATIONS', rightX, rightY);
  rightY += 6;
  
  // Web Demonstrations
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(71, 85, 105);
  pdf.text('Web Development', rightX, rightY);
  rightY += 4;
  
  twoColumnResumeData.demonstrations.web.forEach(demo => {
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(`• ${demo.title}`, rightX, rightY);
    rightY += 3;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 116, 139);
    pdf.text(`  ${demo.tools.join(', ')} - ${demo.purpose}`, rightX, rightY);
    rightY += 4;
  });
  
  rightY += 2;
  
  // ML Demonstrations
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(71, 85, 105);
  pdf.text('Machine Learning', rightX, rightY);
  rightY += 4;
  
  twoColumnResumeData.demonstrations.ml.forEach(demo => {
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(`• ${demo.title}`, rightX, rightY);
    rightY += 3;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 116, 139);
    pdf.text(`  ${demo.tools.join(', ')} - ${demo.purpose}`, rightX, rightY);
    rightY += 4;
  });
  
  rightY += 4;
  
  // Work Experience
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('PROFESSIONAL EXPERIENCE', rightX, rightY);
  rightY += 6;
  
  twoColumnResumeData.experience.forEach(exp => {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(exp.title, rightX, rightY);
    rightY += 4;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(71, 85, 105);
    pdf.text(`${exp.company} | ${exp.period}`, rightX, rightY);
    rightY += 4;
    
    exp.achievements.forEach(achievement => {
      pdf.setFontSize(9);
      pdf.setTextColor(51, 65, 85);
      rightY = addWrappedText(`• ${achievement}`, rightX, rightY, rightColumnWidth, 9);
    });
    rightY += 4;
  });
  
  // Education
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(30, 41, 59);
  pdf.text('EDUCATION', rightX, rightY);
  rightY += 6;
  
  twoColumnResumeData.education.forEach(edu => {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(edu.degree, rightX, rightY);
    rightY += 4;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(71, 85, 105);
    pdf.text(`${edu.institution} | ${edu.period}`, rightX, rightY);
    rightY += 6;
  });
  
  // Save the PDF
  pdf.save('Muhammad_Fazeel_Resume_Two_Column.pdf');
}