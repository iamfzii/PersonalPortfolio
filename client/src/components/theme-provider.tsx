import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "blue" | "green" | "purple" | "sunset";
type FontCombination = "modern" | "classic" | "tech" | "elegant" | "bold" | "minimal";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontCombination: FontCombination;
  setFontCombination: (font: FontCombination) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontCombination, setFontCombination] = useState<FontCombination>("modern");

  useEffect(() => {
    const savedTheme = localStorage.getItem("preferred-theme") as Theme;
    const savedFont = localStorage.getItem("preferred-font") as FontCombination;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedFont) {
      setFontCombination(savedFont);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Set theme and font attributes
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-font", fontCombination);
    
    // Handle dark class for Tailwind
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Force CSS variable update by removing and re-adding data-theme
    root.removeAttribute("data-theme");
    // Use requestAnimationFrame to ensure the removal is processed
    requestAnimationFrame(() => {
      root.setAttribute("data-theme", theme);
    });
    
    // Save preferences
    localStorage.setItem("preferred-theme", theme);
    localStorage.setItem("preferred-font", fontCombination);
  }, [theme, fontCombination]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, fontCombination, setFontCombination }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
