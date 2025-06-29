import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Zap, 
  GitBranch, 
  Server, 
  Smartphone,
  Globe,
  Brain,
  Settings,
  Terminal,
  Layers,
  Wifi,
  Lock
} from "lucide-react";

const techIcons = [
  { icon: Code, name: "React", color: "#61DAFB" },
  { icon: Database, name: "MongoDB", color: "#47A248" },
  { icon: Cloud, name: "AWS", color: "#FF9900" },
  { icon: Cpu, name: "Python", color: "#3776AB" },
  { icon: Zap, name: "Node.js", color: "#339933" },
  { icon: GitBranch, name: "Git", color: "#F05032" },
  { icon: Server, name: "Express", color: "#000000" },
  { icon: Smartphone, name: "Mobile", color: "#007ACC" },
  { icon: Globe, name: "Web", color: "#1572B6" },
  { icon: Brain, name: "AI/ML", color: "#FF6F00" },
  { icon: Settings, name: "DevOps", color: "#326CE5" },
  { icon: Terminal, name: "CLI", color: "#4EAA25" },
  { icon: Layers, name: "Docker", color: "#2496ED" },
  { icon: Wifi, name: "API", color: "#009639" },
  { icon: Lock, name: "Security", color: "#CC342D" }
];

interface FloatingElement {
  id: number;
  iconData: typeof techIcons[0];
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function InteractiveBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Generate floating tech icons
      for (let i = 0; i < 20; i++) {
        const iconData = techIcons[Math.floor(Math.random() * techIcons.length)];
        newElements.push({
          id: i,
          iconData,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 16,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      
      setElements(newElements);
    };

    generateElements();
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20 dark:from-blue-900/5 dark:via-purple-900/5 dark:to-pink-900/5" />
      
      {/* Floating tech icons */}
      {elements.map((element) => {
        const IconComponent = element.iconData.icon;
        
        // Calculate distance from mouse for interaction effect
        const distance = Math.sqrt(
          Math.pow(element.x - mousePosition.x, 2) + 
          Math.pow(element.y - mousePosition.y, 2)
        );
        const interactionRadius = 15;
        const isNearMouse = distance < interactionRadius;
        
        return (
          <motion.div
            key={element.id}
            className="absolute group"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: isNearMouse ? [1.2, 1.8, 1.2] : [0.8, 1.2, 0.8],
              opacity: isNearMouse 
                ? [element.opacity * 2, element.opacity * 3, element.opacity * 2]
                : [element.opacity, element.opacity * 1.5, element.opacity],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <div className="relative">
              <IconComponent 
                size={element.size} 
                style={{ color: element.iconData.color }}
                className="drop-shadow-lg filter transition-all duration-300"
              />
              
              {/* Tooltip on hover */}
              {isNearMouse && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap backdrop-blur-sm border border-white/20"
                >
                  {element.iconData.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Enhanced mouse follower with trail effect */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-50, 50],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}