import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollManager } from "@/components/layout/ScrollManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sammie Knoppert",
  description: "Portfolio website (Static V1)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Subtle background gradient overlay */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-transparent via-primary/[0.02] to-chart-2/[0.03]" />
        <ScrollManager />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
