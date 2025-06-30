import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Palette, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import EnhancedPDFGenerator from "@/components/enhanced-pdf-generator";

const themes = [
  { name: "Light", value: "light", color: "bg-blue-500", icon: Sun },
  { name: "Dark", value: "dark", color: "bg-gray-800", icon: Moon },
  { name: "Blue", value: "blue", color: "bg-blue-700", icon: Monitor },
  { name: "Green", value: "green", color: "bg-green-600", icon: Monitor },
  { name: "Purple", value: "purple", color: "bg-purple-600", icon: Monitor },
  { name: "Sunset", value: "sunset", color: "bg-orange-600", icon: Monitor },
];

const fontCombinations = [
  { name: "Modern", value: "modern", description: "Inter + Source Sans Pro" },
  { name: "Classic", value: "classic", description: "Playfair + Lora" },
  { name: "Tech", value: "tech", description: "Space Grotesk + IBM Plex" },
  { name: "Elegant", value: "elegant", description: "Montserrat + Source Sans" },
  { name: "Bold", value: "bold", description: "Poppins + Roboto" },
  { name: "Minimal", value: "minimal", description: "Inter Only" },
];

export default function SimpleDesignControls() {
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative group hover:shadow-md transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-600"
        >
          <Palette className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-80 max-h-96 overflow-y-auto theme-surface theme-border" 
        side="bottom" 
        align="end"
      >
        <div className="space-y-6">
          {/* Quick Themes */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base">Quick Themes</h3>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((themeOption) => {
                const IconComponent = themeOption.icon;
                return (
                  <Button
                    key={themeOption.value}
                    variant={theme === themeOption.value ? "default" : "outline"}
                    size="sm"
                    className="flex flex-col items-center space-y-1 h-auto py-2"
                    onClick={() => setTheme(themeOption.value as any)}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span className="text-xs">{themeOption.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Typography */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base">Typography</h3>
            <div className="space-y-1">
              {fontCombinations.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setFontCombination(font.value as any)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                    fontCombination === font.value
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-medium">{font.name}</div>
                  <div className="opacity-70">{font.description}</div>
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* PDF Export */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base">Export Resume</h3>
            <EnhancedPDFGenerator />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}