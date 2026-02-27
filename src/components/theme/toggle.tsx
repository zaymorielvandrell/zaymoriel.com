"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="top-4 right-4 fixed">
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <SunIcon className="rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
        <MoonIcon className="absolute rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;
