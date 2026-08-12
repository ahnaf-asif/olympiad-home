"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Academics & Archive", href: "/academics" },
  { label: "Live Courses", href: "/courses" },
  { label: "About & Mission", href: "/about" },
  { label: "Contact & Clubs", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 outline-none focus:outline-none focus:ring-0 select-none group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm group-hover:bg-indigo-700 transition-colors">
              <Trophy className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-lg text-slate-900 tracking-tight">
              Olympiad<span className="text-indigo-600">Playground</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors py-1 relative outline-none focus:outline-none ${
                    isActive
                      ? "text-indigo-600 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="default" size="sm">
              <Link href="/contact" className="flex items-center gap-2">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-95 transition-all outline-none focus:outline-none"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
