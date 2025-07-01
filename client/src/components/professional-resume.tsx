import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download } from "lucide-react";

export default function ProfessionalResume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      {/* Download Button - Hidden in print */}
      <div className="max-w-4xl mx-auto px-6 mb-6 print:hidden">
        <Button 
          onClick={handleDownload}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg print:shadow-none">
        <div className="p-8 print:p-6">
          
          {/* Header Section */}
          <header className="text-center mb-8 pb-6 border-b-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Muhammad Fazeel
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Technical Operations Coordinator
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
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
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dynamic Technical Operations Coordinator with 7+ years of experience in Computer Science & IT. 
              Specializes in transforming complex technical challenges into streamlined business solutions through 
              strategic coordination and adaptive problem-solving. Proven track record in project management, 
              technical support, and team leadership across diverse technology environments.
            </p>
          </section>

          {/* Core Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    "JavaScript", "Python", "React", "Node.js", "MongoDB", "PostgreSQL", 
                    "Docker", "Git", "Linux", "AWS", "Firebase", "RESTful APIs"
                  ].map((skill) => (
                    <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Project Management</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Agile/Scrum", "Sprint Planning", "Project Coordination", 
                    "Timeline Management", "Risk Assessment", "Quality Assurance"
                  ].map((skill) => (
                    <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Technical Support</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    "System Administration", "Troubleshooting", "Network Configuration", 
                    "Performance Optimization", "Documentation", "User Training"
                  ].map((skill) => (
                    <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Work Experience
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Technical Operations Coordinator</h3>
                    <p className="text-gray-600 dark:text-gray-400">Capestone Shipping LLC, Dubai</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  <li>Coordinated technical operations across multiple shipping and logistics systems</li>
                  <li>Implemented process improvements that reduced operational downtime by 30%</li>
                  <li>Led cross-functional teams in system integration and deployment projects</li>
                  <li>Developed technical documentation and training materials for operational procedures</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Full Stack Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">GODEV Solutions</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">2020 - 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB</li>
                  <li>Collaborated with design teams to implement responsive user interfaces</li>
                  <li>Optimized application performance and implemented security best practices</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Technical Support Specialist</h3>
                    <p className="text-gray-600 dark:text-gray-400">Various IT Companies</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">2017 - 2020</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
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
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Key Projects
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Messaging Android Application</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Full-stack messaging solution with real-time communication</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Technologies: React Native, Node.js, Socket.io, MongoDB</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Tax Calculator Web Application</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Comprehensive tax calculation tool with multiple jurisdiction support</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Technologies: React, Python, Flask, PostgreSQL</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Logistics Dashboard</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Real-time tracking and management system for shipping operations</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Technologies: React, Node.js, Express, MongoDB, Chart.js</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">ML-Based Fake News Classification</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Machine learning model for automated fake news detection</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Technologies: Python, TensorFlow, NLP, Scikit-learn</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Education
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-400">National College of Business Administration & Economics (NCBA&E)</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">2019 - 2023</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Diploma in Information Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">Government College of Technology (GCT)</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">2017 - 2019</span>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
              Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Cloud Computing Fundamentals</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services (AWS) • 2023</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Project Management Professional</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Project Management Institute • 2022</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Agile Development Practices</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Scrum Alliance • 2022</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Full Stack Web Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">FreeCodeCamp • 2021</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-6 {
            padding: 1.5rem !important;
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
      `}</style>
    </div>
  );
}