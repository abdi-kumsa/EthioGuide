"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-950 via-brand-dark-900 to-brand-teal-900/30" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 0.5px, transparent 0.5px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-amber-500/10 border border-brand-amber-500/20 text-brand-amber-400 text-sm mb-6"
          >
            <Shield className="w-4 h-4" />
            <span>Travel Ethiopia with Confidence</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Your Guide.
            <br />
            <span className="text-brand-amber-400">Your Guard.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-dark-300 leading-relaxed mb-10">
            Skip the inflated prices and tourist traps. Your local fixer in
            Ethiopia — handling every detail, so you can experience the real
            country with complete peace of mind.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#book"
              className="inline-flex items-center gap-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:shadow-xl hover:shadow-brand-teal-600/30 hover:-translate-y-0.5"
            >
              Book a Free Call
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-brand-dark-300 hover:text-white px-8 py-4 rounded-xl text-lg transition-all border border-brand-dark-600 hover:border-brand-dark-400"
            >
              See How It Works
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-brand-dark-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
