"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "City Basic",
    description: "Ethiopia on a budget, not a compromise",
    features: [
      "Safe, vetted guesthouses",
      "Local food tours",
      "Ride transport + fixer on call",
      "24/7 WhatsApp support",
    ],
  },
  {
    name: "City Pro",
    description: "Comfort, culture and a private driver",
    features: [
      "4-star hotels",
      "Private dedicated car",
      "Entoto and Unity Park",
      "Museum entries included",
    ],
  },
  {
    name: "Eco Adventure",
    description: "Off the beaten path. Into the wild.",
    features: [
      "Wenchi Crater Lake, Langano and Kuriftu",
      "4WD transport",
      "High-end eco-lodges",
      "Full safety cover",
    ],
  },
  {
    name: "Premium Luxury",
    description: "Ethiopia without limits",
    features: [
      "Sheraton or Skylight hotel",
      "Luxury SUV",
      "Exclusive cultural dinners",
      "Private security",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-brand-dark-950 scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-brand-amber-400 uppercase tracking-widest mb-4">
            Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Choose Your{" "}
            <span className="text-brand-amber-400">Experience</span>
          </h2>
          <p className="text-lg text-brand-dark-300 max-w-3xl mx-auto">
            Every tier includes a dedicated fixer, vetted transport, and price
            protection.{" "}
            <span className="text-brand-amber-400 font-medium">Always.</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-brand-dark-700/50 bg-brand-dark-800/50 p-6 lg:p-8 transition-all duration-300 hover:border-brand-dark-600/50"
            >
              <div className="mb-6">
                <h3 className="text-xl font-serif text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-brand-dark-400">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-brand-dark-300">
                    <Check className="w-4 h-4 text-brand-teal-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#book"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all bg-brand-teal-600 hover:bg-brand-teal-500 text-white"
              >
                This is me — Book a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <p className="text-center text-sm text-brand-dark-400 mt-10 max-w-xl mx-auto">
          Exact pricing is discussed on your free call — every trip is
          custom-built for you.
        </p>
      </div>
    </section>
  );
}
