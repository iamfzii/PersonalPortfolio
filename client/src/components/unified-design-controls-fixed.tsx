import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Palette, Sun, Moon, Lightbulb, Leaf, Sunset, Type, Layout, Zap, Sparkles, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import EnhancedPDFGenerator from "@/components/enhanced-pdf-generator";

// Design combinations with performance optimization
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
  category: "professional" | "creative" | "modern" | "classic" | "technical";
}

const designCombinations: DesignCombination[] = [
  // Professional Category
  {
    id: "executive-pro",
    name: "Executive Pro",
    description: "Professional corporate design with refined typography",
    theme: "light",
    font: "classic",
    gradient: "from-blue-600 to-indigo-700",
    preview: { primary: "#1e40af", secondary: "#64748b", accent: "#3b82f6" },
    category: "professional"
  },
  {
    id: "dark-elegance",
    name: "Dark Elegance",
    description: "Sophisticated dark theme with premium feel",
    theme: "dark",
    font: "elegant",
    gradient: "from-slate-800 to-slate-900",
    preview: { primary: "#1e293b", secondary: "#475569", accent: "#64748b" },
    category: "professional"
  },
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Traditional corporate styling with modern touch",
    theme: "blue",
    font: "classic",
    gradient: "from-blue-700 to-indigo-800",
    preview: { primary: "#1d4ed8", secondary: "#3b82f6", accent: "#60a5fa" },
    category: "professional"
  },
  {
    id: "business-minimal",
    name: "Business Minimal",
    description: "Clean professional design for modern businesses",
    theme: "light",
    font: "minimal",
    gradient: "from-slate-600 to-slate-800",
    preview: { primary: "#475569", secondary: "#64748b", accent: "#94a3b8" },
    category: "professional"
  },

  // Modern Category
  {
    id: "tech-leader",
    name: "Tech Leader",
    description: "Modern tech-focused design with clean lines",
    theme: "dark",
    font: "tech",
    gradient: "from-gray-900 to-blue-900",
    preview: { primary: "#111827", secondary: "#6b7280", accent: "#3b82f6" },
    category: "modern"
  },
  {
    id: "nature-innovator",
    name: "Nature Innovator",
    description: "Fresh green theme promoting sustainability",
    theme: "green",
    font: "modern",
    gradient: "from-green-600 to-emerald-600",
    preview: { primary: "#059669", secondary: "#10b981", accent: "#34d399" },
    category: "modern"
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean minimalist design with subtle elegance",
    theme: "light",
    font: "minimal",
    gradient: "from-gray-400 to-gray-600",
    preview: { primary: "#6b7280", secondary: "#9ca3af", accent: "#4b5563" },
    category: "modern"
  },
  {
    id: "cyber-tech",
    name: "Cyber Tech",
    description: "Futuristic design with bold tech aesthetics",
    theme: "dark",
    font: "tech",
    gradient: "from-cyan-600 to-blue-700",
    preview: { primary: "#0891b2", secondary: "#06b6d4", accent: "#67e8f9" },
    category: "modern"
  },
  {
    id: "neo-modern",
    name: "Neo Modern",
    description: "Contemporary design with dynamic elements",
    theme: "blue",
    font: "modern",
    gradient: "from-indigo-600 to-purple-700",
    preview: { primary: "#4f46e5", secondary: "#6366f1", accent: "#8b5cf6" },
    category: "modern"
  },

  // Creative Category
  {
    id: "creative-mind",
    name: "Creative Mind",
    description: "Vibrant and innovative design for creative professionals",
    theme: "purple",
    font: "bold",
    gradient: "from-purple-600 to-pink-600",
    preview: { primary: "#7c3aed", secondary: "#a855f7", accent: "#ec4899" },
    category: "creative"
  },
  {
    id: "sunset-professional",
    name: "Sunset Professional",
    description: "Warm sunset colors with professional appeal",
    theme: "sunset",
    font: "elegant",
    gradient: "from-orange-500 to-red-500",
    preview: { primary: "#f97316", secondary: "#fb923c", accent: "#ef4444" },
    category: "creative"
  },
  {
    id: "artistic-bold",
    name: "Artistic Bold",
    description: "Dynamic design for creative portfolios",
    theme: "purple",
    font: "bold",
    gradient: "from-violet-600 to-fuchsia-600",
    preview: { primary: "#7c2d12", secondary: "#c2410c", accent: "#ea580c" },
    category: "creative"
  },
  {
    id: "vibrant-energy",
    name: "Vibrant Energy",
    description: "High-energy design with bold color combinations",
    theme: "sunset",
    font: "bold",
    gradient: "from-pink-500 to-orange-500",
    preview: { primary: "#ec4899", secondary: "#f97316", accent: "#fbbf24" },
    category: "creative"
  },
  {
    id: "creative-gradient",
    name: "Creative Gradient",
    description: "Multi-color gradient design for artistic expression",
    theme: "green",
    font: "elegant",
    gradient: "from-emerald-500 to-teal-600",
    preview: { primary: "#10b981", secondary: "#14b8a6", accent: "#5eead4" },
    category: "creative"
  },

  // Classic Category
  {
    id: "classic-scholar",
    name: "Classic Scholar",
    description: "Traditional academic styling with timeless appeal",
    theme: "light",
    font: "classic",
    gradient: "from-slate-700 to-slate-900",
    preview: { primary: "#334155", secondary: "#64748b", accent: "#475569" },
    category: "classic"
  },
  {
    id: "vintage-professional",
    name: "Vintage Professional",
    description: "Classic design with vintage charm",
    theme: "light",
    font: "elegant",
    gradient: "from-amber-700 to-orange-800",
    preview: { primary: "#b45309", secondary: "#d97706", accent: "#f59e0b" },
    category: "classic"
  },
  {
    id: "timeless-elegance",
    name: "Timeless Elegance",
    description: "Sophisticated classic design that never goes out of style",
    theme: "dark",
    font: "classic",
    gradient: "from-stone-700 to-neutral-800",
    preview: { primary: "#44403c", secondary: "#57534e", accent: "#78716c" },
    category: "classic"
  },
  {
    id: "heritage-style",
    name: "Heritage Style",
    description: "Traditional design with heritage appeal",
    theme: "blue",
    font: "elegant",
    gradient: "from-slate-600 to-blue-700",
    preview: { primary: "#475569", secondary: "#1d4ed8", accent: "#3b82f6" },
    category: "classic"
  },

  // Technical Operations Category
  {
    id: "command-interface",
    name: "Command Interface",
    description: "Terminal-inspired design for technical professionals",
    theme: "dark",
    font: "tech",
    gradient: "from-green-600 to-emerald-700",
    preview: { primary: "#059669", secondary: "#10b981", accent: "#34d399" },
    category: "technical"
  },
  {
    id: "operations-dashboard",
    name: "Operations Dashboard",
    description: "Clean monitoring interface aesthetic",
    theme: "blue",
    font: "modern",
    gradient: "from-blue-600 to-cyan-600",
    preview: { primary: "#2563eb", secondary: "#3b82f6", accent: "#06b6d4" },
    category: "technical"
  },
  {
    id: "system-admin",
    name: "System Admin",
    description: "Professional system administration theme",
    theme: "dark",
    font: "minimal",
    gradient: "from-gray-700 to-slate-800",
    preview: { primary: "#374151", secondary: "#4b5563", accent: "#6b7280" },
    category: "technical"
  },
  {
    id: "tech-lead",
    name: "Tech Lead",
    description: "Leadership-focused technical design",
    theme: "purple",
    font: "bold",
    gradient: "from-purple-600 to-violet-700",
    preview: { primary: "#7c3aed", secondary: "#8b5cf6", accent: "#a855f7" },
    category: "technical"
  },
  {
    id: "devops-professional",
    name: "DevOps Professional",
    description: "Infrastructure and automation focused",
    theme: "green",
    font: "tech",
    gradient: "from-emerald-600 to-teal-600",
    preview: { primary: "#059669", secondary: "#10b981", accent: "#14b8a6" },
    category: "technical"
  },
  {
    id: "cybersecurity-pro",
    name: "Cybersecurity Pro",
    description: "Security-focused professional design",
    theme: "dark",
    font: "bold",
    gradient: "from-red-600 to-rose-700",
    preview: { primary: "#dc2626", secondary: "#ef4444", accent: "#f87171" },
    category: "technical"
  },
  {
    id: "cloud-architect",
    name: "Cloud Architect",
    description: "Modern cloud infrastructure aesthetic",
    theme: "blue",
    font: "minimal",
    gradient: "from-sky-500 to-blue-600",
    preview: { primary: "#0ea5e9", secondary: "#3b82f6", accent: "#60a5fa" },
    category: "technical"
  },
  {
    id: "data-engineer",
    name: "Data Engineer",
    description: "Analytics and data processing theme",
    theme: "purple",
    font: "tech",
    gradient: "from-indigo-600 to-purple-700",
    preview: { primary: "#4f46e5", secondary: "#7c3aed", accent: "#8b5cf6" },
    category: "technical"
  },
  {
    id: "site-reliability",
    name: "Site Reliability",
    description: "Reliability engineering focused design",
    theme: "green",
    font: "modern",
    gradient: "from-teal-600 to-emerald-700",
    preview: { primary: "#0d9488", secondary: "#14b8a6", accent: "#5eead4" },
    category: "technical"
  },
  {
    id: "network-operations",
    name: "Network Operations",
    description: "Network infrastructure management style",
    theme: "sunset",
    font: "tech",
    gradient: "from-orange-500 to-amber-600",
    preview: { primary: "#f97316", secondary: "#fb923c", accent: "#fbbf24" },
    category: "technical"
  },
  {
    id: "it-operations",
    name: "IT Operations",
    description: "Traditional IT operations professional",
    theme: "light",
    font: "classic",
    gradient: "from-amber-600 to-yellow-700",
    preview: { primary: "#d97706", secondary: "#f59e0b", accent: "#fbbf24" },
    category: "technical"
  },
  {
    id: "technical-writer",
    name: "Technical Writer",
    description: "Documentation and communication style",
    theme: "light",
    font: "elegant",
    gradient: "from-slate-500 to-gray-600",
    preview: { primary: "#64748b", secondary: "#6b7280", accent: "#9ca3af" },
    category: "technical"
  }
];

const modeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "blue", label: "Blue", icon: Lightbulb },
  { value: "green", label: "Green", icon: Leaf },
  { value: "purple", label: "Purple", icon: Palette },
  { value: "sunset", label: "Sunset", icon: Sunset },
];

export default function UnifiedDesignControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [fontSize, setFontSize] = useState([16]);
  const [spacing, setSpacing] = useState([1]);
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();

  const applyDesignCombination = (combination: DesignCombination) => {
    // First set the theme and font in React state
    setTheme(combination.theme);
    setFontCombination(combination.font);
    
    // Force immediate DOM update
    const root = document.documentElement;
    root.setAttribute('data-theme', combination.theme);
    root.setAttribute('data-font', combination.font);
    
    // Handle dark class
    if (combination.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Apply preview colors as fallback for immediate visual feedback
    root.style.setProperty('--theme-primary', combination.preview.primary);
    root.style.setProperty('--theme-secondary', combination.preview.secondary);
    root.style.setProperty('--theme-accent', combination.preview.accent);
    
    // Force a reflow to ensure changes are applied
    root.offsetHeight;
  };

  const applyAdvancedSettings = () => {
    const root = document.documentElement;
    root.style.setProperty('--base-font-size', `${fontSize[0]}px`);
    root.style.setProperty('--spacing-multiplier', spacing[0].toString());
    
    if (!animations) {
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
    }
    
    if (compactMode) {
      root.style.setProperty('--section-padding', '2rem');
    } else {
      root.style.removeProperty('--section-padding');
    }
  };

  // Find current combination or fallback
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
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-8">

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
                  {["professional", "technical", "modern", "creative", "classic"].map((category) => (
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

              {/* Advanced Customization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Advanced</span>
                  </h3>
                  <Switch
                    checked={advancedMode}
                    onCheckedChange={setAdvancedMode}
                  />
                </div>

                {advancedMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                  >
                    {/* Typography Controls */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Type className="w-4 h-4" />
                        <label className="text-sm font-medium">Font Size</label>
                        <Badge variant="secondary" className="text-xs">
                          {fontSize[0]}px
                        </Badge>
                      </div>
                      <Slider
                        value={fontSize}
                        onValueChange={(value) => {
                          setFontSize(value);
                          applyAdvancedSettings();
                        }}
                        max={24}
                        min={12}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Spacing Controls */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Layout className="w-4 h-4" />
                        <label className="text-sm font-medium">Spacing</label>
                        <Badge variant="secondary" className="text-xs">
                          {spacing[0]}x
                        </Badge>
                      </div>
                      <Slider
                        value={spacing}
                        onValueChange={(value) => {
                          setSpacing(value);
                          applyAdvancedSettings();
                        }}
                        max={2}
                        min={0.5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>

                    {/* Animation Toggle */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <label className="text-sm font-medium">Animations</label>
                      </div>
                      <Switch
                        checked={animations}
                        onCheckedChange={(checked) => {
                          setAnimations(checked);
                          applyAdvancedSettings();
                        }}
                      />
                    </div>

                    {/* Compact Mode */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Layout className="w-4 h-4" />
                        <label className="text-sm font-medium">Compact Mode</label>
                      </div>
                      <Switch
                        checked={compactMode}
                        onCheckedChange={(checked) => {
                          setCompactMode(checked);
                          applyAdvancedSettings();
                        }}
                      />
                    </div>

                    {/* Font Weight Options */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Type className="w-4 h-4" />
                        <label className="text-sm font-medium">Font Style</label>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["modern", "classic", "tech", "elegant", "bold", "minimal"].map((font) => (
                          <Button
                            key={font}
                            variant={fontCombination === font ? "default" : "outline"}
                            size="sm"
                            className="text-xs capitalize"
                            onClick={() => setFontCombination(font as any)}
                          >
                            {font}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Reset Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setFontSize([16]);
                        setSpacing([1]);
                        setAnimations(true);
                        setCompactMode(false);
                        const root = document.documentElement;
                        root.style.removeProperty('--base-font-size');
                        root.style.removeProperty('--spacing-multiplier');
                        root.style.removeProperty('--animation-duration');
                        root.style.removeProperty('--section-padding');
                      }}
                    >
                      Reset to Defaults
                    </Button>
                  </motion.div>
                )}
              </div>

              <Separator />

              {/* PDF Export */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Export Resume</span>
                </h3>
                <EnhancedPDFGenerator />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}