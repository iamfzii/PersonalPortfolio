import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Palette, Download, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";
import EnhancedPDFGenerator from "@/components/enhanced-pdf-generator";

interface DesignCombination {
  id: string;
  name: string;
  description: string;
  theme: "light" | "dark" | "blue" | "green" | "purple" | "sunset";
  font: "modern" | "classic" | "tech" | "elegant" | "bold" | "minimal";
  gradient: string;
  preview: {
    primary: string;
    secondary: string;
    accent: string;
  };
  category: "professional" | "creative" | "modern" | "classic";
}

const designCombinations: DesignCombination[] = [
  {
    id: "executive-pro",
    name: "Executive Pro",
    description: "Professional dark theme with modern typography",
    theme: "dark",
    font: "modern",
    gradient: "from-slate-900 to-blue-900",
    preview: { primary: "#1e293b", secondary: "#334155", accent: "#3b82f6" },
    category: "professional"
  },
  {
    id: "tech-leader",
    name: "Tech Leader",
    description: "Blue theme with tech-focused typography",
    theme: "blue",
    font: "tech",
    gradient: "from-blue-600 to-cyan-600",
    preview: { primary: "#1e40af", secondary: "#3b82f6", accent: "#06b6d4" },
    category: "modern"
  },
  {
    id: "creative-mind",
    name: "Creative Mind",
    description: "Purple theme with elegant typography",
    theme: "purple",
    font: "elegant",
    gradient: "from-purple-600 to-pink-600",
    preview: { primary: "#7c3aed", secondary: "#a855f7", accent: "#ec4899" },
    category: "creative"
  },
  {
    id: "nature-innovator",
    name: "Nature Innovator",
    description: "Green theme with bold typography",
    theme: "green",
    font: "bold",
    gradient: "from-green-600 to-emerald-600",
    preview: { primary: "#059669", secondary: "#10b981", accent: "#34d399" },
    category: "creative"
  },
  {
    id: "sunset-professional",
    name: "Sunset Professional",
    description: "Warm sunset theme with classic typography",
    theme: "sunset",
    font: "classic",
    gradient: "from-orange-500 to-red-500",
    preview: { primary: "#ea580c", secondary: "#f97316", accent: "#ef4444" },
    category: "professional"
  },
  {
    id: "classic-scholar",
    name: "Classic Scholar",
    description: "Light theme with classic typography",
    theme: "light",
    font: "classic",
    gradient: "from-gray-100 to-slate-200",
    preview: { primary: "#f8fafc", secondary: "#e2e8f0", accent: "#64748b" },
    category: "classic"
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Light theme with minimal typography",
    theme: "light",
    font: "minimal",
    gradient: "from-white to-gray-50",
    preview: { primary: "#ffffff", secondary: "#f9fafb", accent: "#6b7280" },
    category: "modern"
  },
  {
    id: "dark-elegance",
    name: "Dark Elegance",
    description: "Dark theme with elegant typography",
    theme: "dark",
    font: "elegant",
    gradient: "from-gray-900 to-slate-800",
    preview: { primary: "#111827", secondary: "#1f2937", accent: "#4f46e5" },
    category: "classic"
  }
];

const modeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor }
];

export default function UnifiedDesignControls() {
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const applyDesignCombination = (combination: DesignCombination) => {
    setTheme(combination.theme);
    setFontCombination(combination.font);
    
    // Apply CSS custom properties for the gradient
    document.documentElement.style.setProperty('--design-gradient', combination.gradient);
    
    setIsOpen(false);
  };

  const currentCombination = designCombinations.find(
    combo => combo.theme === theme && combo.font === fontCombination
  ) || designCombinations[0];

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="relative group hover:shadow-md transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-600"
          >
            <Palette className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Design
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
          <SheetHeader className="pb-6">
            <SheetTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-blue-600" />
              <span>Design Studio</span>
            </SheetTitle>
          </SheetHeader>

            <div className="space-y-8">
              {/* Current Design */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Current Design</h3>
                <div className="p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-4 h-4 rounded bg-gradient-to-r ${currentCombination.gradient}`}></div>
                    <span className="font-medium">{currentCombination.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentCombination.description}
                  </p>
                </div>
              </div>

              {/* Quick Mode Toggle */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Quick Mode</h3>
                <div className="grid grid-cols-3 gap-2">
                  {modeOptions.map((mode) => {
                    const IconComponent = mode.icon;
                    return (
                      <Button
                        key={mode.value}
                        variant={theme === mode.value ? "default" : "outline"}
                        size="sm"
                        className="flex flex-col items-center space-y-1 h-auto py-3"
                        onClick={() => setTheme(mode.value as any)}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs">{mode.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <Separator />

              {/* Scrollable Design Combinations */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Design Studio</h3>
                
                <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2">
                  <div className="space-y-6">
                    {["professional", "modern", "creative", "classic"].map((category) => (
                      <div key={category} className="space-y-3">
                        <h4 className="font-medium text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 sticky top-0 bg-white dark:bg-gray-900 py-1 -my-1 z-10">
                          {category}
                        </h4>
                        
                        <div className="grid gap-3">
                          {designCombinations
                            .filter((combo) => combo.category === category)
                            .map((combination) => (
                              <motion.button
                                key={combination.id}
                                onClick={() => applyDesignCombination(combination)}
                                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                                  currentCombination.id === combination.id
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${combination.gradient} flex-shrink-0`}>
                                    <div className="w-full h-full rounded-lg border border-white/20"></div>
                                  </div>
                                  
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {combination.name}
                                      </h5>
                                      {currentCombination.id === combination.id && (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                      {combination.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* PDF Export */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Export Resume</h3>
                  <EnhancedPDFGenerator />
                </div>
              </div>
            </div>
        </SheetContent>
        </Sheet>
      </>
    );
  }