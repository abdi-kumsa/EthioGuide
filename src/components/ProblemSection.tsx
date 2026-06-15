"use client";

import { motion } from "framer-motion";
import { ShieldAlert, DollarSign, MapPin } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "You overpay for everything",
    description:
      "Taxi drivers, market vendors, restaurants — the “foreigner price” is real and it’s expensive.",
  },
  {
    icon: MapPin,
    title: "You don’t know who to trust",
    description:
      "Fake guides, scam hotels, unsafe routes. Without a local, every decision feels like a gamble.",
  },
  {
    icon: ShieldAlert,
    title: "You miss the real Ethiopia",
    description:
      "The places worth seeing aren’t on TripAdvisor. The food worth eating isn’t near your hotel.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Why Most Visitors{" "}
            <span className="text-brand-amber-400">Get It Wrong</span>
          </h2>
          <p className="text-lg text-brand-dark-300">
            Everything amazing about Ethiopia is hidden behind a wall of inflated
            prices, bad information, and tourist traps. Here’s what you’re
            actually up against.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-brand-dark-800/50 border border-brand-dark-700/50 hover:border-brand-dark-600/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-amber-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-brand-amber-400" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-brand-dark-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
