import { useEffect, useRef, useState, useCallback } from "react";

// High-performance scroll reveal with optimized intersection observer
export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Memoize the callback to prevent unnecessary re-renders
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isVisible = entry.isIntersecting;
    
    setInView(isVisible);
    
    if (isVisible) {
      // Use requestAnimationFrame for smooth animation timing
      requestAnimationFrame(() => {
        entry.target.classList.add("revealed");
      });
      
      // Disconnect observer after reveal to save performance
      if (observer) {
        observer.unobserve(entry.target);
      }
    }
  }, []);

  let observer: IntersectionObserver | null = null;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Optimized intersection observer settings
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15, // Trigger earlier for faster perception
      rootMargin: "0px 0px -30px 0px", // Reduced margin for faster triggering
    });

    observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleIntersection]);

  return { ref, inView };
}
