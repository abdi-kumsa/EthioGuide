"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

export default function BookCallSection() {
  return (
    <section id="book" className="py-24 lg:py-32 bg-brand-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Experience{" "}
            <span className="text-brand-amber-400">Ethiopia</span>?
          </h2>
          <p className="text-lg text-brand-dark-300">
            Your first call is free and there&apos;s zero commitment. Let&apos;s
            talk about the trip you&apos;ve been dreaming of.
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
              href="#"
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

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="#"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark-800/50 border border-brand-dark-700/50 hover:bg-brand-dark-800 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white group-hover:text-emerald-200 transition-colors">
                  WhatsApp Us
                </div>
                <div className="text-sm text-brand-dark-400">
                  Chat instantly with our team
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
              href="#"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-dark-800/50 border border-brand-dark-700/50 hover:bg-brand-dark-800 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-600/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-sky-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white group-hover:text-sky-200 transition-colors">
                  Telegram
                </div>
                <div className="text-sm text-brand-dark-400">
                  Reach us on Telegram
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
            Or send us a message
          </h3>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-brand-dark-800 border border-brand-dark-700 text-white placeholder-brand-dark-400 focus:outline-none focus:border-brand-teal-600 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your dream trip..."
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
