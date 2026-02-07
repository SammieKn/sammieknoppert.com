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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sammieknoppert.com",
  ),
  title: "Sammie Knoppert | Product Owner & Data Scientist",
  description:
    "Product Owner and Data Scientist specializing in asset management automation, AI/ML solutions, and data-driven product development. Experience with Python, Databricks, Azure, and LLMs.",
  keywords: [
    "Product Owner",
    "Data Scientist",
    "Python",
    "AI",
    "Machine Learning",
    "Databricks",
    "Azure",
  ],
  authors: [{ name: "Sammie Knoppert" }],
  openGraph: {
    title: "Sammie Knoppert | Product Owner & Data Scientist",
    description:
      "Product Owner and Data Scientist specializing in asset management automation and AI/ML solutions.",
    url: "https://sammieknoppert.com",
    siteName: "Sammie Knoppert Portfolio",
    images: [
      {
        url: "/images/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Sammie Knoppert Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sammie Knoppert | Product Owner & Data Scientist",
    description:
      "Product Owner and Data Scientist specializing in asset management automation and AI/ML solutions.",
    images: ["/images/og-image.png"],
  },
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
