"use client";

import Link from "next/link";
import { Shield, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-950 border-t border-brand-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal-600 flex items-center justify-center text-white font-bold text-sm">
                EG
              </div>
              <div>
                <span className="font-serif text-xl text-white">EthioGuard</span>
              </div>
            </Link>
            <p className="text-brand-dark-400 text-sm leading-relaxed max-w-md">
              Your local fixer in Ethiopia. We handle every detail so you can
              experience the real country with complete peace of mind — fair
              prices, trusted guides, authentic experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#packages", label: "Packages" },
                { href: "#promise", label: "Our Promise" },
                { href: "#meet-us", label: "Meet Us" },
                { href: "#book", label: "Book a Call" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-dark-400 hover:text-brand-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm text-brand-dark-400 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm text-brand-dark-400 hover:text-sky-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@ethioguard.com"
                  className="flex items-center gap-2 text-sm text-brand-dark-400 hover:text-brand-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@ethioguard.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-brand-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-brand-dark-500">
            <Shield className="w-4 h-4" />
            <span>&copy; {currentYear} EthioGuard. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-brand-dark-500">
            <span>Your Guide. Your Guard.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
