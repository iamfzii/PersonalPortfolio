import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Palette } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";
import SimpleDesignControls from "@/components/simple-design-controls";


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

          <div className="flex items-center space-x-2 ml-auto">
            <SimpleDesignControls />


          </div>
        </div>
      </div>
    </motion.nav>
  );
}
