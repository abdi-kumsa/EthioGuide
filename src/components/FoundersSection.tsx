"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import abdiImg from "../../public/images/abdi.jpg";

export default function FoundersSection() {
  return (
    <section id="meet-us" className="py-24 lg:py-32 bg-amber-50/80 scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark-900 mb-6">
            You’re not booking a service.{" "}
            <span className="text-brand-amber-600">You’re trusting people.</span>
          </h2>
          <p className="text-lg text-brand-dark-600">
            So here’s who we are.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Abdi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brand-teal-600/30">
              <Image
                src={abdiImg}
                alt="Abdi"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-brand-dark-900 mb-2">Abdi</h3>
            <div className="text-sm text-brand-amber-600 mb-4">
              Co-Founder &amp; Lead Fixer
            </div>
            <p className="text-brand-dark-700 leading-relaxed">
              Born and raised in Ethiopia. I know almost every neighborhood, every
              vendor, every shortcut. I’ve been doing this for years — and
              I genuinely love showing people the Ethiopia I grew up in.
            </p>
          </motion.div>

          {/* Moyi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-amber-500/20 to-brand-amber-700/20 border-2 border-brand-amber-500/30 flex items-center justify-center">
              <Compass className="w-12 h-12 text-brand-amber-400" />
            </div>
            <h3 className="text-2xl font-serif text-brand-dark-900 mb-2">Moyi</h3>
            <div className="text-sm text-brand-amber-600 mb-4">
              Co-Founder &amp; Experience Director
            </div>
            <p className="text-brand-dark-700 leading-relaxed">
              I’m the one you probably found on Instagram. I travel, I
              document, and I make sure every trip we run is one worth talking
              about for years.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
