import type { Metadata } from "next";
import { Cascadia_Mono, STIX_Two_Text } from "next/font/google";
import type { PropsWithChildren } from "react";
import ThemeProvider from "~/components/theme/provider";
import ThemeToggle from "~/components/theme/toggle";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const sans = STIX_Two_Text({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Cascadia_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaymoriel.com"),
  title: { default: "Raymoriel Vandrell", template: "%s • Raymoriel Vandrell" },
  description: "...",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-16x16.png" },
      { url: "/favicon-32x32.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", alt: "Raymoriel Vandrell" }],
    url: "https://zaymoriel.com",
    type: "website",
  },
  twitter: { creator: "@zaymoriel" },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(sans.variable, mono.variable)}
    >
      <body>
        <ThemeProvider>
          <ThemeToggle />
          <main className="container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
