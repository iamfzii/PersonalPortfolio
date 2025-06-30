import jsPDF from 'jspdf';

export interface ProfessionalResumeData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
    summary: string;
  };
  careerProfile: string;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    type: string;
    description: string;
    techStack: string[];
  }[];
  demonstrations: {
    web: {
      title: string;
      description: string;
      techStack: string[];
    }[];
    ml: {
      title: string;
      description: string;
      techStack: string[];
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
    description: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
    description: string;
  }[];
}

// Real content from the website
const professionalResumeData: ProfessionalResumeData = {
  personalInfo: {
    name: "Muhammad Fazeel",
    title: "Technical Operations Coordinator",
    tagline: "Transforming ideas into digital solutions",
    email: "fazeel.connects@gmail.com",
    phone: "+92 301 400 4214",
    location: "Lahore, Pakistan (Remote Collaboration Available)",
    linkedin: "linkedin.com/in/iamfzii",
    github: "github.com/iamfzii",
    portfolio: "muhammadfazeel.vercel.app",
    summary: "7+ Years of passion in Computer Science & IT. I believe technology should solve real problems and create meaningful connections. Let's build something extraordinary together."
  },
  careerProfile: "Dynamic Technical Operations Coordinator who transforms complex technical challenges into streamlined business solutions. With 7+ years of hands-on experience, I bridge the gap between technical innovation and operational excellence, driving project success through strategic coordination and adaptive problem-solving.",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design", "DOM Manipulation", "Component Architecture"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "Java", "RESTful APIs", "Authentication", "CRUD Operations", "API Testing"]
    },
    {
      category: "DevOps & Tools",
      items: ["MongoDB", "Firebase", "Git", "GitHub", "Netlify", "Vercel", "cPanel", "Docker", "CI/CD"]
    },
    {
      category: "Machine Learning & Data",
      items: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "Data Visualization"]
    },
    {
      category: "Project Management",
      items: ["Jira", "Trello", "Asana", "ClickUp", "Slack", "Agile Methodologies", "Sprint Planning", "Team Collaboration"]
    }
  ],
  projects: [
    {
      title: "Messaging Android Application",
      type: "Mobile App",
      description: "Designed native Android UI, implemented RecyclerView for dynamic message loading, applied custom XML layouts, and followed Material Design principles.",
      techStack: ["Java", "Android Studio", "XML", "Material Design", "RecyclerView"]
    },
    {
      title: "Tax Calculator Web App",
      type: "Frontend Project",
      description: "Converted static Figma designs into responsive components, implemented real-time form logic, and applied React state management for user input handling.",
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Figma"]
    },
    {
      title: "Fake News Classification System",
      type: "ML Demo",
      description: "Preprocessed text data, applied TF-IDF vectorization, trained logistic regression model, and evaluated classification accuracy.",
      techStack: ["Python", "Scikit-learn", "NLTK", "TfidfVectorizer"]
    },
    {
      title: "Logistics Dashboard (Internship)",
      type: "Full-Stack Project",
      description: "Built frontend dashboard views, integrated REST APIs for backend data flow, and participated in feature coordination during development sprints.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios"]
    }
  ],
  demonstrations: {
    web: [
      {
        title: "Cryptocurrency Price UI",
        description: "Real-time cryptocurrency price interface using public APIs, DOM manipulation, and event-driven UI logic.",
        techStack: ["JavaScript", "HTML", "CSS", "APIs"]
      },
      {
        title: "React Counter App",
        description: "Component-based state management using React hooks for real-time UI updates.",
        techStack: ["React.js", "Hooks"]
      },
      {
        title: "Online Compiler UI (Simulated)",
        description: "Simulated code editor interface with input/output layout and interactive UI feedback.",
        techStack: ["JavaScript", "HTML", "CSS"]
      }
    ],
    ml: [
      {
        title: "Neural Network – Digit Recognition",
        description: "Dense neural network to classify handwritten digits using MNIST dataset with evaluation metrics.",
        techStack: ["Python", "TensorFlow", "Keras", "MNIST"]
      },
      {
        title: "Simple Linear Regression – Salary Prediction",
        description: "Linear regression model to predict salary based on years of experience and plotted regression line.",
        techStack: ["Python", "Pandas", "Scikit-learn"]
      },
      {
        title: "Decision Tree Classifier – Food Likness",
        description: "Decision tree classifier to predict food preferences using demographic input features.",
        techStack: ["Python", "Scikit-learn", "Classification"]
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
        "Executed campaigns driving 45% higher engagement and 25% revenue growth",
        "Applied Agile (Scrum) to cut project delays by 35% and improve delivery speed"
      ]
    },
    {
      title: "Project Assistant & Coordinator",
      company: "GODEV",
      period: "June 2022 - Jan 2024",
      achievements: [
        "Coordinated schedules and resources across 5 teams, delivering 40+ projects & modules with high client satisfaction",
        "Facilitated 60+ client meetings resulting in 98% requirement accuracy & zero scope creep incidents",
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
      period: "2019 - 2023",
      description: "Comprehensive computer science education covering software development, algorithms, data structures, and system design."
    },
    {
      degree: "Diploma of Computer Information Technology",
      institution: "GCT Iqbal Town Lahore",
      period: "2016 - 2019",
      description: "Foundation in computer information technology with focus on programming fundamentals, computer networks, and information systems."
    }
  ],
  certifications: [
    {
      title: "Android Developer Certification",
      issuer: "PNY Trainings",
      year: "2018",
      description: "Comprehensive Android development training covering Java programming, Android Studio, UI/UX design principles, and mobile app deployment."
    }
  ]
};

export function generateProfessionalResumePDF(): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let currentY = margin;

  // Colors
  const primaryColor = '#1e40af'; // Blue
  const secondaryColor = '#64748b'; // Slate gray
  const textColor = '#1f2937'; // Dark gray

  // Helper functions
  const addSection = (title: string, topSpacing = 10) => {
    currentY += topSpacing;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.text(title, margin, currentY);
    currentY += 8;
    
    // Add underline
    doc.setDrawColor(primaryColor);
    doc.setLineWidth(0.5);
    doc.line(margin, currentY - 3, margin + doc.getTextWidth(title), currentY - 3);
    currentY += 5;
  };

  const addText = (text: string, fontSize = 10, fontStyle: 'normal' | 'bold' = 'normal', color = textColor) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.setTextColor(color);
    
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      if (currentY > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
      }
      doc.text(line, margin, currentY);
      currentY += fontSize * 0.5;
    });
    currentY += 3;
  };

  const addBullet = (text: string) => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor);
    
    const lines = doc.splitTextToSize(text, contentWidth - 10);
    lines.forEach((line: string, index: number) => {
      if (currentY > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
      }
      if (index === 0) {
        doc.text('•', margin + 5, currentY);
        doc.text(line, margin + 12, currentY);
      } else {
        doc.text(line, margin + 12, currentY);
      }
      currentY += 4;
    });
    currentY += 1;
  };

  const checkPageBreak = () => {
    if (currentY > pageHeight - 40) {
      doc.addPage();
      currentY = margin;
    }
  };

  // Start building the PDF
  
  // Header Section
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor);
  doc.text(professionalResumeData.personalInfo.name, margin, currentY);
  currentY += 8;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text(professionalResumeData.personalInfo.title, margin, currentY);
  currentY += 6;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(primaryColor);
  doc.text(professionalResumeData.personalInfo.tagline, margin, currentY);
  currentY += 10;
  
  // Contact Information
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor);
  const contactInfo = [
    `📧 ${professionalResumeData.personalInfo.email}`,
    `📱 ${professionalResumeData.personalInfo.phone}`,
    `📍 ${professionalResumeData.personalInfo.location}`,
    `🔗 ${professionalResumeData.personalInfo.portfolio}`,
    `💼 ${professionalResumeData.personalInfo.linkedin}`,
    `🔗 ${professionalResumeData.personalInfo.github}`
  ];
  
  contactInfo.forEach((info, index) => {
    if (index % 2 === 0) {
      doc.text(info, margin, currentY);
    } else {
      doc.text(info, margin + contentWidth/2, currentY);
      currentY += 4;
    }
  });
  
  if (contactInfo.length % 2 !== 0) currentY += 4;
  currentY += 5;

  // Professional Summary
  addSection('Professional Summary');
  addText(professionalResumeData.personalInfo.summary, 10, 'normal');
  
  // Career Profile
  addSection('Career Profile');
  addText(professionalResumeData.careerProfile, 10, 'normal');

  // Skills Section
  addSection('Technical Skills');
  professionalResumeData.skills.forEach((skillCategory) => {
    addText(skillCategory.category, 11, 'bold', primaryColor);
    const skillsText = skillCategory.items.join(' • ');
    addText(skillsText, 9, 'normal');
    currentY += 3;
  });

  checkPageBreak();

  // Projects Section
  addSection('Featured Projects');
  professionalResumeData.projects.forEach((project, index) => {
    if (index > 0) currentY += 5;
    addText(`${project.title} (${project.type})`, 11, 'bold', primaryColor);
    addText(project.description, 9, 'normal');
    addText(`Tech Stack: ${project.techStack.join(', ')}`, 9, 'normal', secondaryColor);
  });

  checkPageBreak();

  // Demonstrations Section
  addSection('Technical Demonstrations');
  
  addText('Web Development Demonstrations', 11, 'bold', primaryColor);
  professionalResumeData.demonstrations.web.forEach((demo) => {
    addText(`• ${demo.title}`, 10, 'bold');
    addText(`  ${demo.description}`, 9, 'normal');
    addText(`  Tools: ${demo.techStack.join(', ')}`, 9, 'normal', secondaryColor);
    currentY += 2;
  });
  
  currentY += 5;
  addText('Machine Learning Demonstrations', 11, 'bold', primaryColor);
  professionalResumeData.demonstrations.ml.forEach((demo) => {
    addText(`• ${demo.title}`, 10, 'bold');
    addText(`  ${demo.description}`, 9, 'normal');
    addText(`  Tools: ${demo.techStack.join(', ')}`, 9, 'normal', secondaryColor);
    currentY += 2;
  });

  checkPageBreak();

  // Experience Section
  addSection('Professional Experience');
  professionalResumeData.experience.forEach((exp, index) => {
    if (index > 0) currentY += 8;
    addText(`${exp.title} | ${exp.company}`, 11, 'bold', primaryColor);
    addText(exp.period, 10, 'normal', secondaryColor);
    currentY += 3;
    
    exp.achievements.forEach((achievement) => {
      addBullet(achievement);
    });
  });

  checkPageBreak();

  // Education Section
  addSection('Education');
  professionalResumeData.education.forEach((edu, index) => {
    if (index > 0) currentY += 5;
    addText(edu.degree, 11, 'bold', primaryColor);
    addText(`${edu.institution} | ${edu.period}`, 10, 'normal', secondaryColor);
    addText(edu.description, 9, 'normal');
  });

  // Certifications Section
  addSection('Professional Certifications');
  professionalResumeData.certifications.forEach((cert, index) => {
    if (index > 0) currentY += 5;
    addText(`${cert.title} | ${cert.issuer} (${cert.year})`, 11, 'bold', primaryColor);
    addText(cert.description, 9, 'normal');
  });

  // Footer
  currentY = pageHeight - 15;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('Muhammad Fazeel - Technical Operations Coordinator', margin, currentY);
  doc.text(`Portfolio: ${professionalResumeData.personalInfo.portfolio}`, pageWidth - margin - 60, currentY);

  // Save the PDF
  doc.save('Muhammad_Fazeel_Resume_Professional.pdf');
}