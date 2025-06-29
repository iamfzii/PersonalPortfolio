import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Zap, Cloud, Settings, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Scripting Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "C++", "HTML5", "CSS3", "Bash", "XML", "JSON"]
  },
  {
    title: "Frontend Development & UI Technologies", 
    icon: Palette,
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS", "Responsive Web Design", "DOM Manipulation", "Component-Based Architecture", "State Management", "UI Prototyping", "Figma to Code Conversion"]
  },
  {
    title: "Backend Development & API Integration",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "API Testing (Postman)", "CRUD Operations", "Authentication & Authorization Workflows"]
  },
  {
    title: "Databases & Cloud Storage",
    icon: Cloud,
    skills: ["MongoDB", "Firebase Realtime Database", "NoSQL Databases", "Firestore (basic)", "Data Persistence", "Cloud-Based Data Sync"]
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV", "TensorFlow", "Keras", "TfidfVectorizer", "NLTK", "Mediapipe", "Data Preprocessing", "Data Visualization", "Regression", "Classification", "Clustering", "Model Training", "Accuracy Evaluation", "Supervised & Unsupervised Learning"]
  },
  {
    title: "AI & Automation Tools",
    icon: Zap,
    skills: ["ChatGPT", "Gemini", "GitHub Copilot", "Notion AI", "Canva AI", "Midjourney", "AI Text Classification", "Prompt Engineering", "NLP Implementation"]
  },
  {
    title: "DevOps, Hosting & Deployment", 
    icon: Settings,
    skills: ["cPanel", "WHM", "Netlify", "Vercel", "FTP", "Git", "GitHub", "CI/CD Awareness", "DNS Management", "Domain Configuration", "Web Hosting Management", "WordPress CMS", "Google Workspace Admin"]
  },
  {
    title: "Project Management & Agile Tools",
    icon: TrendingUp,
    skills: ["Jira", "Trello", "Asana", "ClickUp", "Slack", "Google Sheets", "Agile Methodologies", "Sprint Planning", "Task Tracking", "Kanban Boards", "Team Collaboration"]
  },
  {
    title: "Marketing & Product Tools",
    icon: Server,
    skills: ["Facebook Ads Manager", "Meta Pixel", "A/B Testing", "Campaign Tracking", "Landing Page Deployment", "Ad Creative Coordination"]
  },
  {
    title: "Networking & Systems",
    icon: Settings,
    skills: ["OSI Model", "TCP/IP", "DNS Configuration", "DHCP", "VPN Setup", "Port Management", "HTTP/HTTPS Protocols", "Basic Linux CLI", "Network Troubleshooting", "System Support"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing section-secondary">
      <div className="content-container">
        <div className="section-header">
          <h2 className="section-title text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="enhanced-card group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}