import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Coffee, Lightbulb, Zap, Heart, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FloatingMessage {
  id: string;
  icon: React.ElementType;
  title: string;
  message: string;
  action: string;
  color: string;
  delay: number;
}

const floatingMessages: FloatingMessage[] = [
  {
    id: "collaboration",
    icon: MessageCircle,
    title: "Let's Collaborate!",
    message: "Got a project idea? I'd love to hear about it.",
    action: "Start Conversation",
    color: "from-blue-500 to-cyan-500",
    delay: 5000
  },
  {
    id: "coffee-chat",
    icon: Coffee,
    title: "Coffee Chat?",
    message: "Let's discuss your next big idea over virtual coffee.",
    action: "Schedule Call",
    color: "from-amber-500 to-orange-500",
    delay: 15000
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation Partner",
    message: "Looking for someone to turn ideas into reality?",
    action: "Let's Innovate",
    color: "from-yellow-500 to-orange-500",
    delay: 25000
  },
  {
    id: "expertise",
    icon: Zap,
    title: "Technical Expertise",
    message: "Need help with a technical challenge?",
    action: "Get Help",
    color: "from-purple-500 to-pink-500",
    delay: 35000
  }
];

export default function FloatingCTAElements() {
  const [currentMessage, setCurrentMessage] = useState<FloatingMessage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const showMessage = () => {
      const message = floatingMessages[messageIndex];
      setCurrentMessage(message);
      setIsVisible(true);

      // Auto-hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentMessage(null);
          setMessageIndex((prev) => (prev + 1) % floatingMessages.length);
        }, 500);
      }, 8000);
    };

    const initialDelay = setTimeout(showMessage, floatingMessages[messageIndex].delay);
    
    // Set up recurring messages every 45 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        showMessage();
      }
    }, 45000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [messageIndex, isVisible]);

  const handleAction = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
    setTimeout(() => setCurrentMessage(null), 500);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setCurrentMessage(null), 500);
  };

  if (!currentMessage) return null;

  const IconComponent = currentMessage.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <Card className="p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-0 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 rounded-2xl overflow-hidden group">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentMessage.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <div className="relative">
              {/* Icon and title */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`p-2 rounded-lg bg-gradient-to-br ${currentMessage.color} shadow-lg`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {currentMessage.title}
                </h3>
              </div>

              {/* Message */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {currentMessage.message}
              </p>

              {/* Action button */}
              <Button
                onClick={handleAction}
                size="sm"
                className={`w-full bg-gradient-to-r ${currentMessage.color} hover:shadow-lg text-white border-0 rounded-xl font-medium transition-all duration-300 hover:scale-105`}
              >
                {currentMessage.action}
              </Button>
            </div>

            {/* Floating sparkles */}
            <motion.div
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-2 -right-2"
            >
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>

            <motion.div
              animate={{
                y: [-15, -25, -15],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
              className="absolute -top-3 -left-1"
            >
              <Heart className="w-3 h-3 text-red-400" />
            </motion.div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}