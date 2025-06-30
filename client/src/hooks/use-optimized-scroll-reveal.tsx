import { useEffect, useRef, useState, useCallback } from 'react';

interface UseOptimizedScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string;
  enableInstantLoad?: boolean;
  delay?: number;
}

// Global store for preloaded sections - like reference site
const preloadedSections = new Set<string>();

export function useOptimizedScrollReveal(options: UseOptimizedScrollRevealOptions = {}) {
  const {
    threshold = 0.05, // More sensitive for faster loading
    rootMargin = '50px 0px 50px 0px', // Larger margin for preloading
    triggerOnce = true,
    animationClass = 'animate-fade-in-up-fast',
    enableInstantLoad = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionId = useRef<string>(`section-${Math.random().toString(36).substr(2, 9)}`);

  // Check if section was previously loaded
  useEffect(() => {
    if (preloadedSections.has(sectionId.current)) {
      setIsPreloaded(true);
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, []);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Mark as preloaded for future visits
        preloadedSections.add(sectionId.current);
        
        if (delay > 0) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        }

        if (triggerOnce && observerRef.current && elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
      } else if (!triggerOnce && !isPreloaded) {
        setIsVisible(false);
      }
    });
  }, [delay, triggerOnce, isPreloaded]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already preloaded, show instantly like reference site
    if (isPreloaded || hasAnimated) {
      setIsVisible(true);
      return;
    }

    // Create optimized observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, handleIntersection, isPreloaded, hasAnimated]);

  // Determine final classes
  const shouldAnimate = (isVisible || hasAnimated || isPreloaded);
  const finalClass = isPreloaded 
    ? 'preloaded' 
    : shouldAnimate 
      ? (enableInstantLoad ? 'instant-load' : animationClass)
      : 'opacity-0 translate-y-8';

  return {
    elementRef,
    isVisible: shouldAnimate,
    hasAnimated: hasAnimated || isPreloaded,
    isPreloaded,
    animationClass: finalClass
  };
}

// Utility to preload all sections for instant navigation
export function preloadAllSections() {
  const sections = document.querySelectorAll('[data-section-id]');
  sections.forEach((section) => {
    const id = section.getAttribute('data-section-id');
    if (id) {
      preloadedSections.add(id);
    }
  });
}

// Clear preloaded sections (useful for testing)
export function clearPreloadedSections() {
  preloadedSections.clear();
}