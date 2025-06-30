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
  careerProfile: "Dynamic Technical Operations Coordinator who transforms complex technical challenges into streamlined business solutions. With 7+ years of hands-on experience, I bridge the gap between technical innovation and operational excellence, driving project success through strategic coordination and adaptive problem-solving.",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "Java", "RESTful APIs", "Authentication", "CRUD Operations"]
    },
    {
      category: "Cloud & Tools",
      items: ["MongoDB", "Firebase", "Git", "GitHub", "Netlify", "Vercel", "Docker", "CI/CD"]
    },
    {
      category: "Data & ML",
      items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV", "Data Visualization"]
    },
    {
      category: "Project Management",
      items: ["Jira", "Trello", "Asana", "ClickUp", "Agile Methodologies", "Sprint Planning"]
    }
  ],
  certifications: [
    {
      title: "Android Developer Certification",
      issuer: "PNY Trainings",
      year: "2018"
    }
  ],
  projects: [
    {
      title: "Messaging Android Application",
      description: "Designed native Android UI, implemented RecyclerView for dynamic message loading, applied custom XML layouts, and followed Material Design principles.",
      techStack: ["Java", "Android Studio", "XML", "Material Design"]
    },
    {
      title: "Tax Calculator Web App",
      description: "Converted static Figma designs into responsive components, implemented real-time form logic, and applied React state management for user input handling.",
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Logistics Dashboard (Internship)",
      description: "Built frontend dashboard views, integrated REST APIs for backend data flow, and participated in feature coordination during development sprints.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Fake News Classification System",
      description: "Preprocessed text data, applied TF-IDF vectorization, trained logistic regression model, and evaluated classification accuracy.",
      techStack: ["Python", "Scikit-learn", "NLTK", "TfidfVectorizer"]
    }
  ],
  demonstrations: {
    web: [
      {
        title: "Dynamic Tax Calculator",
        tools: ["React.js", "JavaScript", "Bootstrap"],
        purpose: "Real-time form validation and calculations"
      },
      {
        title: "MERN Stack Dashboard",
        tools: ["MongoDB", "Express.js", "React.js", "Node.js"],
        purpose: "Full-stack logistics management system"
      },
      {
        title: "Responsive Mobile App",
        tools: ["Java", "Android Studio", "XML"],
        purpose: "Native Android messaging application"
      }
    ],
    ml: [
      {
        title: "Fake News Classification",
        tools: ["Python", "Scikit-learn", "NLTK"],
        purpose: "Text preprocessing and classification model"
      },
      {
        title: "Hand Gesture Controller",
        tools: ["Python", "OpenCV", "Mediapipe"],
        purpose: "Real-time gesture recognition system"
      },
      {
        title: "Titanic Survival Prediction",
        tools: ["Python", "Pandas", "Seaborn"],
        purpose: "Data analysis and machine learning model"
      }
    ]
  },
  experience: [
    {
      title: "Project & Marketing Lead",
      company: "Capestone Shipping - Dubai (Remote)",
      period: "Feb 2024 - Present",
      achievements: [
        "Led cross-functional teams across logistics, hosting, and marketing for 50+ international clients",
        "Managed AED 100k+ monthly project portfolio with 97% on-time delivery",
        "Oversaw web hosting, server setup, domain, and email configurations for 30+ clients",
        "Applied Agile (Scrum) to cut project delays by 35% and improve delivery speed"
      ]
    },
    {
      title: "Project Assistant & Coordinator",
      company: "GODEV",
      period: "June 2022 - Jan 2024",
      achievements: [
        "Coordinated schedules and resources across 5 teams, delivering 40+ projects with high satisfaction",
        "Facilitated 60+ client meetings resulting in 98% requirement accuracy",
        "Monitored multiple project progress, reporting risks and corrective actions to senior management",
        "Maintained documentation and version control, reducing communication gaps by 50%"
      ]
    },
    {
      title: "Web Developer Intern (MERN Stack)",
      company: "GODEV",
      period: "March 2022 - June 2022",
      achievements: [
        "Contributed to front-end development tasks using HTML, CSS, and JavaScript",
        "Worked in an Agile environment with regular sprint planning and team collaboration",
        "Participated in standups, project updates, and code versioning discussions"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "NCBA&E (National College of Business Administration & Economics)",
      period: "2019 - 2023"
    },
    {
      degree: "Diploma of Computer Information Technology",
      institution: "GCT Iqbal Town Lahore",
      period: "2016 - 2019"
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