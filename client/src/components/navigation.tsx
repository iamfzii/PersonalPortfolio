import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Palette } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
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

const themes = [
  { name: "Light", value: "light", color: "bg-blue-500" },
  { name: "Dark", value: "dark", color: "bg-gray-800" },
  { name: "Blue Professional", value: "blue", color: "bg-blue-700" },
  { name: "Green Creative", value: "green", color: "bg-green-600" },
  { name: "Purple Modern", value: "purple", color: "bg-purple-600" },
  { name: "Sunset Warm", value: "sunset", color: "bg-orange-600" },
];

const fontCombinations = [
  { name: "Modern", value: "modern", description: "Inter + Source Sans Pro" },
  { name: "Classic", value: "classic", description: "Playfair + Lora" },
  { name: "Tech", value: "tech", description: "Space Grotesk + IBM Plex" },
  { name: "Elegant", value: "elegant", description: "Montserrat + Source Sans" },
  { name: "Bold", value: "bold", description: "Poppins + Roboto" },
  { name: "Minimal", value: "minimal", description: "Inter Only" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();

  // Enhanced scroll behavior with smooth animation and accessibility
  const scrollToSection = (href: string, offset: number = 80) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update focus for accessibility
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

          // Update active section with improved detection
          const sections = document.querySelectorAll("section[id]");
          const scrollPos = window.scrollY + 120; // Adjusted for better detection

          sections.forEach((section) => {
            const element = section as HTMLElement;
            const top = element.offsetTop;
            const height = element.clientHeight;

            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(element.id);
            }
          });
          
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
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`theme-text-secondary hover:theme-primary transition-colors duration-200 font-medium relative ${
                  activeSection === item.href.slice(1) ? "theme-primary" : ""
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 theme-primary-bg"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <UnifiedDesignControls />

            {/* Combined Design System & Advanced Controls */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="theme-surface theme-border px-3 py-2 hidden sm:flex items-center space-x-2">
                  <Palette className="h-4 w-4 theme-text-secondary" />
                  <span className="theme-text-primary text-sm">Design</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 theme-surface theme-border" side="bottom" align="end">
                <div className="space-y-6">
                  {/* Individual Controls */}
                  <div>
                    <h4 className="font-medium theme-text-primary mb-3">Individual Controls</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm theme-text-secondary mb-2 block">Color Theme</label>
                        <div className="grid grid-cols-3 gap-2">
                          {themes.map((themeOption) => (
                            <button
                              key={themeOption.value}
                              onClick={() => setTheme(themeOption.value as any)}
                              className={`p-2 rounded-lg border transition-all duration-200 hover:scale-105 ${
                                theme === themeOption.value
                                  ? "ring-2 ring-blue-500 border-blue-300"
                                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                              }`}
                            >
                              <div className={`w-full h-4 ${themeOption.color} rounded mb-1`} />
                              <div className="text-xs theme-text-primary truncate">
                                {themeOption.name.split(' ')[0]}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm theme-text-secondary mb-2 block">Typography</label>
                        <div className="space-y-1">
                          {fontCombinations.map((font) => (
                            <button
                              key={font.value}
                              onClick={() => setFontCombination(font.value as any)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 hover:scale-[1.02] ${
                                fontCombination === font.value
                                  ? "theme-primary-bg text-white shadow-md"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                            >
                              <div className="font-medium">{font.name}</div>
                              <div className="opacity-70">{font.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Mobile Design Controls */}
            <div className="sm:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="theme-surface theme-border">
                    <Palette className="h-4 w-4 theme-text-secondary" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 theme-surface theme-border">
                  <div className="space-y-4">
                    <h4 className="font-medium theme-text-primary text-sm">Design Controls</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs theme-text-secondary mb-2 block">Quick Themes</label>
                        <div className="grid grid-cols-2 gap-2">
                          {themes.slice(0, 4).map((themeOption) => (
                            <button
                              key={themeOption.value}
                              onClick={() => setTheme(themeOption.value as any)}
                              className={`p-2 rounded-md border text-xs transition-all duration-150 ${
                                theme === themeOption.value
                                  ? "ring-2 ring-blue-500 border-blue-300"
                                  : "border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <div className={`w-full h-3 ${themeOption.color} rounded mb-1`} />
                              <div className="theme-text-primary truncate">
                                {themeOption.name.split(' ')[0]}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>


          </div>
        </div>
      </div>
    </motion.nav>
  );
}
