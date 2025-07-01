import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// HTML Resume Template
const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Fazeel - Resume</title>
    <style>
        /* Resume CSS - Professional One-Page Design */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.4;
          color: #333;
          background: #fff;
          font-size: 14px;
        }

        .resume-container {
          max-width: 8.5in;
          margin: 0 auto;
          padding: 0.5in;
          background: white;
          min-height: 11in;
          display: flex;
          flex-direction: column;
        }

        /* Header Section */
        .header {
          text-align: center;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #1e40af;
          padding-bottom: 1rem;
        }

        .name {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 0.3rem;
          letter-spacing: 1px;
        }

        .title {
          font-size: 1.1rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.2rem;
        }

        .tagline {
          font-size: 0.9rem;
          color: #6b7280;
          font-style: italic;
          margin-bottom: 0.8rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
        }

        .contact-row {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .contact-label {
          font-weight: 600;
          color: #1e40af;
        }

        .contact-value {
          color: #374151;
        }

        /* Section Styling */
        .section {
          margin-bottom: 1.2rem;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.6rem;
          padding-bottom: 0.2rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .section-content {
          margin-left: 0.5rem;
        }

        /* Career Profile */
        .profile-text {
          text-align: justify;
          line-height: 1.5;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }

        .skill-category {
          margin-bottom: 0.6rem;
        }

        .skill-category-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.3rem;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .skill-chip {
          background: #e0e7ff;
          color: #1e40af;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          border: 1px solid #c7d2fe;
        }

        /* Experience Section */
        .experience-item {
          margin-bottom: 1rem;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.4rem;
          gap: 1rem;
        }

        .job-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 0.1rem;
        }

        .company-name {
          font-size: 0.85rem;
          color: #6b7280;
          font-weight: 500;
        }

        .job-period {
          font-size: 0.8rem;
          color: #374151;
          font-weight: 500;
          white-space: nowrap;
          background: #f3f4f6;
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
        }

        .achievements {
          list-style: none;
          margin-left: 0.5rem;
        }

        .achievements li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.2rem;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .achievements li::before {
          content: "•";
          color: #1e40af;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .project-item {
          background: #f8fafc;
          padding: 0.6rem;
          border-radius: 4px;
          border-left: 3px solid #1e40af;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.4rem;
          gap: 0.5rem;
        }

        .project-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e40af;
          flex: 1;
        }

        .project-type {
          font-size: 0.7rem;
          background: #1e40af;
          color: white;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
          white-space: nowrap;
        }

        .project-description {
          font-size: 0.8rem;
          line-height: 1.3;
          margin-bottom: 0.4rem;
          color: #374151;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.2rem;
        }

        .tech-chip {
          background: #e5e7eb;
          color: #374151;
          font-size: 0.7rem;
          padding: 0.1rem 0.3rem;
          border-radius: 2px;
          font-weight: 500;
        }

        /* Compact Education Section */
        .education-compact {
          background: #f8fafc;
          padding: 0.8rem;
          border-radius: 4px;
          border-left: 3px solid #1e40af;
        }

        .education-row {
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
          color: #374151;
        }

        .education-row:last-child {
          margin-bottom: 0;
        }

        .education-row strong {
          color: #1e40af;
          font-weight: 600;
        }

        /* Footer */
        .footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        }

        .footer-text {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <!-- Header Section -->
        <header class="header">
            <div class="header-content">
                <div class="name-title">
                    <h1 class="name">Muhammad Fazeel</h1>
                    <h2 class="title">Technical Operations Coordinator</h2>
                    <p class="tagline">Transforming ideas into digital solutions</p>
                </div>
                
                <div class="contact-info">
                    <div class="contact-row">
                        <span class="contact-item">
                            <span class="contact-label">Email:</span>
                            <span class="contact-value">fazeel.connects@gmail.com</span>
                        </span>
                        <span class="contact-item">
                            <span class="contact-label">Phone:</span>
                            <span class="contact-value">03014004214</span>
                        </span>
                    </div>
                    
                    <div class="contact-row">
                        <span class="contact-item">
                            <span class="contact-label">Location:</span>
                            <span class="contact-value">Lahore, Pakistan</span>
                        </span>
                        <span class="contact-item">
                            <span class="contact-label">Remote:</span>
                            <span class="contact-value">Available</span>
                        </span>
                    </div>
                    
                    <div class="contact-row">
                        <span class="contact-item">
                            <span class="contact-label">LinkedIn:</span>
                            <span class="contact-value">linkedin.com/in/iamfzii</span>
                        </span>
                        <span class="contact-item">
                            <span class="contact-label">GitHub:</span>
                            <span class="contact-value">github.com/iamfzii</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Professional Summary Section -->
        <section class="section">
            <h3 class="section-title">Professional Summary</h3>
            <div class="section-content">
                <p class="profile-text">
                    Technical Operations Coordinator with 7+ years in Computer Science & IT, specializing in full-stack applications, AI workflows, and cloud solutions. Expert in translating requirements into technical deliverables, managing development cycles, and troubleshooting deployment pipelines. Proven ability to work across system layers while maintaining operational continuity.
                </p>
            </div>
        </section>

        <!-- Technical Skills Section -->
        <section class="section">
            <h3 class="section-title">Technical Skills</h3>
            <div class="section-content">
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4 class="skill-category-title">Languages & Frontend</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">Python</span>
                            <span class="skill-chip">JavaScript</span>
                            <span class="skill-chip">React.js</span>
                            <span class="skill-chip">HTML5/CSS3</span>
                            <span class="skill-chip">Tailwind CSS</span>
                            <span class="skill-chip">Bootstrap</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">Backend & Database</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">Node.js</span>
                            <span class="skill-chip">Express.js</span>
                            <span class="skill-chip">MongoDB</span>
                            <span class="skill-chip">Firebase</span>
                            <span class="skill-chip">RESTful APIs</span>
                            <span class="skill-chip">CRUD Operations</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">Data Science & ML</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">Pandas</span>
                            <span class="skill-chip">NumPy</span>
                            <span class="skill-chip">Scikit-learn</span>
                            <span class="skill-chip">TensorFlow</span>
                            <span class="skill-chip">OpenCV</span>
                            <span class="skill-chip">NLTK</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">DevOps & Tools</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">Git/GitHub</span>
                            <span class="skill-chip">Jira/Trello</span>
                            <span class="skill-chip">cPanel/WHM</span>
                            <span class="skill-chip">Netlify/Vercel</span>
                            <span class="skill-chip">Agile/Scrum</span>
                            <span class="skill-chip">Google Workspace</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Professional Experience Section -->
        <section class="section">
            <h3 class="section-title">Professional Experience</h3>
            <div class="section-content">
                <div class="experience-item">
                    <div class="experience-header">
                        <div class="job-info">
                            <h4 class="job-title">Project & Marketing Lead</h4>
                            <p class="company-name">Capestone Shipping - Dubai (Remote)</p>
                        </div>
                        <span class="job-period">Feb 2024 - Present</span>
                    </div>
                    <ul class="achievements">
                        <li>Led cross-functional teams for 50+ international clients with AED 100k+ monthly portfolio</li>
                        <li>Achieved 97% on-time delivery and 45% engagement growth through Agile methodologies</li>
                        <li>Managed web hosting, server setup, and domain configurations for 30+ clients</li>
                    </ul>
                </div>
                
                <div class="experience-item">
                    <div class="experience-header">
                        <div class="job-info">
                            <h4 class="job-title">Project Assistant & Coordinator</h4>
                            <p class="company-name">GODEV</p>
                        </div>
                        <span class="job-period">June 2022 - Jan 2024</span>
                    </div>
                    <ul class="achievements">
                        <li>Coordinated 5 teams delivering 40+ projects with 98% requirement accuracy</li>
                        <li>Facilitated 60+ client meetings and reduced communication gaps by 50%</li>
                        <li>Supported Agile ceremonies for development teams of 6-10 members</li>
                    </ul>
                </div>
                
                <div class="experience-item">
                    <div class="experience-header">
                        <div class="job-info">
                            <h4 class="job-title">Web Developer Intern (MERN Stack)</h4>
                            <p class="company-name">GODEV</p>
                        </div>
                        <span class="job-period">March 2022 - June 2022</span>
                    </div>
                    <ul class="achievements">
                        <li>Developed front-end components using HTML, CSS, JavaScript, and React.js</li>
                        <li>Participated in Agile development with sprint planning and code versioning</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Key Projects & Education Section -->
        <section class="section">
            <h3 class="section-title">Key Projects & Education</h3>
            <div class="section-content">
                <div class="projects-grid">
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Messaging Android App</h4>
                            <span class="project-type">Mobile</span>
                        </div>
                        <p class="project-description">Native Android messaging app with Material Design UI</p>
                        <div class="tech-stack">
                            <span class="tech-chip">Java</span>
                            <span class="tech-chip">Android Studio</span>
                            <span class="tech-chip">XML</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Tax Calculator Web App</h4>
                            <span class="project-type">Web</span>
                        </div>
                        <p class="project-description">Interactive tax calculation with responsive design</p>
                        <div class="tech-stack">
                            <span class="tech-chip">React.js</span>
                            <span class="tech-chip">Bootstrap</span>
                            <span class="tech-chip">JavaScript</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Fake News Classifier</h4>
                            <span class="project-type">ML</span>
                        </div>
                        <p class="project-description">ML system for automated fake news detection</p>
                        <div class="tech-stack">
                            <span class="tech-chip">Python</span>
                            <span class="tech-chip">Scikit-learn</span>
                            <span class="tech-chip">NLTK</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Logistics Dashboard</h4>
                            <span class="project-type">Full-Stack</span>
                        </div>
                        <p class="project-description">Operations management dashboard with real-time data</p>
                        <div class="tech-stack">
                            <span class="tech-chip">MERN Stack</span>
                            <span class="tech-chip">MongoDB</span>
                            <span class="tech-chip">Express.js</span>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 1rem;">
                    <div class="education-compact">
                        <div class="education-row">
                            <strong>Bachelor's in Computer Science</strong> | NCBA&E (2018-2022)
                        </div>
                        <div class="education-row">
                            <strong>Diploma in Information Technology</strong> | GCT (2016-2018)
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <p class="footer-text">
                    Muhammad Fazeel | Technical Operations Coordinator | fazeel.connects@gmail.com
                </p>
            </div>
        </footer>
    </div>
</body>
</html>
`;

export function generateHTMLResumePDF(): void {
  // Create a temporary container
  const container = document.createElement('div');
  container.innerHTML = resumeHTML;
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  container.style.width = '8.5in';
  container.style.height = '11in';
  container.style.background = 'white';
  
  // Append to body
  document.body.appendChild(container);
  
  const resumeElement = container.querySelector('.resume-container') as HTMLElement;
  
  if (resumeElement) {
    // Generate PDF using html2canvas
    html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 816, // 8.5 inches * 96 DPI
      height: 1056, // 11 inches * 96 DPI
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Calculate dimensions to fit A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;
      
      let imgWidth = pdfWidth;
      let imgHeight = pdfWidth / imgAspectRatio;
      
      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * imgAspectRatio;
      }
      
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save('Muhammad_Fazeel_Resume_Enhanced.pdf');
      
      // Clean up
      document.body.removeChild(container);
    }).catch((error) => {
      console.error('Error generating PDF:', error);
      document.body.removeChild(container);
    });
  }
}