import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfessionalResume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-spacing-sm section-primary">
      <div className="content-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4">
            Professional Resume
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            Download a clean, professional version of my resume
          </p>
          
          {/* Download Button */}
          <Button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Resume Preview - Hidden from main view, shown only in print */}
        <div className="hidden print:block print:max-w-none">
          <div className="bg-white text-black p-8">
            
            {/* Header Section */}
            <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Muhammad Fazeel
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Technical Operations Coordinator
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>fazeel.connects@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>03014004214</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/iamfzii</span>
                </div>
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span>github.com/iamfzii</span>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dynamic Technical Operations Coordinator with 7+ years of experience in Computer Science & IT. 
                Specializes in transforming complex technical challenges into streamlined business solutions through 
                strategic coordination and adaptive problem-solving. Proven track record in project management, 
                technical support, and team leadership across diverse technology environments.
              </p>
            </section>

            {/* Core Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Core Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "JavaScript", "Python", "React", "Node.js", "MongoDB", "PostgreSQL", 
                      "Docker", "Git", "Linux", "AWS", "Firebase", "RESTful APIs"
                    ].map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Project Management</h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Agile/Scrum", "Sprint Planning", "Project Coordination", 
                      "Timeline Management", "Risk Assessment", "Quality Assurance"
                    ].map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Technical Support</h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "System Administration", "Troubleshooting", "Network Configuration", 
                      "Performance Optimization", "Documentation", "User Training"
                    ].map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Work Experience
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Technical Operations Coordinator</h3>
                      <p className="text-gray-600">Capestone Shipping LLC, Dubai</p>
                    </div>
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Coordinated technical operations across multiple shipping and logistics systems</li>
                    <li>Implemented process improvements that reduced operational downtime by 30%</li>
                    <li>Led cross-functional teams in system integration and deployment projects</li>
                    <li>Developed technical documentation and training materials for operational procedures</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Full Stack Developer</h3>
                      <p className="text-gray-600">GODEV Solutions</p>
                    </div>
                    <span className="text-sm text-gray-500">2020 - 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB</li>
                    <li>Collaborated with design teams to implement responsive user interfaces</li>
                    <li>Optimized application performance and implemented security best practices</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Technical Support Specialist</h3>
                      <p className="text-gray-600">Various IT Companies</p>
                    </div>
                    <span className="text-sm text-gray-500">2017 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Provided technical support and troubleshooting for software and hardware issues</li>
                    <li>Maintained system documentation and created user guides</li>
                    <li>Collaborated with development teams to resolve technical issues</li>
                    <li>Achieved 95% customer satisfaction rating in technical support delivery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Key Projects
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Messaging Android Application</h3>
                  <p className="text-sm text-gray-600 mb-1">Full-stack messaging solution with real-time communication</p>
                  <p className="text-xs text-gray-500">Technologies: React Native, Node.js, Socket.io, MongoDB</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Tax Calculator Web Application</h3>
                  <p className="text-sm text-gray-600 mb-1">Comprehensive tax calculation tool with multiple jurisdiction support</p>
                  <p className="text-xs text-gray-500">Technologies: React, Python, Flask, PostgreSQL</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Logistics Dashboard</h3>
                  <p className="text-sm text-gray-600 mb-1">Real-time tracking and management system for shipping operations</p>
                  <p className="text-xs text-gray-500">Technologies: React, Node.js, Express, MongoDB, Chart.js</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">ML-Based Fake News Classification</h3>
                  <p className="text-sm text-gray-600 mb-1">Machine learning model for automated fake news detection</p>
                  <p className="text-xs text-gray-500">Technologies: Python, TensorFlow, NLP, Scikit-learn</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Education
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-600">National College of Business Administration & Economics (NCBA&E)</p>
                    </div>
                    <span className="text-sm text-gray-500">2019 - 2023</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">Diploma in Information Technology</h3>
                      <p className="text-gray-600">Government College of Technology (GCT)</p>
                    </div>
                    <span className="text-sm text-gray-500">2017 - 2019</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Cloud Computing Fundamentals</h3>
                  <p className="text-sm text-gray-600">Amazon Web Services (AWS) • 2023</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Project Management Professional</h3>
                  <p className="text-sm text-gray-600">Project Management Institute • 2022</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Agile Development Practices</h3>
                  <p className="text-sm text-gray-600">Scrum Alliance • 2022</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Full Stack Web Development</h3>
                  <p className="text-sm text-gray-600">FreeCodeCamp • 2021</p>
                </div>
              </div>
            </section>

          </div>
        </div>
        
      </div>
      
      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            .print\\:hidden {
              display: none !important;
            }
            .print\\:block {
              display: block !important;
            }
            .print\\:max-w-none {
              max-width: none !important;
            }
            body {
              background: white !important;
              color: black !important;
            }
            * {
              background: white !important;
              color: black !important;
              border-color: #e5e7eb !important;
            }
            .bg-gray-100 {
              background: #f3f4f6 !important;
            }
            .text-gray-700 {
              color: #374151 !important;
            }
            .text-gray-600 {
              color: #4b5563 !important;
            }
            .text-gray-500 {
              color: #6b7280 !important;
            }
            .border-gray-300 {
              border-color: #d1d5db !important;
            }
          }
        `
      }} />
    </section>
  );
}