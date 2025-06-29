import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Code, Database, Cloud, Cpu, Zap, GitBranch, Server, Smartphone, Globe, Brain, 
  Settings, Terminal, Layers, Wifi, Lock, Monitor, Palette, FileCode, Package,
  Shield, Key, Boxes, Activity, BarChart, Users, Mail, Search, Bot, Rocket,
  Wrench, Puzzle, Target, Star, Diamond, Hexagon, Triangle, Circle
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
  { icon: Lock, name: "Security", color: "#CC342D" },
  { icon: Monitor, name: "Frontend", color: "#E34F26" },
  { icon: Palette, name: "Design", color: "#FF61F6" },
  { icon: FileCode, name: "TypeScript", color: "#3178C6" },
  { icon: Package, name: "NPM", color: "#CB3837" },
  { icon: Shield, name: "Auth", color: "#4285F4" },
  { icon: Key, name: "JWT", color: "#000000" },
  { icon: Boxes, name: "Kubernetes", color: "#326CE5" },
  { icon: Activity, name: "Analytics", color: "#FF6B6B" },
  { icon: BarChart, name: "Charts", color: "#4ECDC4" },
  { icon: Users, name: "Team", color: "#45B7D1" },
  { icon: Mail, name: "Email", color: "#EA4335" },
  { icon: Search, name: "SEO", color: "#34A853" },
  { icon: Bot, name: "Automation", color: "#FF9500" },
  { icon: Rocket, name: "Deploy", color: "#8B5CF6" },
  { icon: Wrench, name: "Tools", color: "#6B7280" },
  { icon: Puzzle, name: "Integration", color: "#10B981" },
  { icon: Target, name: "Goals", color: "#F59E0B" },
  { icon: Star, name: "Featured", color: "#FBBF24" },
  { icon: Diamond, name: "Premium", color: "#8B5CF6" },
  { icon: Hexagon, name: "Framework", color: "#06B6D4" },
  { icon: Triangle, name: "Architecture", color: "#84CC16" },
  { icon: Circle, name: "Core", color: "#EF4444" }
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
  amplitude: number;
}

export default function InteractiveBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const generateElements = useMemo(() => () => {
    const newElements: FloatingElement[] = [];
    
    // Generate more floating tech icons for richer background
    for (let i = 0; i < 35; i++) {
      const iconData = techIcons[Math.floor(Math.random() * techIcons.length)];
      newElements.push({
        id: i,
        iconData,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 18 + 14,
        duration: Math.random() * 25 + 20, // Slower, smoother animations
        delay: Math.random() * 8,
        opacity: Math.random() * 0.25 + 0.08,
        amplitude: Math.random() * 30 + 15,
      });
    }
    
    return newElements;
  }, []);

  useEffect(() => {
    setElements(generateElements());
  }, [generateElements]);

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
      {/* Enhanced gradient background with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/15 via-purple-50/15 via-pink-50/15 to-orange-50/15 dark:from-blue-900/3 dark:via-purple-900/3 dark:via-pink-900/3 dark:to-orange-900/3" />
      
      {/* Additional ambient layer */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-50/5 to-transparent dark:from-transparent dark:via-blue-900/2 dark:to-transparent" />
      
      {/* Enhanced floating tech icons */}
      {elements.map((element) => {
        const IconComponent = element.iconData.icon;
        
        // Calculate distance from mouse for interaction effect
        const distance = Math.sqrt(
          Math.pow(element.x - mousePosition.x, 2) + 
          Math.pow(element.y - mousePosition.y, 2)
        );
        const interactionRadius = 12;
        const isNearMouse = distance < interactionRadius;
        
        return (
          <motion.div
            key={element.id}
            className="absolute group will-change-transform"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-element.amplitude/2, element.amplitude/2, -element.amplitude/2],
              x: [-element.amplitude/3, element.amplitude/3, -element.amplitude/3],
              rotate: [0, 360],
              scale: isNearMouse ? [1.3, 2, 1.3] : [0.7, 1.1, 0.7],
              opacity: isNearMouse 
                ? [element.opacity * 3, element.opacity * 4, element.opacity * 3]
                : [element.opacity, element.opacity * 1.8, element.opacity],
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
                className="drop-shadow-lg filter transition-all duration-500 hover:drop-shadow-2xl"
              />
              
              {/* Enhanced tooltip with better positioning */}
              {isNearMouse && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 10 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap backdrop-blur-lg border border-white/20 shadow-2xl z-10"
                >
                  {element.iconData.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Enhanced mouse follower with multiple layers */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-pink-400/25 blur-md"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary mouse follower */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-sm"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Enhanced ambient particles with varied sizes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'w-2 h-2 bg-blue-400/15' : 
            i % 3 === 1 ? 'w-1.5 h-1.5 bg-purple-400/15' : 
            'w-1 h-1 bg-pink-400/15'
          } dark:bg-opacity-10`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-60, 60],
            x: [-20, 20],
            opacity: [0, 0.6, 0],
            scale: [0.3, 1.2, 0.3],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
      
      {/* Geometric floating shapes for additional visual interest */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${
            i % 3 === 0 ? 'w-6 h-6 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full' :
            i % 3 === 1 ? 'w-4 h-4 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rotate-45' :
            'w-5 h-5 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded'
          } blur-sm`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-40, 40],
            x: [-15, 15],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}