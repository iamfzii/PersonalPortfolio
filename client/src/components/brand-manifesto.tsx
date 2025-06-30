import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Lightbulb, Users, Rocket, Zap, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const brandValues = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Technology is my canvas. Every line of code is painted with genuine enthusiasm for creating solutions that matter.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-900/20"
  },
  {
    icon: Target,
    title: "Purpose-Focused",
    description: "I don't just build features—I solve real problems. Every project starts with understanding the human need behind it.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "The best solutions come from curious minds. I embrace new technologies and approaches that push boundaries.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Technology serves people, not the other way around. I design with empathy and build with accessibility in mind.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  }
];

const manifesto = {
  quote: "I believe technology should be a bridge, not a barrier. It should amplify human potential, not replace human connection.",
  mission: "To transform complex problems into elegant solutions while never forgetting the human story behind every line of code.",
  vision: "A world where technology enhances every interaction, empowers every user, and creates meaningful impact in people's lives."
};

export default function BrandManifesto() {
  const { ref } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="section-spacing theme-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl animate-float-gentle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="content-container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 rounded-full font-semibold mb-6 inline-flex items-center gap-2">
              <Star className="w-4 h-4 animate-pulse" />
              My Philosophy
            </Badge>
            
            <h2 className="font-heading font-bold heading-lg theme-text-primary mb-6">
              Building Technology with
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Heart & Purpose</span>
            </h2>
          </motion.div>

          {/* Manifesto Quote */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="relative theme-surface rounded-3xl shadow-2xl border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 md:p-12 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 overflow-hidden">
              <div className="absolute top-6 left-8">
                <Quote className="w-12 h-12 text-blue-500/20 transform rotate-180" />
              </div>
              <div className="relative">
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl theme-text-primary font-medium leading-relaxed mb-6">
                    {manifesto.quote}
                  </p>
                  <footer className="flex items-center justify-center gap-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="theme-text-secondary font-semibold">Muhammad Fazeel</span>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </footer>
                </blockquote>
              </div>
              <div className="absolute bottom-6 right-8">
                <Quote className="w-12 h-12 text-purple-500/20" />
              </div>
            </Card>
          </motion.div>

          {/* Brand Values Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            {brandValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className={`h-full theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 hover:shadow-2xl transition-all duration-500 hover:ring-blue-500/20 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${value.bgColor} rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-xl theme-text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {value.title}
                          </h3>
                          <div className={`w-16 h-1 bg-gradient-to-r ${value.color} rounded-full group-hover:w-24 transition-all duration-300`} />
                        </div>
                      </div>
                      
                      <p className="theme-text-secondary leading-relaxed group-hover:theme-text-primary transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission & Vision */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 group hover:shadow-xl transition-all duration-300 hover:ring-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg theme-text-primary">Mission</h3>
              </div>
              <p className="theme-text-secondary leading-relaxed">
                {manifesto.mission}
              </p>
            </Card>

            <Card className="theme-surface rounded-2xl shadow-lg border-0 ring-1 ring-black/5 dark:ring-white/10 p-8 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 group hover:shadow-xl transition-all duration-300 hover:ring-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg theme-text-primary">Vision</h3>
              </div>
              <p className="theme-text-secondary leading-relaxed">
                {manifesto.vision}
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}