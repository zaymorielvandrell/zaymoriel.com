"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
