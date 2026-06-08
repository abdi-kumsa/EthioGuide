"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "City Basic",
    price: "$199",
    description: "Perfect for solo travelers on a budget exploring Addis Ababa.",
    features: [
      "Airport pickup & drop-off",
      "1 dedicated local guide",
      "3 curated experiences",
      "Restaurant recommendations",
      "24/7 WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "City Pro",
    price: "$449",
    description: "The complete city experience with deeper cultural immersion.",
    features: [
      "Everything in City Basic",
      "Private driver for 5 days",
      "5 curated experiences",
      "Home-cooked dinner with a local family",
      "Traditional coffee ceremony",
      "Photography guide",
    ],
    popular: true,
  },
  {
    name: "Eco Adventure",
    price: "$799",
    description: "Explore Ethiopia's natural wonders with expert local guides.",
    features: [
      "Everything in City Pro",
      "7-day itinerary",
      "Danakil Depression expedition",
      "Simien Mountains trekking",
      "Expert naturalist guide",
      "Camping equipment included",
      "All park entrance fees",
    ],
    popular: false,
  },
  {
    name: "Premium Luxury",
    price: "Custom",
    description: "Tailor-made luxury travel with VIP treatment throughout.",
    features: [
      "Fully customizable itinerary",
      "VIP airport lounge access",
      "Luxury accommodation booking",
      "Private chef experience",
      "Chauffeur-driven SUV",
      "Helicopter transfer options",
      "Personal concierge 24/7",
      "Exclusive cultural ceremonies",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-brand-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Choose Your{" "}
            <span className="text-brand-amber-400">Adventure</span>
          </h2>
          <p className="text-lg text-brand-dark-300">
            Every itinerary is custom-built. These packages are starting points
            — we&apos;ll tailor every detail to you.
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
              className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                tier.popular
                  ? "bg-brand-teal-600/10 border-brand-teal-500/40 shadow-xl shadow-brand-teal-600/10 scale-[1.02] lg:scale-105"
                  : "bg-brand-dark-800/50 border-brand-dark-700/50 hover:border-brand-dark-600/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-amber-500 text-brand-dark-950 text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-serif text-white mb-1">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {tier.price}
                </div>
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
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all ${
                  tier.popular
                    ? "bg-brand-teal-600 hover:bg-brand-teal-500 text-white"
                    : "bg-brand-dark-700 hover:bg-brand-dark-600 text-white border border-brand-dark-600"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
