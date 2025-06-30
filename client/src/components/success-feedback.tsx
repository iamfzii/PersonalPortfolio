import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Heart, Sparkles, Trophy, Zap } from "lucide-react";

interface SuccessFeedbackProps {
  message: string;
  type?: "success" | "achievement" | "connection" | "celebration";
  duration?: number;
  onComplete?: () => void;
}

const feedbackTypes = {
  success: {
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    particles: [Star, Sparkles],
    message: "Success!"
  },
  achievement: {
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    particles: [Star, Zap],
    message: "Achievement Unlocked!"
  },
  connection: {
    icon: Heart,
    color: "from-pink-500 to-red-500",
    particles: [Heart, Sparkles],
    message: "Connection Made!"
  },
  celebration: {
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    particles: [Star, Sparkles, Trophy],
    message: "Awesome!"
  }
};

export default function SuccessFeedback({ 
  message, 
  type = "success", 
  duration = 3000,
  onComplete 
}: SuccessFeedbackProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [particles, setParticles] = useState<Array<{id: number, icon: React.ElementType, x: number, y: number, delay: number}>>([]);

  const feedbackConfig = feedbackTypes[type];
  const IconComponent = feedbackConfig.icon;

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      icon: feedbackConfig.particles[Math.floor(Math.random() * feedbackConfig.particles.length)],
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      delay: Math.random() * 0.5
    }));
    setParticles(newParticles);

    // Auto-hide after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete, feedbackConfig.particles]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: -50 }}
          transition={{ 
            duration: 0.5, 
            type: "spring", 
            bounce: 0.4 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />

          {/* Main feedback container */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.5, 0.8, 1],
              ease: "easeInOut"
            }}
          >
            {/* Main icon */}
            <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${feedbackConfig.color} flex items-center justify-center shadow-2xl`}>
              <IconComponent className="w-12 h-12 text-white" />
              
              {/* Pulsing ring */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${feedbackConfig.color} opacity-30`}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.3, 0.1, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>

            {/* Animated particles */}
            {particles.map((particle) => {
              const ParticleIcon = particle.icon;
              return (
                <motion.div
                  key={particle.id}
                  className="absolute w-6 h-6 text-yellow-400"
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                  initial={{ 
                    scale: 0, 
                    x: 0, 
                    y: 0,
                    opacity: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    x: particle.x,
                    y: particle.y,
                    opacity: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    delay: particle.delay,
                    ease: "easeOut"
                  }}
                >
                  <ParticleIcon className="w-full h-full" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-xl">
              <p className="text-lg font-bold text-gray-900 dark:text-white text-center">
                {message || feedbackConfig.message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for easy success feedback usage
export function useSuccessFeedback() {
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "success" | "achievement" | "connection" | "celebration";
  } | null>(null);

  const showSuccess = (message: string, type: "success" | "achievement" | "connection" | "celebration" = "success") => {
    setFeedback({ message, type });
  };

  const hideFeedback = () => {
    setFeedback(null);
  };

  const FeedbackComponent = feedback ? (
    <SuccessFeedback
      message={feedback.message}
      type={feedback.type}
      onComplete={hideFeedback}
    />
  ) : null;

  return {
    showSuccess,
    hideFeedback,
    FeedbackComponent
  };
}