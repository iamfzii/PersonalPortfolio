import { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  startOnView?: boolean;
}

export function useTypewriter({ 
  text, 
  speed = 50, 
  delay = 1000, 
  startOnView = false 
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(!startOnView);

  const startTypewriter = () => {
    setShouldStart(true);
  };

  useEffect(() => {
    if (!shouldStart) return;

    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, speed, delay, shouldStart]);

  return {
    displayText,
    isComplete,
    startTypewriter
  };
}