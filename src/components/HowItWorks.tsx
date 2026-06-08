"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Smile } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book a Call",
    description:
      "Hop on a free video call with us. Tell us your travel dreams, budget, and timeline — no commitment, just conversation.",
    step: "01",
  },
  {
    icon: ClipboardCheck,
    title: "We Plan Everything",
    description:
      "We craft a custom itinerary, negotiate local prices, book vetted drivers, and set up your daily schedule. You approve every detail.",
    step: "02",
  },
  {
    icon: Smile,
    title: "You Show Up",
    description:
      "Land in Ethiopia and relax. Your personal fixer handles logistics, translates, and ensures every experience is authentic and safe.",
    step: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-brand-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-brand-dark-300">
            Three simple steps to an unforgettable Ethiopian adventure.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-brand-teal-600/40 via-brand-amber-500/40 to-brand-teal-600/40" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-teal-600/10 border border-brand-teal-600/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-brand-teal-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-amber-500 text-xs font-bold text-brand-dark-950 flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-dark-300 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
