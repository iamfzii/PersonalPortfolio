import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Zap, Cloud, Settings, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "High-Performance Programming Stack",
    icon: Code,
    skills: ["Python Advanced", "JavaScript ES6+", "TypeScript", "React.js", "Node.js", "Java Enterprise", "C++ Systems", "HTML5 APIs", "CSS3 Grid/Flexbox"]
  },
  {
    title: "Modern Frontend Technologies", 
    icon: Palette,
    skills: ["React.js Advanced", "Next.js", "Tailwind CSS", "Vite Build Tool", "Component Architecture", "State Management (Redux)", "API Integration", "Responsive Design", "Progressive Web Apps"]
  },
  {
    title: "Enterprise Backend & API Systems",
    icon: Server,
    skills: ["Node.js Microservices", "Express.js", "RESTful API Design", "GraphQL", "API Security", "Database Optimization", "Server Architecture", "Postman Advanced"]
  },
  {
    title: "Cloud Infrastructure & Databases",
    icon: Cloud,
    skills: ["AWS Cloud Services", "Firebase Advanced", "MongoDB Atlas", "PostgreSQL", "Database Scaling", "Cloud Security", "Serverless Functions", "CDN Management"]
  },
  {
    title: "AI & Machine Learning Technologies",
    icon: Brain,
    skills: ["TensorFlow Advanced", "PyTorch", "Scikit-learn", "OpenCV Computer Vision", "NLP with Transformers", "Deep Learning", "Model Deployment", "MLOps", "Data Pipeline Architecture"]
  },
  {
    title: "Advanced AI & Automation Systems",
    icon: Zap,
    skills: ["GPT API Integration", "Prompt Engineering", "AI Workflow Automation", "GitHub Copilot", "Machine Learning APIs", "Computer Vision", "Natural Language Processing", "AI Model Training"]
  },
  {
    title: "DevOps & Cloud Deployment", 
    icon: Settings,
    skills: ["Docker Containerization", "Kubernetes", "CI/CD Pipelines", "AWS Deployment", "Git Advanced", "Infrastructure as Code", "Monitoring Systems", "Load Balancing"]
  },
  {
    title: "Enterprise Project Management",
    icon: TrendingUp,
    skills: ["Agile Scrum Master", "JIRA Advanced", "Product Roadmapping", "Stakeholder Management", "Technical Team Leadership", "Sprint Planning", "Risk Management", "ROI Analysis"]
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
    <section id="skills" className="section-spacing-sm section-secondary">
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
              <Card key={index} className="enhanced-card enhanced-hover group p-6 rounded-xl border-0 shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="typography-h3 text-slate-900 dark:text-white leading-tight">
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