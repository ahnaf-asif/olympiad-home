import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ScrollToTop } from "@/components/navigation/ScrollToTop";
import { PageTransition } from "@/components/navigation/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Olympiad Playground | Cognitive Development & EdTech Ecosystem in Bangladesh",
  description:
    "A modern, 100% non-profit EdTech ecosystem empowering Bangladesh's youth through structured Olympiad training, bi-weekly contests, and progressive hint architecture.",
  keywords: [
    "Olympiad Playground",
    "Bangladesh Math Olympiad",
    "IMO Bangladesh",
    "Gonit Utshob",
    "Physics Olympiad BD",
    "Informatics Olympiad",
    "Progressive Hint Architecture",
    "EdTech Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
