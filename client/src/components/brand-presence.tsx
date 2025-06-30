import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BrandPresenceProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrandPresence({ children, className = "" }: BrandPresenceProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={`brand-presence-container ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
      
      {/* Subtle brand signature */}
      <div className="absolute top-2 right-2 opacity-20 hover:opacity-60 transition-opacity duration-300">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full brand-pulse"></div>
      </div>
      
      {/* Interactive brand element */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            position: 'fixed',
            zIndex: 9999
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="w-4 h-4 border border-blue-400/50 rounded-full"></div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Brand impression text component with typewriter effect
export function BrandText({ 
  text, 
  className = "", 
  delay = 0,
  speed = 50
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={`brand-text ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-blue-500 ml-1">|</span>
      )}
    </span>
  );
}

// Interactive skill badge with brand elements
export function BrandSkillBadge({ 
  children, 
  className = "",
  variant = "primary"
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}) {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    secondary: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600",
    accent: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
  };

  return (
    <motion.div
      className={`${variants[variant]} text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-magnetic ripple-effect trust-indicator transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="hover-highlight">{children}</span>
    </motion.div>
  );
}

// Floating brand elements for visual interest
export function FloatingBrandElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}