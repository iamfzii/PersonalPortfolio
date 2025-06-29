import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "NCBA&E (National College of Business Administration & Economics)",
    period: "2019 - 2023",
    type: "Bachelor's",
    description: "Comprehensive computer science education covering software development, algorithms, data structures, and system design. Specialized coursework in web development, database management, and software engineering principles.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    degree: "Diploma of Computer Information Technology",
    institution: "GCT Iqbal Town Lahore",
    period: "2016 - 2019",
    type: "Diploma",
    description: "Foundation in computer information technology with focus on programming fundamentals, computer networks, and information systems. Built strong technical foundation for advanced computer science studies.",
    icon: Award,
    gradient: "from-green-500 to-teal-600"
  }
];

const typeColors = {
  "Bachelor's": "bg-blue-100 text-blue-800",
  "Diploma": "bg-green-100 text-green-800"
};

export default function EducationSection() {
  const { ref } = useScrollReveal();

  return (
    <section
      id="education"
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
            Academic Foundation
          </h2>
          <p className="body-lg theme-text-secondary max-w-3xl mx-auto">
            Strong educational background in computer science and information technology, 
            providing the theoretical foundation for practical expertise.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                <Card className="theme-surface rounded-2xl shadow-lg p-6 card-hover theme-border border">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="font-heading font-semibold text-xl theme-text-primary">
                          {edu.degree}
                        </h3>
                        <Badge className={`${typeColors[edu.type as keyof typeof typeColors]} text-sm font-medium`}>
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="theme-primary font-medium mb-2">{edu.institution}</p>
                      <p className="theme-text-secondary text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
