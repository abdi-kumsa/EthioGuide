"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Car, MapPin } from "lucide-react";

const promises = [
  {
    icon: Scale,
    title: "Price Protection",
    description:
      "You never pay the tourist rate. We negotiate every Birr on your behalf.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "Every expense logged in real time. You see exactly where your money goes.",
  },
  {
    icon: Car,
    title: "Vetted Transport",
    description:
      "Every driver is background-checked. Every route is pre-approved.",
  },
  {
    icon: MapPin,
    title: "Informed Freedom",
    description:
      "We give you a Safety Zone Map so you can explore the city confidently on your own.",
  },
];

export default function PromiseSection() {
  return (
    <section id="promise" className="py-24 lg:py-32 bg-amber-50/90 scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark-900 mb-6">
            The EthioGuide{" "}
            <span className="text-brand-amber-600">Promise</span>
          </h2>
          <p className="text-lg text-brand-dark-600">
            This is what separates us from every other tour company.
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
              className="flex items-start gap-5 p-6 lg:p-8 rounded-2xl bg-white border border-amber-200/60 hover:border-amber-300/80 hover:shadow-lg hover:shadow-amber-200/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-600/10 border border-brand-teal-600/20 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-brand-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-brand-dark-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-dark-600 leading-relaxed">
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
