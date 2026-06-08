"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#packages", label: "Packages" },
  { href: "#promise", label: "Our Promise" },
  { href: "#meet-us", label: "Meet Us" },
  { href: "#book", label: "Book" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark-900/90 backdrop-blur-md border-b border-brand-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-teal-600 flex items-center justify-center text-white font-bold text-sm">
              EG
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-white">EthioGuard</span>
              <span className="block text-[10px] text-brand-amber-400 tracking-widest uppercase -mt-1">
                Your Guide. Your Guard.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-dark-300 hover:text-brand-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book"
              className="inline-flex items-center gap-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-brand-teal-600/25"
            >
              <Phone className="w-4 h-4" />
              Book a Free Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-brand-dark-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-4 pb-4 space-y-2 bg-brand-dark-900/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-brand-dark-300 hover:text-brand-amber-400 hover:bg-brand-dark-800 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
