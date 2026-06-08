"use client";

import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";

export default function FoundersSection() {
  return (
    <section id="meet-us" className="py-24 lg:py-32 bg-brand-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Meet <span className="text-brand-amber-400">Abdi &amp; Mo</span>
          </h2>
          <p className="text-lg text-brand-dark-300">
            The faces behind EthioGuard. Two friends on a mission to change how
            the world experiences Ethiopia.
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
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-teal-600/20 to-brand-teal-800/20 border-2 border-brand-teal-600/30 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-brand-teal-400" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Abdi</h3>
            <div className="text-sm text-brand-amber-400 mb-4">
              Local Expert &amp; Fixer
            </div>
            <p className="text-brand-dark-300 leading-relaxed">
              Born and raised in Addis Ababa, Abdi knows Ethiopia like the back
              of his hand. From the best{" "}
              <em>injera</em> spots in the city to hidden trails in the
              highlands — he&apos;s your gateway to the real Ethiopia.
            </p>
          </motion.div>

          {/* Mo */}
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
            <h3 className="text-2xl font-serif text-white mb-2">Mo</h3>
            <div className="text-sm text-brand-amber-400 mb-4">
              Experience Director
            </div>
            <p className="text-brand-dark-300 leading-relaxed">
              With years of experience curating travel experiences, Mo ensures
              every EthioGuard trip is seamless, safe, and unforgettable. He
              brings the structure so you can focus on the adventure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
