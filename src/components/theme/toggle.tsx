"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "~/components/hooks/use-mounted";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4">
        <Skeleton className="size-9" />
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
        <SunIcon className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;
