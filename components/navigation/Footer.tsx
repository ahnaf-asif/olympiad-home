import React from "react";
import Link from "next/link";
import { Trophy, MapPin, Heart, Globe, Code, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 md:pt-16 pb-8 md:pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 md:pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Trophy className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Olympiad<span className="text-indigo-400">Playground</span>
              </span>
            </Link>
            
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md">
              A modern, non-profit EdTech ecosystem designed to transform cognitive development and Olympiad culture in Bangladesh through structured training, live contests, and progressive hint architecture.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="dark" className="bg-slate-800 text-slate-300 border-slate-700 text-[11px]">
                <MapPin className="h-3 w-3 text-indigo-400" />
                <span>Dhaka, Bangladesh</span>
              </Badge>
              <Badge variant="dark" className="bg-slate-800 text-emerald-400 border-slate-700 text-[11px]">
                <Heart className="h-3 w-3 fill-emerald-400 text-emerald-400" />
                <span>100% Non-Profit Core</span>
              </Badge>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Platform Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & Gonit Utshob Vision
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">
                  Academics & Pathways
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Disciplines */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Core Disciplines
            </h4>
            <ul className="flex flex-col gap-2 text-xs md:text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                Mathematics (IMO Track)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Physics (IPhO Track)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Informatics (IOI Track)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Economics (IEO Track)
              </li>
              <li className="text-indigo-400 font-medium">
                Social Sciences (New Track)
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Contact */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Community & Governance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All live course proceeds directly reinvest into platform hosting, open problem archives, and regional contest grants.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all active:scale-95 min-h-[44px] min-w-[44px]"
              >
                <Code className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Community Network"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all active:scale-95 min-h-[44px] min-w-[44px]"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Share Ecosystem"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all active:scale-95 min-h-[44px] min-w-[44px]"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Olympiad Playground Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Non-Profit Concept Paper</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Open Source Archive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
