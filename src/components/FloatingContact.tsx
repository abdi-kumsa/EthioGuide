"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      >
        <a
          href="https://wa.me/251965641529"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:-translate-y-0.5 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
          <span className="max-w-24 sm:max-w-0 sm:group-hover:max-w-24 overflow-hidden transition-all duration-300 whitespace-nowrap text-sm font-medium">
            Chat with us
          </span>
        </a>
      </motion.div>

      {/* Telegram */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
      >
        <a
          href="https://t.me/Aadrikh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-4 py-3 rounded-full shadow-xl shadow-amber-500/30 transition-all hover:scale-105 hover:-translate-y-0.5 group"
          aria-label="Message on Telegram"
        >
          <Send className="w-5 h-5 shrink-0" />
          <span className="max-w-24 sm:max-w-0 sm:group-hover:max-w-24 overflow-hidden transition-all duration-300 whitespace-nowrap text-sm font-medium">
            Message us
          </span>
        </a>
      </motion.div>
    </div>
  );
}
