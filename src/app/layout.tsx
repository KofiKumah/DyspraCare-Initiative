import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { default: "DyspraCare | A thoughtful first step", template: "%s | DyspraCare" },
  description: "Gentle guidance for understanding coordination differences, learning about DCD, and preparing for a conversation with a professional.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}