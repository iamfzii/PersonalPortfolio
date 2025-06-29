import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Code, Database, Cloud, Cpu, Zap, GitBranch, Server, Smartphone, Globe, Brain, 
  Settings, Terminal, Layers, Wifi, Lock, Monitor, Palette, FileCode, Package,
  Shield, Key, Boxes, Activity, BarChart, Users, Mail, Search, Bot, Rocket
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
  { icon: Rocket, name: "Deploy", color: "#8B5CF6" }
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReduced, setIsReduced] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);
    
    const handleChange = () => setIsReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Generate floating elements with memoization for performance
  const floatingElements = useMemo(() => {
    const elements: FloatingElement[] = [];
    const elementCount = window.innerWidth < 768 ? 20 : 35; // More icons for better visibility
    
    for (let i = 0; i < elementCount; i++) {
      elements.push({
        id: i,
        iconData: techIcons[i % techIcons.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 25, // 25-50px (larger for better visibility)
        duration: Math.random() * 25 + 30, // 30-55s (slightly faster)
        delay: Math.random() * 15,
        opacity: Math.random() * 0.15 + 0.08, // More visible: 0.08-0.23
      });
    }
    return elements;
  }, []);

  // Throttled mouse move handler for performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isReduced) return;
    
    // Throttle to 60fps max
    requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    });
  }, [isReduced]);

  useEffect(() => {
    if (isReduced) return;
    
    let timeoutId: NodeJS.Timeout;
    const throttledHandler = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // ~60fps
    };

    window.addEventListener("mousemove", throttledHandler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", throttledHandler);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove, isReduced]);

  if (isReduced) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-green-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-green-950/20" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Enhanced gradient background with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-green-50/40 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-green-950/30"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(34, 197, 94, 0.15) 100%)",
            "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 51, 234, 0.15) 100%)",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(34, 197, 94, 0.15) 100%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Ultra-subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.008]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Floating tech icons with minimal GPU usage */}
      {floatingElements.map((element) => {
        const IconComponent = element.iconData.icon;
        const distance = Math.sqrt(
          Math.pow((mousePosition.x * 100) - element.x, 2) + 
          Math.pow((mousePosition.y * 100) - element.y, 2)
        );
        const influence = Math.max(0, 1 - distance / 30); // Larger interaction radius
        const scale = 1 + influence * 0.4; // More pronounced scale on hover
        const additionalOpacity = influence * 0.2; // More visible opacity boost

        return (
          <motion.div
            key={element.id}
            className="absolute will-change-transform"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              transform: `scale(${scale})`,
            }}
            animate={{
              x: [0, 20, -10, 15, 0],
              y: [0, -15, 25, -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay,
            }}
          >
            <IconComponent
              className="w-full h-full drop-shadow-md"
              style={{
                color: element.iconData.color,
                opacity: Math.min(element.opacity + additionalOpacity, 0.35),
                filter: `drop-shadow(0 0 ${2 + influence * 4}px ${element.iconData.color}40)`,
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Enhanced animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-blue-400/30 dark:bg-blue-300/20 rounded-full shadow-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, -160],
              x: [0, Math.random() * 40 - 20, Math.random() * 20 - 10],
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 8, // 8-14s
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle connecting lines between nearby icons */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {floatingElements.slice(0, 8).map((element, index) => {
          const nextElement = floatingElements[(index + 1) % 8];
          const distance = Math.sqrt(
            Math.pow(element.x - nextElement.x, 2) + 
            Math.pow(element.y - nextElement.y, 2)
          );
          
          if (distance < 40) { // Only draw lines for nearby elements
            return (
              <motion.line
                key={`line-${element.id}-${nextElement.id}`}
                x1={`${element.x}%`}
                y1={`${element.y}%`}
                x2={`${nextElement.x}%`}
                y2={`${nextElement.y}%`}
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
}