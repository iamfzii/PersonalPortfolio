import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

// Lightweight tech icons for faster loading
const techIcons = [
  { name: "React", symbol: "⚛️", color: "#61dafb" },
  { name: "TypeScript", symbol: "TS", color: "#3178c6" },
  { name: "JavaScript", symbol: "JS", color: "#f7df1e" },
  { name: "Python", symbol: "🐍", color: "#3776ab" },
  { name: "Node.js", symbol: "🟢", color: "#339933" },
  { name: "AWS", symbol: "☁️", color: "#ff9900" },
  { name: "Docker", symbol: "🐳", color: "#2496ed" },
  { name: "Git", symbol: "🔗", color: "#f05032" },
  { name: "Firebase", symbol: "🔥", color: "#ffca28" },
  { name: "MongoDB", symbol: "🍃", color: "#47a248" },
  { name: "PostgreSQL", symbol: "🐘", color: "#336791" },
  { name: "Redis", symbol: "💎", color: "#dc382d" },
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
  
  // Reduce number of elements for faster loading
  const floatingElements = useMemo(() => {
    const count = window.innerWidth < 768 ? 8 : 12;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      iconData: techIcons[i % techIcons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 12,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  // Throttled mouse tracking for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const throttle = Date.now() % 3 === 0; // Only update every 3rd frame
    if (throttle) {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
      {floatingElements.map((element) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - element.x, 2) + 
          Math.pow(mousePosition.y - element.y, 2)
        );
        const proximity = Math.max(0, 30 - distance) / 30;
        
        return (
          <motion.div
            key={element.id}
            className="absolute will-change-transform"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              color: element.iconData.color,
              opacity: element.opacity + proximity * 0.3,
              transform: `scale(${1 + proximity * 0.2})`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.iconData.symbol}
          </motion.div>
        );
      })}
    </div>
  );
}