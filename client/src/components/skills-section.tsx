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
    title: "Project Management & Agile Tools",
    icon: TrendingUp,
    skills: ["Jira", "Trello", "Asana", "ClickUp", "Slack", "Google Sheets", "Agile Methodologies", "Sprint Planning", "Task Tracking", "Kanban Boards", "Team Collaboration"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800", "bg-yellow-100 text-yellow-800"]
  },
  {
    title: "Marketing & Product Tools",
    icon: Server,
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

  return (
    <section
      id="skills"
      ref={ref}
      className="section-reveal section-spacing bg-gradient-to-b from-background/50 to-transparent"
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold heading-lg mb-4 theme-text-primary">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <Card className="h-full theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 hover:shadow-xl transition-all duration-300 hover:ring-blue-500/20 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-blue-700/40 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold heading-sm theme-text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`px-4 py-2 body-sm font-medium transition-all duration-200 cursor-pointer hover:shadow-md border-0 ${
                            category.colors[skillIndex % category.colors.length]
                          } hover:scale-105 hover:bg-opacity-80`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="heading-md font-bold theme-text-primary mb-1">7+</div>
                <div className="body-sm theme-text-secondary">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <div className="heading-md font-bold theme-text-primary mb-1">50+</div>
                <div className="body-sm theme-text-secondary">Technologies</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <div className="heading-md font-bold theme-text-primary mb-1">8</div>
                <div className="body-sm theme-text-secondary">Specializations</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
