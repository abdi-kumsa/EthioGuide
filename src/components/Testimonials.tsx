"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "London, UK",
    text: "I was nervous traveling to Ethiopia solo as a woman. Abdi and his team checked in daily, arranged safe transport, and introduced me to the most incredible local artisans. I never felt alone.",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Melbourne, Australia",
    text: "The pricing difference was insane. Hotels quoted me $200/night online — EthioGuard got me the same room for $65. They saved me over $1,200 on a 10-day trip.",
    rating: 5,
  },
  {
    name: "Priya R.",
    location: "Toronto, Canada",
    text: "We did the Eco Adventure package and it was life-changing. Trekking Simien Mountains with a guide who grew up in the village below? That's something no tour company can give you.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Trusted by Travelers
          </h2>
          <p className="text-lg text-brand-dark-300">
            Real stories from people who traveled with EthioGuard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-brand-dark-800/50 border border-brand-dark-700/50"
            >
              <Quote className="w-8 h-8 text-brand-teal-600/30 mb-4" />
              <p className="text-brand-dark-200 leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-brand-dark-700/50">
                <div>
                  <div className="text-sm font-medium text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-brand-dark-400">
                    {item.location}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-brand-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
