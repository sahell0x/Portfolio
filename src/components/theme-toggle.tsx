import { useTheme } from "@/components/theme-provider";
import Dark from "./Dark";
import Light from "./Light";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div 
      
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center"
    >
      {theme === 'dark' ? (
        <Dark  />
      ) : (
        <Light  />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}