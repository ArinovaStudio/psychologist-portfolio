"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      className={`relative overflow-hidden ${openSans.variable}`}
      id="home"
    >
      <div className="container relative mx-auto px-6 pt-20">

        {/* HELLO BUBBLE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-6 -translate-x-1/2"
        >
          <div className="relative rounded-full border px-4 py-1 text-sm font-medium">
            Hello!
            <Image
              src="/down-left-brush.png"
              alt="brush"
              height={20}
              width={20}
              className="absolute -right-4 -top-4 rotate-180"
            />
          </div>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto top-8 relative max-w-4xl text-center text-5xl font-medium leading-tight sm:text-5xl lg:text-6xl"
        >
          I&apos;m <span className="text-orange-500">Shruti Sharma</span>,
          <br />
          Certified Psychologist
        </motion.h1>

        {/* LEFT QUOTE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-6 top-1/2 hidden max-w-xs -translate-y-1/2 lg:block"
        >
          <p className="text-sm font-medium grid leading-relaxed">
            <Quote className="inline-block mr-1" fill="black" />
            Life can feel overwhelming at times. Whether you are dealing with anxiety, emotional exhaustion, relationship concerns, or simply feeling stuck, you do not have to go through it alone. Therapy offers a safe, confidential space to understand yourself better and move toward balance and clarity.
          </p>
        </motion.div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="rounded-xl px-6 py-4">
            <div className="flex justify-end gap-1 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-3xl font-bold">10 Years</p>
            <p className="text-sm text-right text-muted-foreground">
              Experience
            </p>
          </div>
        </motion.div>

        {/* IMAGE + ORANGE ARC */}
        <div className="relative flex justify-center">

          {/* ORANGE CIRCLE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-20 h-[380px] w-[380px] rounded-full bg-orange-300 sm:h-[600px] sm:w-[600px]"
          />

          {/* IMAGE */}
          <motion.img
            src="/photo.png"
            alt="Shruti Sharma"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-10 h-[420px]"
          />

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring" }}
            className="absolute bottom-10 z-20"
          >
            <Button
              size="lg"
              className="rounded-full hover:bg-gray-300/50! bg-gray-300/30 backdrop-blur-lg px-10 py-6 text-base font-semibold hover:bg-orange-600"
            >
              Get in Touch <ArrowUpRight />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
