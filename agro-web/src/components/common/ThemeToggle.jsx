"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2.5 rounded-xl text-gray-500 dark:text-gray-300 bg-gray-100/70 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-[#CC2229] dark:hover:text-red-400 transition-all duration-300 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
