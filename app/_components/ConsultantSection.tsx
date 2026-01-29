"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Award, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Unbounded, Urbanist } from "next/font/google";
const geistSans = Unbounded({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const urbanistMono = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function ConsultantSection() {
  return (
    <section className={`w-full pb-20 px-4 `}>
      <div className="mx-auto max-w-3xl text-center space-y-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`space-y-2 font-semibold ${geistSans.className}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Want a consultant?
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary">
            Let’s Discuss
          </h3>
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mx-auto flex max-w-xl items-center rounded-full border bg-white px-3 py-2 shadow-sm ${urbanistMono.className}`}
        >
          <div className="flex items-center justify-center h-10 max-w-10! w-full rounded-full bg-primary/10 text-primary">
            <Mail className="h-4 w-4" />
          </div>

          <Input
            placeholder="Enter Email Address"
            className="border-none focus-visible:ring-0 font-urbanist shadow-none focus-visible:ring-offset-0 text-sm"
          />

          <Button className="ml-2 rounded-full px-6">
            Send
          </Button>
        </motion.div>

        {/* Meta Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-slate-600"
        >
          {[
            { icon: Star, text: "4.9/5 Average Ratings" },
            { icon: Award, text: "25+ Winning Awards" },
            { icon: ShieldCheck, text: "Certified Product Designer" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <item.icon size={20} fill="black" stroke="white" />
              <span className="font-poppins text-black">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
