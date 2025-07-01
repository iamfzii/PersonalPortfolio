import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function generatePrintableResumePDF(): void {
  // Create hidden container for PDF generation
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 816px;
    height: 1056px;
    z-index: -1;
    background: white;
    overflow: hidden;
  `;
  
  // Insert the optimized resume HTML
  container.innerHTML = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.4; color: #333; background-color: white; font-size: 12px;">
      <div style="max-width: 8.5in; min-height: 11in; margin: 0 auto; background: white; display: grid; grid-template-rows: auto 1fr; padding: 0.4in;">
        
        <!-- Header Section -->
        <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px 30px; border-radius: 8px; margin-bottom: 20px;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px; align-items: center;">
            <div>
              <h1 style="font-size: 28px; font-weight: 700; margin-bottom: 4px; letter-spacing: -0.5px; margin: 0;">Muhammad Fazeel</h1>
              <h2 style="font-size: 16px; font-weight: 300; margin-bottom: 4px; opacity: 0.9; margin: 0;">Technical Project Coordinator</h2>
              <p style="font-size: 14px; opacity: 0.8; font-style: italic; margin: 0;">Transforming ideas into digital solutions</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr; gap: 4px; font-size: 11px;">
              <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; margin-right: 6px; min-width: 45px;">Email:</span>
                <span style="opacity: 0.9;">fazeel.connects@gmail.com</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; margin-right: 6px; min-width: 45px;">Phone:</span>
                <span style="opacity: 0.9;">+92 301 400 4214</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; margin-right: 6px; min-width: 45px;">Location:</span>
                <span style="opacity: 0.9;">Lahore, Pakistan</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; margin-right: 6px; min-width: 45px;">LinkedIn:</span>
                <span style="opacity: 0.9;">linkedin.com/in/iamfzii</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; margin-right: 6px; min-width: 45px;">GitHub:</span>
                <span style="opacity: 0.9;">github.com/iamfzii</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Main Content - Two Column Layout -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
          <!-- Left Column -->
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Professional Summary -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Professional Summary</h3>
              <p style="font-size: 11px; line-height: 1.5; color: #555; text-align: justify; margin: 0;">
                Dynamic Technical Project Coordinator with 7+ years of experience in Computer Science & IT. 
                Specializes in transforming complex technical challenges into streamlined business solutions through 
                strategic coordination and adaptive problem-solving. Proven track record in project management, 
                technical support, and team leadership across diverse technology environments.
              </p>
            </section>

            <!-- Core Skills -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Technical Skills</h3>
              
              <div style="margin-bottom: 15px;">
                <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 8px; margin-top: 0;">Frontend</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">React.js</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">JavaScript</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">HTML5</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">CSS3</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Tailwind CSS</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Bootstrap</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Responsive Design</span>
                </div>
              </div>
              
              <div style="margin-bottom: 15px;">
                <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 8px; margin-top: 0;">Backend</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Node.js</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Express.js</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Python</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Java</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">RESTful APIs</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Authentication</span>
                </div>
              </div>
              
              <div style="margin-bottom: 15px;">
                <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 8px; margin-top: 0;">Cloud & Database</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">MongoDB</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Firebase</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Git</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">GitHub</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Docker</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">CI/CD</span>
                </div>
              </div>
              
              <div style="margin-bottom: 15px;">
                <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 8px; margin-top: 0;">Data & ML</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">TensorFlow</span>
                  <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Pandas</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">NumPy</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Scikit-learn</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">Keras</span>
                  <span style="background: #f8f9fa; border: 1px solid #e9ecef; color: #495057; padding: 3px 8px; border-radius: 12px; font-size: 9px; font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 20px;">OpenCV</span>
                </div>
              </div>
            </section>

            <!-- Key Projects -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Key Projects</h3>
              
              <div style="margin-bottom: 12px; padding: 10px; border: 1px solid #eee; border-radius: 6px;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 4px; margin-top: 0;">Messaging Android Application</h4>
                <p style="color: #555; margin-bottom: 4px; line-height: 1.3; font-size: 10px; margin-top: 0;">Full-stack messaging solution with real-time communication</p>
                <p style="font-size: 9px; color: #667eea; font-weight: 500; margin: 0;">React Native, Node.js, Socket.io, MongoDB</p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; border: 1px solid #eee; border-radius: 6px;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 4px; margin-top: 0;">Tax Calculator Web Application</h4>
                <p style="color: #555; margin-bottom: 4px; line-height: 1.3; font-size: 10px; margin-top: 0;">Comprehensive tax calculation tool with multiple jurisdiction support</p>
                <p style="font-size: 9px; color: #667eea; font-weight: 500; margin: 0;">React, Python, Flask, PostgreSQL</p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; border: 1px solid #eee; border-radius: 6px;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 4px; margin-top: 0;">Logistics Dashboard</h4>
                <p style="color: #555; margin-bottom: 4px; line-height: 1.3; font-size: 10px; margin-top: 0;">Real-time tracking and management system for shipping operations</p>
                <p style="font-size: 9px; color: #667eea; font-weight: 500; margin: 0;">React, Node.js, Express, MongoDB, Chart.js</p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; border: 1px solid #eee; border-radius: 6px;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 4px; margin-top: 0;">ML-Based Fake News Classification</h4>
                <p style="color: #555; margin-bottom: 4px; line-height: 1.3; font-size: 10px; margin-top: 0;">Machine learning model for automated fake news detection</p>
                <p style="font-size: 9px; color: #667eea; font-weight: 500; margin: 0;">Python, TensorFlow, NLP, Scikit-learn</p>
              </div>
            </section>
          </div>

          <!-- Right Column -->
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Work Experience -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Work Experience</h3>
              
              <div style="margin-bottom: 15px; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #667eea;">
                <div style="margin-bottom: 8px;">
                  <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 2px; margin-top: 0;">Technical Project Coordinator</h4>
                  <p style="color: #666; font-size: 10px; margin: 0;">Capestone Shipping LLC, Dubai</p>
                  <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 500; white-space: nowrap; display: inline-block; margin-top: 4px;">2022 - Present</span>
                </div>
                <ul style="list-style: none; padding-left: 0; margin: 0;">
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Coordinated technical operations across multiple shipping and logistics systems</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Implemented process improvements that reduced operational downtime by 30%</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Led cross-functional teams in system integration and deployment projects</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Developed technical documentation and training materials</li>
                </ul>
              </div>

              <div style="margin-bottom: 15px; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #667eea;">
                <div style="margin-bottom: 8px;">
                  <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 2px; margin-top: 0;">Full Stack Developer</h4>
                  <p style="color: #666; font-size: 10px; margin: 0;">GODEV Solutions</p>
                  <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 500; white-space: nowrap; display: inline-block; margin-top: 4px;">2020 - 2022</span>
                </div>
                <ul style="list-style: none; padding-left: 0; margin: 0;">
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Developed full-stack web applications using React, Node.js, and MongoDB</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Collaborated with design teams to implement responsive user interfaces</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Optimized application performance and implemented security best practices</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div style="margin-bottom: 15px; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #667eea;">
                <div style="margin-bottom: 8px;">
                  <h4 style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 2px; margin-top: 0;">Technical Support Specialist</h4>
                  <p style="color: #666; font-size: 10px; margin: 0;">Various IT Companies</p>
                  <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 500; white-space: nowrap; display: inline-block; margin-top: 4px;">2017 - 2020</span>
                </div>
                <ul style="list-style: none; padding-left: 0; margin: 0;">
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Provided technical support for software and hardware issues</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Maintained system documentation and created user guides</li>
                  <li style="position: relative; padding-left: 15px; margin-bottom: 4px; color: #555; line-height: 1.4; font-size: 10px;">▶ Achieved 95% customer satisfaction rating in technical support</li>
                </ul>
              </div>
            </section>

            <!-- Education -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Education</h3>
              
              <div style="margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 2px; margin-top: 0;">Bachelor of Science in Computer Science</h4>
                <p style="color: #666; font-size: 10px; margin: 0;">National College of Business Administration & Economics (NCBA&E)</p>
                <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 500; white-space: nowrap; display: inline-block; margin-top: 4px;">2019 - 2023</span>
              </div>
              
              <div style="margin-bottom: 12px; padding: 8px 0;">
                <h4 style="font-size: 11px; font-weight: 600; color: #2c3e50; margin-bottom: 2px; margin-top: 0;">Diploma in Information Technology</h4>
                <p style="color: #666; font-size: 10px; margin: 0;">Government College of Technology (GCT)</p>
                <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 500; white-space: nowrap; display: inline-block; margin-top: 4px;">2017 - 2019</span>
              </div>
            </section>

            <!-- Demonstrations -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Technical Demonstrations</h3>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Neural Network – Digit Recognition</h4>
                <p style="font-size: 8px; color: #667eea; font-weight: 500; margin: 0;">Python, TensorFlow, Keras, MNIST</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Cryptocurrency Price UI</h4>
                <p style="font-size: 8px; color: #667eea; font-weight: 500; margin: 0;">JavaScript, HTML, CSS, APIs</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">React Counter App</h4>
                <p style="font-size: 8px; color: #667eea; font-weight: 500; margin: 0;">React.js, Hooks</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Linear Regression – Salary Prediction</h4>
                <p style="font-size: 8px; color: #667eea; font-weight: 500; margin: 0;">Python, Pandas, Scikit-learn</p>
              </div>
            </section>

            <!-- Certifications -->
            <section>
              <h3 style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; position: relative; padding-bottom: 4px; border-bottom: 2px solid #667eea; display: inline-block;">Certifications</h3>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; border-left: 2px solid #28a745;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Cloud Computing Fundamentals</h4>
                <p style="color: #666; font-size: 9px; margin: 0;">Amazon Web Services (AWS) • 2023</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; border-left: 2px solid #28a745;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Project Management Professional</h4>
                <p style="color: #666; font-size: 9px; margin: 0;">Project Management Institute • 2022</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; border-left: 2px solid #28a745;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Agile Development Practices</h4>
                <p style="color: #666; font-size: 9px; margin: 0;">Scrum Alliance • 2022</p>
              </div>
              
              <div style="margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; border-left: 2px solid #28a745;">
                <h4 style="font-size: 10px; font-weight: 600; color: #2c3e50; margin-bottom: 3px; margin-top: 0;">Full Stack Web Development</h4>
                <p style="color: #666; font-size: 9px; margin: 0;">FreeCodeCamp • 2021</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(container);
  
  // Generate PDF
  html2canvas(container, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    width: 816,
    height: 1056,
    scrollX: 0,
    scrollY: 0
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // A4 dimensions: 210mm x 297mm
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Muhammad_Fazeel_Resume.pdf');
    
    // Clean up
    document.body.removeChild(container);
  }).catch(error => {
    console.error('Error generating PDF:', error);
    document.body.removeChild(container);
  });
}