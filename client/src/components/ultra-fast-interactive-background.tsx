import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Code, Database, Cloud, Cpu, Zap, GitBranch, Server, Smartphone, Globe, Brain, 
  Settings, Terminal, Layers, Wifi, Lock, Monitor, Palette, FileCode, Package,
  Shield, Key, Boxes, Activity, BarChart
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
  { icon: BarChart, name: "Performance", color: "#4ECDC4" }
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

export default function UltraFastInteractiveBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ultra-optimized element generation
  const generateElements = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = window.navigator.hardwareConcurrency <= 4;
    const elementCount = isMobile ? (isLowEnd ? 8 : 12) : (isLowEnd ? 16 : 20);
    
    return Array.from({ length: elementCount }, (_, index) => ({
      id: index,
      iconData: techIcons[index % techIcons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: isMobile ? Math.random() * 16 + 12 : Math.random() * 20 + 14,
      duration: Math.random() * 30 + 25, // Slower for better performance
      delay: Math.random() * 2,
      opacity: Math.random() * 0.3 + 0.1
    }));
  }, []);

  // Ultra-optimized mouse handler with debouncing
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isVisible || !isLoaded) return;
    
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Only update if significant movement
    if (Math.abs(x - mousePosition.x) > 2 || Math.abs(y - mousePosition.y) > 2) {
      setMousePosition({ x, y });
    }
  }, [isVisible, isLoaded, mousePosition.x, mousePosition.y]);

  useEffect(() => {
    // Delayed initialization for instant page load
    const timer = setTimeout(() => {
      setElements(generateElements);
      setIsLoaded(true);
    }, 200);

    // Intersection observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '50px' }
    );

    const backgroundElement = document.getElementById('ultra-fast-background');
    if (backgroundElement) observer.observe(backgroundElement);

    // Throttled mouse events for 60fps
    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    if (isVisible && isLoaded) {
      window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [generateElements, handleMouseMove, isVisible, isLoaded]);

  if (!isLoaded || !isVisible) {
    return <div id="ultra-fast-background" className="interactive-bg" />;
  }

  return (
    <div 
      id="ultra-fast-background" 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10 interactive-bg"
      style={{ contain: 'strict' }}
    >
      {elements.map((element) => {
        const Icon = element.iconData.icon;
        const distance = Math.sqrt(
          Math.pow(element.x - mousePosition.x, 2) + 
          Math.pow(element.y - mousePosition.y, 2)
        );
        const scale = distance < 15 ? 1.3 : 1;
        const dynamicOpacity = distance < 20 ? element.opacity * 1.5 : element.opacity;

        return (
          <motion.div
            key={element.id}
            className="absolute animate-fast"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              color: element.iconData.color,
              opacity: dynamicOpacity,
              transform: `scale(${scale}) translateZ(0)`,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon 
              size={element.size} 
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))',
                backfaceVisibility: 'hidden'
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}