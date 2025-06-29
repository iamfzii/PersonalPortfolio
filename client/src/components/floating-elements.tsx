
import { motion } from "framer-motion";
import { Code, Palette, Cpu, Database, Globe, Zap, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: Code, color: "text-blue-500", size: "w-6 h-6" },
  { Icon: Palette, color: "text-purple-500", size: "w-5 h-5" },
  { Icon: Cpu, color: "text-green-500", size: "w-7 h-7" },
  { Icon: Database, color: "text-orange-500", size: "w-6 h-6" },
  { Icon: Globe, color: "text-cyan-500", size: "w-5 h-5" },
  { Icon: Zap, color: "text-yellow-500", size: "w-6 h-6" },
  { Icon: Heart, color: "text-red-500", size: "w-5 h-5" },
  { Icon: Star, color: "text-indigo-500", size: "w-4 h-4" },
];

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {Array.from({ length: 15 }).map((_, index) => {
        const IconData = floatingIcons[index % floatingIcons.length];
        return (
          <motion.div
            key={index}
            className="absolute opacity-20 dark:opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0,
            }}
            animate={{
              y: -100,
              rotate: 360,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
            }}
          >
            <IconData.Icon className={`${IconData.size} ${IconData.color}`} />
          </motion.div>
        );
      })}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
