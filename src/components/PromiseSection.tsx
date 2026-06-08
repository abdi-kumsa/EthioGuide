"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Car, MapPin } from "lucide-react";

const promises = [
  {
    icon: Scale,
    title: "Price Protection",
    description:
      "We negotiate every price upfront. You'll never pay the 'foreigner tax' — what you see is what you pay.",
  },
  {
    icon: Shield,
    title: "Financial Transparency",
    description:
      "Every expense is documented and shared with you. No hidden fees, no surprises, no commissions padded in.",
  },
  {
    icon: Car,
    title: "Vetted Transport",
    description:
      "All drivers and vehicles are personally inspected and tracked. Your safety on Ethiopian roads is our priority.",
  },
  {
    icon: MapPin,
    title: "Safety Guidance",
    description:
      "We provide real-time safety briefings, curated neighborhood guides, and 24/7 emergency support throughout your trip.",
  },
];

export default function PromiseSection() {
  return (
    <section id="promise" className="py-24 lg:py-32 bg-brand-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            The EthioGuard{" "}
            <span className="text-brand-amber-400">Promise</span>
          </h2>
          <p className="text-lg text-brand-dark-300">
            We don&apos;t just plan trips. We guarantee your peace of mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {promises.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 lg:p-8 rounded-2xl bg-brand-dark-800/30 border border-brand-dark-700/30 hover:bg-brand-dark-800/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-600/10 border border-brand-teal-600/20 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-brand-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-dark-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
