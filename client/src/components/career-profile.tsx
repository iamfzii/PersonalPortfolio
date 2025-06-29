import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CareerProfile() {
  const { ref } = useScrollReveal();

  const highlights = [
    { number: "7+", label: "Years Experience", description: "In Computer Science & IT" },
    { number: "50+", label: "Projects Delivered", description: "Across multiple domains" },
    { number: "15+", label: "Technologies", description: "Mastered and applied" },
    { number: "100%", label: "Success Rate", description: "In project delivery" }
  ];

  return (
    <div
      id="career"
      ref={ref}
      className="section-reveal section-spacing-sm section-primary"
    >
      <div className="content-container">
        <div className="section-header">
          <h2 className="section-title text-slate-900 dark:text-white">
            Career Profile
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                  <h3 className="font-heading font-semibold heading-sm theme-text-primary">
                    Career Summary
                  </h3>
                </div>
                
                <p className="body-base leading-relaxed theme-text-secondary">
                  Technical Operations Coordinator with 7 years of Computer Science & IT background and experience facilitating the execution of full-stack applications, AI workflows, and cloud-based solutions. Adept at translating functional requirements into coordinated technical deliverables, supporting development cycles, and troubleshooting deployment pipelines. Demonstrated ability to work across system layers—from API integrations and database management to user-facing components and machine learning models—while maintaining operational continuity across tools, teams, and timelines.
                </p>


              </div>
            </Card>
          </motion.div>

          {/* Achievement Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="text-center theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 group hover:ring-blue-500/20">
                  <div className="heading-md font-bold theme-text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {highlight.number}
                  </div>
                  <div className="body-base font-semibold theme-text-primary mb-1">
                    {highlight.label}
                  </div>
                  <div className="body-sm theme-text-muted">
                    {highlight.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
            <h3 className="font-heading font-semibold heading-sm theme-text-primary mb-6 text-center">
              Core Competencies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Project Management",
                  items: ["Agile Methodologies", "Sprint Planning", "Project Coordination", "Timeline Management"]
                },
                {
                  title: "Product Management", 
                  items: ["Requirements Analysis", "Stakeholder Communication", "Product Strategy", "Feature Planning"]
                },
                {
                  title: "Technical Support",
                  items: ["System Troubleshooting", "Performance Monitoring", "Quality Assurance", "User Support"]
                }
              ].map((competency, index) => (
                <motion.div 
                  key={competency.title} 
                  className="space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-semibold theme-text-primary body-lg flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    <span>{competency.title}</span>
                  </h4>
                  <ul className="space-y-2">
                    {competency.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2 group">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                        <span className="body-sm theme-text-secondary group-hover:theme-text-primary transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
