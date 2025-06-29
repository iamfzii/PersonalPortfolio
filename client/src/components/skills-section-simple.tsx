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
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
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