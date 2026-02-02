"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { Poppins, Unbounded } from "next/font/google";
const geistSans = Poppins({
  subsets: ['latin'],
  weight: ['500', '500', '200'], // Specify needed weights
  variable: '--font-poppins'
});

const unbounded = Unbounded({
  subsets: ['latin'],
  
})
export default function AboutSection() {
  return (
    <section className="w-full" id="about">
      <Card className={`mx-auto shadow-none rounded-3xl bg-gray-200/60 p-6 md:p-12 ${unbounded.className}`}>
        <div className="grid grid-cols-1 px-5 items-center gap-10 md:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold max-md:text-center tracking-tight text-orange-500 md:text-5xl"
            >
              ABOUT ME
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
              className={`mt-6 space-y-5 font-medium! leading-relaxed ${geistSans.className}`}
            >
              {[
                `I am Shruti Sharma, a psychologist dedicated to helping adults build emotional resilience, self-awareness, and healthier coping patterns. My approach to therapy is warm, collaborative, and client-centered.`,
                `I believe every individual’s experience is unique, and therapy should be tailored to your personal needs, pace, and goals. I work with adults facing emotional challenges related to stress, anxiety, relationships, career pressure, and life transitions.`,
                `In our sessions, you will find a non-judgmental and supportive environment where you can speak openly, explore your thoughts and emotions, and develop practical tools for lasting change. Therapy is not about fixing what is “wrong” with you—it is about understanding yourself better and learning healthier ways to move forward.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center max-md:hidden md:justify-end"
          >
            <Image
              src="/about.png"
              alt="Therapist illustration"
              width={320}
              height={320}
              className="w-[260px] md:w-[360px]"
              priority
            />
          </motion.div>
        </div>
      </Card>
    </section>
  );
}
