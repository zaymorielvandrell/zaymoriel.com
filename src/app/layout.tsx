import type { Metadata } from "next";
import { JetBrains_Mono, STIX_Two_Text } from "next/font/google";
import type { PropsWithChildren } from "react";
import { SITE_URL } from "~/app/sitemap";
import ThemeProvider from "~/components/theme/provider";
import ThemeToggle from "~/components/theme/toggle";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const sans = STIX_Two_Text({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Zaymoriel Vandrell", template: "%s · Zaymoriel Vandrell" },
  description:
    "Essays on software architecture, production systems, performance, and the discipline of building durable software that survives real-world constraints.",
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
    images: [{ url: "/opengraph-image.png", alt: "Zaymoriel Vandrell" }],
    url: SITE_URL,
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
