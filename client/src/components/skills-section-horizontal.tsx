import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Zap, Cloud, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    title: "Programming & Scripting Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "C++", "HTML5", "CSS3", "Bash", "XML", "JSON"],
    colors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-indigo-100 text-indigo-800"]
  },
  {
    title: "Frontend Development & UI Technologies",
    icon: Palette,
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS", "Responsive Web Design", "DOM Manipulation", "Component-Based Architecture", "State Management", "UI Prototyping", "Figma to Code Conversion"],
    colors: ["bg-cyan-100 text-cyan-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-green-100 text-green-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "Backend Development & API Integration",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "API Testing (Postman)", "CRUD Operations", "Authentication & Authorization Workflows"],
    colors: ["bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Databases & Cloud Storage",
    icon: Cloud,
    skills: ["MongoDB", "Firebase Realtime Database", "NoSQL Databases", "Firestore (basic)", "Data Persistence", "Cloud-Based Data Sync"],
    colors: ["bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-gray-100 text-gray-800", "bg-cyan-100 text-cyan-800"]
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV", "TensorFlow", "Keras", "TfidfVectorizer", "NLTK", "Mediapipe", "Data Preprocessing", "Data Visualization", "Regression", "Classification", "Clustering", "Model Training", "Accuracy Evaluation", "Supervised & Unsupervised Learning"],
    colors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-yellow-100 text-yellow-800"]
  },
  {
    title: "AI & Automation Tools",
    icon: Zap,
    skills: ["ChatGPT", "Gemini", "GitHub Copilot", "Notion AI", "Canva AI", "Midjourney", "AI Text Classification", "Prompt Engineering", "NLP Implementation"],
    colors: ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-gray-100 text-gray-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "DevOps, Hosting & Deployment",
    icon: Settings,
    skills: ["cPanel", "WHM", "Netlify", "Vercel", "FTP", "Git", "GitHub", "CI/CD Awareness", "DNS Management", "Domain Configuration", "Web Hosting Management", "WordPress CMS", "Google Workspace Admin"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-gray-100 text-gray-800"]
  },
  {
    title: "Marketing & Product Tools",
    icon: TrendingUp,
    skills: ["Facebook Ads Manager", "Meta Pixel", "A/B Testing", "Campaign Tracking", "Landing Page Deployment", "Ad Creative Coordination"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Networking & Systems",
    icon: Settings,
    skills: ["OSI Model", "TCP/IP", "DNS Configuration", "DHCP", "VPN Setup", "Port Management", "HTTP/HTTPS Protocols", "Basic Linux CLI", "Network Troubleshooting", "System Support"],
    colors: ["bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800", "bg-gray-100 text-gray-800"]
  }
];

export default function SkillsSection() {
  const { ref } = useScrollReveal();
  
  const highlightedTechs = [
    "React.js", "Python", "JavaScript", "Node.js", "MongoDB", "TensorFlow", 
    "Pandas", "Firebase", "HTML5", "CSS3", "Express.js", "Git", "GitHub"
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="section-reveal section-spacing-sm bg-gradient-to-b from-background/50 to-transparent"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl theme-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg theme-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and modern AI integration
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-4 md:p-6 hover:shadow-xl transition-all duration-500 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:ring-blue-500/20 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-3 md:mb-0">
                      <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-blue-700/40 transition-all duration-300">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-base md:text-lg theme-text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {category.title}
                        </h3>
                        <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-1 group-hover:w-12 md:group-hover:w-16 transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 md:mt-2">
                      {category.skills.length} skills
                    </div>
                  </div>
                  
                  {/* Horizontal Skills Layout */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const isHighlighted = highlightedTechs.includes(skill);
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.02 
                          }}
                          whileHover={{ scale: 1.08, y: -2 }}
                        >
                          <Badge 
                            variant={isHighlighted ? "default" : "secondary"}
                            className={`${
                              isHighlighted 
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg ring-2 ring-blue-500/20 font-semibold" 
                                : `${category.colors[skillIndex % category.colors.length]} dark:bg-opacity-20 dark:text-opacity-90`
                            } hover:shadow-md transition-all duration-300 font-medium px-2 md:px-3 py-1 md:py-1.5 cursor-pointer text-xs md:text-sm`}
                          >
                            {skill}
                            {isHighlighted && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="ml-1 md:ml-1.5 w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"
                              />
                            )}
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Technologies" },
              { number: "7+", label: "Years Experience" },
              { number: "15+", label: "Key Skills" },
              { number: "100%", label: "Passion" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-lg md:text-2xl font-bold theme-text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm theme-text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}