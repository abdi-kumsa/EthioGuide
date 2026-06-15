"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Map, Building2, Mountain, Crown } from "lucide-react";

const tiers = [
  {
    name: "The Local Pass",
    description: "Addis like a resident, not a tourist",
    level: "Level 01",
    popular: false,
    color: "emerald",
    icon: Map,
    features: [
      "Vetted local guesthouses & boutique stays",
      "Hidden-gem food trails & coffee ceremony",
      "Ride app + fixer on call via WhatsApp",
      "Safety zone map of the city",
    ],
  },
  {
    name: "The Addis Insider",
    description: "Culture, comfort & a city that opens up for you",
    level: "Level 02",
    popular: true,
    color: "emerald",
    icon: Building2,
    features: [
      "4-star curated hotels",
      "Dedicated private driver, all day",
      "Entoto, Unity Park & National Museum",
      "Private fixer — your 24/7 local",
    ],
  },
  {
    name: "Into the Wild",
    description: "Ethiopia's landscapes, untouched and unforgettable",
    level: "Level 03",
    popular: false,
    color: "amber",
    icon: Mountain,
    features: [
      "Wenchi Crater Lake, Langano & Kuriftu",
      "4WD expedition vehicle",
      "Premium eco-lodges in the wild",
      "Expert naturalist fixer guide",
    ],
  },
  {
    name: "The Sovereign Experience",
    description: "Ethiopia curated exclusively for you",
    level: "Level 04",
    popular: false,
    color: "slate",
    icon: Crown,
    features: [
      "Sheraton or Skylight — your suite awaits",
      "Luxury SUV + uniformed driver",
      "Private cultural & culinary events",
      "Dedicated private security detail",
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
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            
            // Dynamic color mapping for dark mode adaptation of the mockup
            const colorStyles = {
              emerald: {
                border: tier.popular ? "border-emerald-500/80" : "border-emerald-500/30",
                hoverBorder: "hover:border-emerald-400/80",
                pillBg: "bg-emerald-950/50",
                pillText: "text-emerald-400",
                icon: "text-emerald-400",
                btnBg: tier.popular ? "bg-emerald-600 hover:bg-emerald-500" : "bg-emerald-900/50 hover:bg-emerald-800/80 border border-emerald-700/50",
                btnText: "text-white",
                check: "text-emerald-400",
                popularBg: "bg-emerald-500"
              },
              amber: {
                border: "border-amber-500/30",
                hoverBorder: "hover:border-amber-400/80",
                pillBg: "bg-amber-950/50",
                pillText: "text-amber-400",
                icon: "text-amber-400",
                btnBg: "bg-amber-900/40 hover:bg-amber-800/60 border border-amber-700/50",
                btnText: "text-amber-50",
                check: "text-amber-400",
                popularBg: ""
              },
              slate: {
                border: "border-slate-500/30",
                hoverBorder: "hover:border-slate-400/80",
                pillBg: "bg-slate-800/50",
                pillText: "text-slate-300",
                icon: "text-slate-300",
                btnBg: "bg-slate-800 hover:bg-slate-700 border border-slate-600/50",
                btnText: "text-white",
                check: "text-slate-400",
                popularBg: ""
              }
            }[tier.color as "emerald" | "amber" | "slate"];

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative flex flex-col rounded-2xl border ${colorStyles.border} bg-brand-dark-900/80 backdrop-blur-sm p-6 lg:p-8 transition-colors duration-300 ${colorStyles.hoverBorder}`}
              >
                {/* Most Popular Badge */}
                {tier.popular && (
                  <div className={`absolute -top-3 right-6 ${colorStyles.popularBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    Most Popular
                  </div>
                )}

                {/* Level Pill */}
                <div className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium mb-6 ${colorStyles.pillBg} ${colorStyles.pillText}`}>
                  {tier.level}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <Icon className={`w-8 h-8 ${colorStyles.icon}`} strokeWidth={1.5} />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-xl font-serif text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-brand-dark-300 leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-brand-dark-200">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${colorStyles.check}`} />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#book"
                  className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${colorStyles.btnBg} ${colorStyles.btnText}`}
                >
                  This is me — Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing note */}
        <p className="text-center text-sm text-brand-dark-400 mt-12 max-w-xl mx-auto">
          Exact pricing is discussed on your free call — every trip is
          custom-built for you.
        </p>
      </div>
    </section>
  );
}
