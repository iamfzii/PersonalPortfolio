import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// HTML Resume Template - Two-Column Layout
const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Fazeel - Technical Project Coordinator</title>
    <style>
        /* Resume CSS - Two-Column Professional Design */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.3;
          color: #333;
          background: #fff;
          font-size: 12px;
        }

        .resume-container {
          max-width: 8.5in;
          width: 8.5in;
          height: 11in;
          margin: 0 auto;
          padding: 0.4in;
          background: white;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Header Section with Gradient */
        .header {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
          color: white;
          padding: 0.8rem;
          border-radius: 8px;
          margin-bottom: 0.8rem;
          text-align: center;
        }

        .name {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          letter-spacing: 1px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .title {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.3rem;
          opacity: 0.95;
        }

        .tagline {
          font-size: 0.8rem;
          font-style: italic;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          font-size: 0.75rem;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .contact-label {
          font-weight: 600;
        }

        /* Two Column Layout */
        .content-columns {
          display: flex;
          gap: 1rem;
          flex: 1;
          height: calc(100% - 8rem);
        }

        .left-column {
          width: 35%;
          background: #f8fafc;
          padding: 0.6rem;
          border-radius: 6px;
          border-left: 4px solid #1e40af;
        }

        .right-column {
          width: 65%;
          padding-left: 0.8rem;
        }

        /* Section Styling */
        .section {
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.4rem;
          padding-bottom: 0.2rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .left-column .section-title {
          color: #1e40af;
          border-bottom-color: #1e40af;
        }

        /* Professional Summary */
        .summary-text {
          font-size: 0.8rem;
          line-height: 1.4;
          text-align: justify;
          margin-bottom: 0.6rem;
        }

        /* Skills Section */
        .skill-category {
          margin-bottom: 0.6rem;
        }

        .skill-category-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.3rem;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.2rem;
        }

        .skill-chip {
          background: #e0e7ff;
          color: #1e40af;
          font-size: 0.65rem;
          font-weight: 500;
          padding: 0.15rem 0.4rem;
          border-radius: 3px;
          border: 1px solid #c7d2fe;
        }

        /* Contact Details */
        .contact-details {
          font-size: 0.75rem;
          line-height: 1.5;
        }

        .contact-details div {
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .contact-details strong {
          color: #1e40af;
          font-weight: 600;
          min-width: 3rem;
        }

        /* Education */
        .education-item {
          margin-bottom: 0.6rem;
          background: white;
          padding: 0.4rem;
          border-radius: 4px;
          border-left: 3px solid #1e40af;
        }

        .degree {
          font-size: 0.8rem;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 0.1rem;
        }

        .institution {
          font-size: 0.7rem;
          color: #6b7280;
          font-weight: 500;
        }

        /* Experience Section */
        .experience-item {
          margin-bottom: 0.8rem;
        }

        .experience-header {
          margin-bottom: 0.3rem;
        }

        .job-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 0.1rem;
        }

        .company-period {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.3rem;
        }

        .company-name {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 500;
        }

        .job-period {
          font-size: 0.7rem;
          color: #374151;
          font-weight: 500;
          background: #f3f4f6;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
        }

        .achievements {
          list-style: none;
          margin-left: 0.3rem;
        }

        .achievements li {
          position: relative;
          padding-left: 0.8rem;
          margin-bottom: 0.2rem;
          font-size: 0.75rem;
          line-height: 1.3;
        }

        .achievements li::before {
          content: "•";
          color: #1e40af;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* Projects Section */
        .project-item {
          margin-bottom: 0.6rem;
          background: #f8fafc;
          padding: 0.5rem;
          border-radius: 4px;
          border-left: 3px solid #1e40af;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.3rem;
          gap: 0.4rem;
        }

        .project-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #1e40af;
          flex: 1;
        }

        .project-type {
          font-size: 0.6rem;
          background: #1e40af;
          color: white;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          white-space: nowrap;
        }

        .project-description {
          font-size: 0.7rem;
          line-height: 1.3;
          margin-bottom: 0.3rem;
          color: #374151;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.15rem;
        }

        .tech-chip {
          background: #e5e7eb;
          color: #374151;
          font-size: 0.6rem;
          padding: 0.1rem 0.25rem;
          border-radius: 2px;
          font-weight: 500;
        }

        /* Print Optimization */
        @media print {
          body {
            font-size: 11px;
          }
          
          .resume-container {
            max-width: none;
            width: 100%;
            height: 100vh;
            margin: 0;
            padding: 0.3in;
            box-shadow: none;
          }
          
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%) !important;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          .section {
            page-break-inside: avoid;
          }
          
          .experience-item,
          .project-item {
            page-break-inside: avoid;
          }
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <!-- Header Section with Gradient -->
        <header class="header">
            <h1 class="name">Muhammad Fazeel</h1>
            <h2 class="title">Technical Project Coordinator</h2>
            <p class="tagline">Transforming ideas into digital solutions</p>
            
            <div class="contact-info">
                <span class="contact-item">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">fazeel.connects@gmail.com</span>
                </span>
                <span class="contact-item">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">03014004214</span>
                </span>
                <span class="contact-item">
                    <span class="contact-label">Location:</span>
                    <span class="contact-value">Lahore, Pakistan</span>
                </span>
                <span class="contact-item">
                    <span class="contact-label">LinkedIn:</span>
                    <span class="contact-value">linkedin.com/in/iamfzii</span>
                </span>
            </div>
        </header>

        <!-- Two Column Content -->
        <div class="content-columns">
            <!-- Left Column -->
            <div class="left-column">
                <!-- Contact Details -->
                <section class="section">
                    <h3 class="section-title">Contact</h3>
                    <div class="contact-details">
                        <div><strong>GitHub:</strong> github.com/iamfzii</div>
                        <div><strong>Remote:</strong> Available</div>
                        <div><strong>Portfolio:</strong> Available on request</div>
                    </div>
                </section>

                <!-- Technical Skills -->
                <section class="section">
                    <h3 class="section-title">Technical Skills</h3>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">Frontend</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">React.js</span>
                            <span class="skill-chip">JavaScript</span>
                            <span class="skill-chip">HTML5/CSS3</span>
                            <span class="skill-chip">Tailwind CSS</span>
                            <span class="skill-chip">Bootstrap</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">Backend</h4>
                        <div class="skill-chips">
                            <span class="skill-chip">Node.js</span>
                            <span class="skill-chip">Express.js</span>
                            <span class="skill-chip">Python</span>
                            <span class="skill-chip">MongoDB</span>
                            <span class="skill-chip">Firebase</span>
                            <span class="skill-chip">RESTful APIs</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4 class="skill-category-title">Data Science</h4>
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
                            <span class="skill-chip">Agile/Scrum</span>
                            <span class="skill-chip">Google Workspace</span>
                        </div>
                    </div>
                </section>

                <!-- Education -->
                <section class="section">
                    <h3 class="section-title">Education</h3>
                    <div class="education-item">
                        <div class="degree">Bachelor's in Computer Science</div>
                        <div class="institution">NCBA&E (2018-2022)</div>
                    </div>
                    <div class="education-item">
                        <div class="degree">Diploma in Information Technology</div>
                        <div class="institution">GCT (2016-2018)</div>
                    </div>
                </section>
            </div>

            <!-- Right Column -->
            <div class="right-column">
                <!-- Professional Summary -->
                <section class="section">
                    <h3 class="section-title">Professional Summary</h3>
                    <p class="summary-text">
                        Technical Operations Coordinator with 7+ years in Computer Science & IT, specializing in full-stack applications, AI workflows, and cloud solutions. Expert in translating requirements into technical deliverables, managing development cycles, and troubleshooting deployment pipelines. Proven ability to work across system layers while maintaining operational continuity.
                    </p>
                </section>

                <!-- Professional Experience -->
                <section class="section">
                    <h3 class="section-title">Professional Experience</h3>
                    
                    <div class="experience-item">
                        <div class="experience-header">
                            <h4 class="job-title">Project & Marketing Lead</h4>
                            <div class="company-period">
                                <span class="company-name">Capestone Shipping - Dubai (Remote)</span>
                                <span class="job-period">Feb 2024 - Present</span>
                            </div>
                        </div>
                        <ul class="achievements">
                            <li>Led cross-functional teams for 50+ international clients with AED 100k+ monthly portfolio</li>
                            <li>Achieved 97% on-time delivery and 45% engagement growth through Agile methodologies</li>
                            <li>Managed web hosting, server setup, and domain configurations for 30+ clients</li>
                        </ul>
                    </div>
                    
                    <div class="experience-item">
                        <div class="experience-header">
                            <h4 class="job-title">Project Assistant & Coordinator</h4>
                            <div class="company-period">
                                <span class="company-name">GODEV</span>
                                <span class="job-period">June 2022 - Jan 2024</span>
                            </div>
                        </div>
                        <ul class="achievements">
                            <li>Coordinated 5 teams delivering 40+ projects with 98% requirement accuracy</li>
                            <li>Facilitated 60+ client meetings and reduced communication gaps by 50%</li>
                            <li>Supported Agile ceremonies for development teams of 6-10 members</li>
                        </ul>
                    </div>
                    
                    <div class="experience-item">
                        <div class="experience-header">
                            <h4 class="job-title">Web Developer Intern (MERN Stack)</h4>
                            <div class="company-period">
                                <span class="company-name">GODEV</span>
                                <span class="job-period">March 2022 - June 2022</span>
                            </div>
                        </div>
                        <ul class="achievements">
                            <li>Developed front-end components using HTML, CSS, JavaScript, and React.js</li>
                            <li>Participated in Agile development with sprint planning and code versioning</li>
                        </ul>
                    </div>
                </section>

                <!-- Key Projects -->
                <section class="section">
                    <h3 class="section-title">Key Projects</h3>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Logistics Dashboard</h4>
                            <span class="project-type">Full-Stack</span>
                        </div>
                        <p class="project-description">Operations management dashboard with real-time data tracking and analytics</p>
                        <div class="tech-stack">
                            <span class="tech-chip">MERN Stack</span>
                            <span class="tech-chip">MongoDB</span>
                            <span class="tech-chip">Express.js</span>
                            <span class="tech-chip">React.js</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Fake News Classifier</h4>
                            <span class="project-type">ML</span>
                        </div>
                        <p class="project-description">Machine learning system for automated fake news detection with NLP</p>
                        <div class="tech-stack">
                            <span class="tech-chip">Python</span>
                            <span class="tech-chip">Scikit-learn</span>
                            <span class="tech-chip">NLTK</span>
                            <span class="tech-chip">Pandas</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Tax Calculator Web App</h4>
                            <span class="project-type">Web</span>
                        </div>
                        <p class="project-description">Interactive tax calculation application with responsive design</p>
                        <div class="tech-stack">
                            <span class="tech-chip">React.js</span>
                            <span class="tech-chip">Bootstrap</span>
                            <span class="tech-chip">JavaScript</span>
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-header">
                            <h4 class="project-title">Messaging Android App</h4>
                            <span class="project-type">Mobile</span>
                        </div>
                        <p class="project-description">Native Android messaging application with Material Design UI</p>
                        <div class="tech-stack">
                            <span class="tech-chip">Java</span>
                            <span class="tech-chip">Android Studio</span>
                            <span class="tech-chip">XML</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
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
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 816, // 8.5 inches * 96 DPI
      height: 1056, // 11 inches * 96 DPI
      logging: false,
      removeContainer: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Use full page dimensions for better quality
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Add image to fill the entire page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Muhammad_Fazeel_Technical_Project_Coordinator.pdf');
      
      // Clean up
      document.body.removeChild(container);
    }).catch((error) => {
      console.error('Error generating PDF:', error);
      document.body.removeChild(container);
    });
  }
}