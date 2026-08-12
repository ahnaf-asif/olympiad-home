"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, ArrowRight, Compass, BookOpen, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/", icon: Compass },
  { name: "About & Mission", href: "/about", icon: Trophy },
  { name: "Academics & Pathways", href: "/academics", icon: BookOpen },
  { name: "Contact & Community", href: "/contact", icon: Mail },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between md:hidden border-l border-slate-200"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-slate-900"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/30">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span>Olympiad Playground</span>
                </Link>
                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 active:scale-95 transition-transform"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-medium text-sm transition-all active:scale-[0.98] min-h-[44px] ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/60 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-600">
                  Bi-Weekly Contest Registration Open
                </span>
              </div>

              <Button
                asChild
                variant="gradient"
                className="w-full justify-between"
                onClick={onClose}
              >
                <Link href="/academics">
                  <span>Explore Pathways</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
