import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Calculator, FileText, Hand, BarChart3, Ship, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Messaging Android Application",
    icon: Smartphone,
    description: "Designed native Android UI, implemented RecyclerView for dynamic message loading, applied custom XML layouts, and followed Material Design principles.",
    techStack: ["Java", "Android Studio", "XML", "Material Design", "RecyclerView"],
    techColors: ["bg-orange-100 text-orange-800", "bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-gray-100 text-gray-800"]
  },
  {
    title: "Tax Calculator Web App",
    icon: Calculator,
    description: "Converted static Figma designs into responsive components, implemented real-time form logic, and applied React state management for user input handling.",
    techStack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Figma"],
    techColors: ["bg-cyan-100 text-cyan-800", "bg-yellow-100 text-yellow-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "Fake News Classification System",
    icon: FileText,
    description: "Preprocessed text data, applied TF-IDF vectorization, trained logistic regression model, and evaluated classification accuracy.",
    techStack: ["Python", "Scikit-learn", "NLTK", "TfidfVectorizer"],
    techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Hand Gesture Presentation Controller",
    icon: Hand,
    description: "Captured hand landmarks using Mediapipe, integrated real-time gesture recognition with screen control automation.",
    techStack: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"]
  },
  {
    title: "Logistics Dashboard (Internship)",
    icon: BarChart3,
    description: "Built frontend dashboard views, integrated REST APIs for backend data flow, and participated in feature coordination during development sprints.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios"],
    techColors: ["bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"]
  },
  {
    title: "Titanic Survival Prediction",
    icon: Ship,
    description: "Cleaned and visualized dataset, applied logistic regression, analyzed model performance using accuracy and confusion matrix.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
    techColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800"]
  }
];

export default function ProjectsSection() {
  const { ref } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="section-reveal section-spacing"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold heading-lg mb-4 theme-text-primary">
            Featured Projects
          </h2>
          <p className="body-lg theme-text-secondary max-w-3xl mx-auto">
            A portfolio of applications showcasing full-stack development, machine learning, 
            and user experience design across web and mobile platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:ring-blue-500/20 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:-translate-y-2">
                  {/* Header with gradient background */}
                  <div className="relative p-6 pb-4 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold heading-sm theme-text-primary mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-4 flex flex-col flex-1">
                    <p className="body-base theme-text-secondary mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`px-3 py-1 body-sm font-medium transition-all duration-200 hover:scale-105 border-0 ${
                            project.techColors[techIndex % project.techColors.length]
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Project Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
              <div className="heading-md font-bold theme-text-primary mb-2">6</div>
              <div className="body-base theme-text-secondary">Projects Completed</div>
            </Card>
          </div>
          <div className="text-center">
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
              <div className="heading-md font-bold theme-text-primary mb-2">15+</div>
              <div className="body-base theme-text-secondary">Technologies Used</div>
            </Card>
          </div>
          <div className="text-center">
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
              <div className="heading-md font-bold theme-text-primary mb-2">100%</div>
              <div className="body-base theme-text-secondary">Success Rate</div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
