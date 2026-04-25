import type { Metadata } from "next";
import GridBackground from "@/components/GridBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Humanities // Grid — Quiz",
  description:
    "Six humanities disciplines, sixty multiple-choice questions, learn by playing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GridBackground />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
