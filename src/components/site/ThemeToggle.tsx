import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
      title={isDark ? "Modalità chiara" : "Modalità scura"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-foreground/80 hover:text-foreground hover:border-white/30 transition-colors ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
