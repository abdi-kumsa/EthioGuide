"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

export default function BookCallSection() {
  return (
    <section id="book" className="py-24 lg:py-32 bg-brand-dark-950 scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Let’s talk about{" "}
            <span className="text-brand-amber-400">your trip</span>
          </h2>
          <p className="text-lg text-brand-dark-300">
            It’s free. It’s casual. And it might be the best 30
            minutes you spend before your trip.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://calendly.com/kumsaaabdii/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-teal-600/10 border border-brand-teal-600/20 hover:bg-brand-teal-600/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-600/20 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-brand-teal-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white group-hover:text-brand-teal-200 transition-colors">
                  Book a Free Call
                </div>
                <div className="text-sm text-brand-dark-400">
                  Pick a time that works for you
                </div>
              </div>
              <Phone className="w-5 h-5 text-brand-teal-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Prefer to message divider */}
          <p className="text-center text-brand-dark-400 text-sm pt-4">
            Prefer to message us directly?
          </p>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="https://wa.me/251965641529"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark-800/50 border border-brand-dark-700/50 hover:bg-brand-dark-800 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white group-hover:text-emerald-200 transition-colors">
                  Chat on WhatsApp
                </div>
                <div className="text-sm text-brand-dark-400">
                  Fast replies — usually within minutes
                </div>
              </div>
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </Link>
          </motion.div>

          {/* Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://t.me/Aadrikh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark-800/50 border border-brand-dark-700/50 hover:bg-brand-dark-800 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-600/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-sky-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white group-hover:text-sky-200 transition-colors">
                  Message on Telegram
                </div>
                <div className="text-sm text-brand-dark-400">
                  Fast replies — usually within minutes
                </div>
              </div>
              <MessageCircle className="w-5 h-5 text-sky-400" />
            </Link>
          </motion.div>
        </div>

        {/* Contact Form Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-brand-dark-800/30 border border-brand-dark-700/30"
        >
          <h3 className="text-xl font-serif text-white mb-6 text-center">
            Or leave us your details
          </h3>
          <form
            action="https://formspree.io/f/mpqerjak"
            method="POST"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="travel-dates"
                placeholder="Planned Travel Dates"
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors"
              />
              <select
                name="package"
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white focus:outline-none focus:border-brand-teal-600 transition-colors"
              >
                <option value="" disabled>
                  Which package interests you?
                </option>
                <option value="city-basic">City Basic</option>
                <option value="city-pro">City Pro</option>
                <option value="eco-adventure">Eco Adventure</option>
                <option value="premium-luxury">Premium Luxury</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-brand-teal-600 hover:bg-brand-teal-500 text-white py-3 rounded-lg font-medium transition-all hover:shadow-xl hover:shadow-brand-teal-600/20"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
