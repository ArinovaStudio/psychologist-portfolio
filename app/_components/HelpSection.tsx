"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Arapey, Unbounded } from "next/font/google";
const services = [
  ["Mental Stress", "/example.jpg"],
  ["Relationship Therapist", "/about.png"],
  ["Anxiety Release", "/book.png"],
  ["Health improvements", "/person.png"],
  ["Consultant", "/photo.png"],
];
const unBounded = Unbounded({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const arapey = Arapey({
  subsets: ["latin"],
  weight: "400", // Arapey is available in 400 and 400 italic
});

export default function HelpSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center text-4xl font-semibold tracking-tight md:text-5xl"
        >
          HOW can I <span className="text-primary">HELP</span> You?
        </motion.h2>

        {/* CONTENT */}
        <div className="relative grid grid-cols-1 gap-16">
          {/* LEFT LIST */}
          <div className="relative divide-y">
            {services.map(([item], index) => (
              <motion.div
                key={item}
                onMouseOver={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  `cursor-pointer relative py-8 pl-6 text-4xl transition-colors ${arapey.className}`,
                  index === activeIndex
                    ? "bg-primary text-white"
                    : "text-black italic!"
                )}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE (aligned with active row) */}
          <div className="absolute w-80 h-90 right-30 top-30 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 0, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <Image
                  src={services[activeIndex][1]}
                  alt={services[activeIndex][0]}
                  fill
                  className="h-90! w-60!"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
