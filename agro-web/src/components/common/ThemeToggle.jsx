"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !dark;

    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");

    setDark(nextTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        bg-sand-200/50 text-navy-700
        transition-all duration-200
        hover:scale-105 hover:bg-sand-200
        dark:bg-navy-800
        dark:text-sand-400
        dark:hover:bg-navy-700
      "
    >
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
