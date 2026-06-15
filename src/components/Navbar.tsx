"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logoImg from "../../public/images/logo.jpg";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#packages", label: "Packages" },
  { href: "#promise", label: "Our Promise" },
  { href: "#meet-us", label: "Meet Us" },
  { href: "#book", label: "Book Now" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark-900/90 backdrop-blur-md border-b border-brand-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoImg}
              alt="EthioGuide"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
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
            <a
              href="https://calendly.com/kumsaaabdii/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-brand-teal-600/25"
            >
              <Phone className="w-4 h-4" />
              Book a Free Call
            </a>
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
          <a
            href="https://calendly.com/kumsaaabdii/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </nav>
  );
}
