"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Shield } from "lucide-react";
import Image from "next/image";

const heroImages = [
  { src: "/images/IMG_5434.JPG", alt: "Ethiopian landscape" },
  { src: "/images/IMG_5440.JPG", alt: "Ethiopian scenery" },
  { src: "/images/IMG_5432.JPG", alt: "Ethiopian culture" },
  { src: "/images/IMG_5450.jpg", alt: "Ethiopian experience" },
  { src: "/images/IMG_5433.JPG", alt: "Ethiopian travel" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Sliding Image Background */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              bgLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority
            sizes="100vw"
            quality={90}
            onLoad={() => setBgLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-950 via-brand-dark-950/80 to-brand-dark-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-950/40 via-transparent to-brand-dark-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: loaded ? 1 : 0,
            y: loaded ? 0 : 30,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: loaded ? 1 : 0,
              scale: loaded ? 1 : 0.9,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-amber-500/15 border border-brand-amber-500/25 text-brand-amber-300 text-sm mb-6 backdrop-blur-sm"
          >
            <Shield className="w-4 h-4" />
            <span>Your Local Fixer in Ethiopia</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
            Ethiopia Is Everything{" "}
            <span className="text-brand-amber-400">You&apos;ve Heard</span>
            <br />
            — And Nothing Like You Expected
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-brand-dark-200 leading-relaxed mb-8 drop-shadow-md">
            We&apos;re your local fixers. We handle everything so you experience
            everything.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Link
                href="#book"
                className="inline-flex items-center gap-2 bg-brand-teal-600 hover:bg-brand-teal-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:shadow-xl hover:shadow-brand-teal-600/30 hover:-translate-y-0.5"
              >
                Book a Free Call — It&apos;s 100% Free
              </Link>
              <span className="text-sm text-brand-dark-400">
                No commitment. Just a conversation.
              </span>
            </div>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-brand-dark-200 hover:text-white px-8 py-4 rounded-xl text-lg transition-all border border-brand-dark-500/50 hover:border-brand-dark-300 backdrop-blur-sm"
            >
              See How It Works
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Image navigation dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImage
                ? "w-8 h-2 bg-brand-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
