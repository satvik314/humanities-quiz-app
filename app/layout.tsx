import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Humanities Arcade — Quiz the Liberal Arts",
  description:
    "A neon-drenched quiz app for psychology, philosophy, history, literature, sociology, and art history.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid-bg" aria-hidden="true" />
        <div className="grid-vignette" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
