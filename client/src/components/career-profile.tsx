import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, Briefcase, Clipboard, Package, Headphones } from "lucide-react";

export default function CareerProfile() {
  const { ref } = useScrollReveal();



  return (
    <div
      id="career"
      ref={ref}
      className="section-reveal section-spacing-sm section-primary"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4 hover-visible">
            Career Profile
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Transforming technical challenges into business solutions through strategic coordination
          </p>
        </motion.div>

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
                
                <p className="body-base leading-relaxed theme-text-secondary mb-6">Dynamic Technical Operations Coordinator who transforms complex technical challenges into streamlined business solutions. With 7+ years of hands-on experience, I bridge the gap between technical innovation and operational excellence, driving project success through strategic coordination and adaptive problem-solving.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Project Management
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Product Analysis
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Tech Support
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Team Leadership
                    </Badge>
                  </div>
                </div>


              </div>
            </Card>
          </motion.div>


        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
            <h3 className="font-heading font-semibold heading-sm theme-text-primary mb-6 text-center">
              Core Competencies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Project Management",
                  icon: Clipboard,
                  items: ["Agile Methodologies", "Sprint Planning", "Project Coordination", "Timeline Management"]
                },
                {
                  title: "Product Management",
                  icon: Package, 
                  items: ["Requirements Analysis", "Stakeholder Communication", "Product Strategy", "Feature Planning"]
                },
                {
                  title: "Technical Support",
                  icon: Headphones,
                  items: ["System Troubleshooting", "Performance Monitoring", "Quality Assurance", "User Support"]
                }
              ].map((competency, index) => {
                const IconComponent = competency.icon;
                return (
                  <motion.div 
                    key={competency.title} 
                    className="space-y-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <h4 className="font-semibold theme-text-primary body-lg flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
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
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
