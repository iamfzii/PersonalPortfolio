import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Zap, Cloud, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useOptimizedScrollReveal } from "@/hooks/use-optimized-scroll-reveal";
import { useMemo } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
    colors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Palette,
    skills: ["React.js", "Node.js", "Express.js", "TensorFlow", "Pandas"],
    colors: ["bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Firebase", "MongoDB", "Git", "GitHub", "AWS"],
    colors: ["bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-gray-100 text-gray-800", "bg-orange-100 text-orange-800"]
  },
  {
    title: "Technical Operations & Soft Skills",
    icon: TrendingUp,
    skills: ["Project Leadership", "Process Optimization", "Team Coordination", "Problem Solving", "Technical Communication", "Stakeholder Management"],
    colors: ["bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-teal-100 text-teal-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"]
  }
];

export default function SkillsSection() {
  const { elementRef, animationClass } = useOptimizedScrollReveal({
    enableInstantLoad: true,
    animationClass: 'animate-fade-in-up-fast'
  });
  
  const highlightedTechs = useMemo(() => [
    "React.js", "Python", "JavaScript", "Node.js", "MongoDB", "TensorFlow", 
    "Pandas", "Firebase", "Git", "GitHub"
  ], []);

  // Memoized animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  }), []);

  const badgeVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  }), []);

  return (
    <section
      id="skills"
      ref={elementRef}
      className={`section-reveal section-spacing-sm bg-gradient-to-b from-background/50 to-transparent content-section fast-load ${animationClass}`}
    >
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl theme-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg theme-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and modern AI integration
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 md:space-y-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-4 md:p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:ring-blue-500/20 will-change-transform">
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
                  
                  {/* Optimized Horizontal Skills Layout */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const isHighlighted = highlightedTechs.includes(skill);
                      return (
                        <motion.div
                          key={skill}
                          variants={badgeVariants}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="will-change-transform"
                        >
                          <Badge 
                            variant={isHighlighted ? "default" : "secondary"}
                            className={`${
                              isHighlighted 
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg ring-2 ring-blue-500/20 font-semibold" 
                                : `${category.colors[skillIndex % category.colors.length]} dark:bg-opacity-20 dark:text-opacity-90`
                            } hover:shadow-md transition-all duration-200 font-medium px-2 md:px-3 py-1 md:py-1.5 cursor-pointer text-xs md:text-sm`}
                          >
                            {skill}
                            {isHighlighted && (
                              <div className="ml-1 md:ml-1.5 w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full animate-pulse" />
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
        </motion.div>


      </div>
    </section>
  );
}