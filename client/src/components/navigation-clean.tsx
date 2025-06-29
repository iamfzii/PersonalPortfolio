import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import UnifiedDesignControls from "@/components/unified-design-controls";

const navigation = [
  { name: "Home", href: "#hero", ariaLabel: "Go to hero section" },
  { name: "Profile", href: "#career", ariaLabel: "Go to career profile section" },
  { name: "Skills", href: "#skills", ariaLabel: "Go to skills section" },
  { name: "Projects", href: "#projects", ariaLabel: "Go to projects section" },
  { name: "Demos", href: "#demos", ariaLabel: "Go to demonstrations section" },
  { name: "Experience", href: "#experience", ariaLabel: "Go to experience section" },
  { name: "Education", href: "#education", ariaLabel: "Go to education section" },
  { name: "Contact", href: "#contact", ariaLabel: "Go to contact section" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      const focusableElement = element.querySelector('h1, h2, h3, [tabindex]:not([tabindex="-1"])') as HTMLElement;
      if (focusableElement) {
        setTimeout(() => {
          focusableElement.focus({ preventScroll: true });
        }, 500);
      }
    }
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          
          // Update active section
          const sections = navigation.map(nav => nav.href.slice(1));
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          
          if (currentSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-heading font-bold text-xl theme-text-primary"
            >
              MF
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`theme-text-secondary hover:theme-primary transition-colors duration-200 font-medium relative ${
                  activeSection === item.href.slice(1) ? "theme-primary" : ""
                }`}
                aria-label={item.ariaLabel}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <UnifiedDesignControls />
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="theme-surface theme-border">
                    <Menu className="h-4 w-4 theme-text-secondary" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-left p-3 rounded-lg transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        aria-label={item.ariaLabel}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}