"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowUpRight, TextQuote } from "lucide-react";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const openMono = Open_Sans({
  variable: "--font-open-mono",
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <section
      className={`relative overflow-hidden ${openSans.variable} ${openMono.variable}`}
    >
      <div className="container relative mx-auto px-6 pt-20">
        {/* HELLO BUBBLE */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2">
          <div className="relative rounded-full border px-4 py-1 text-sm font-medium">
            Hello! <Image src="/down-left-brush.png" alt="brush-png" height={20} width={20} className="absolute -right-4 -top-4 rotate-180"/>
          </div>
        </div>

        {/* MAIN HEADING */}
        <h1 className="mx-auto top-8 max-w-4xl relative text-center text-5xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          I&apos;m <span className="text-orange-500">Shruti Sharma</span>,{" "}
          <br />
          <Image alt={"brush image"} className="absolute left-25 -bottom-5" height={50} width={50} src={"/down-left-brush.png"}/>Certified Psychologist
        </h1>

        {/* LEFT QUOTE */}
        <div className="absolute left-6 top-1/2 hidden max-w-xs -translate-y-1/2 lg:block">
          <p className="text-sm leading-relaxed text-black font-medium">
            <Quote stroke="black" fill="black" />
            Life can feel overwhelming at times. Whether you are dealing with
            anxiety, emotional exhaustion, relationship concerns, or simply
            feeling stuck, you do not have to go through it alone. Therapy
            offers a safe, confidential space to understand yourself better and
            move toward balance and clarity.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="absolute right-6 top-1/2 hidden font-['Urbanist'] -translate-y-1/2 lg:block">
          <div className="rounded-xl px-6 py-4 ">
            <div className="flex justify-end gap-1 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-3xl font-bold">10 Years</p>
            <p className="text-sm text-right text-muted-foreground">Experience</p>
          </div>
        </div>

        {/* IMAGE + ORANGE ARC */}
        <div className="relative flex justify-center">
          {/* ORANGE SEMI CIRCLE */}
          <div className="absolute bottom-0 top-20 h-[380px] w-[380px] rounded-full bg-orange-300 sm:h-[600px] sm:w-[600px]" />

          {/* IMAGE */}
          <img
            src="/photo.png"
            alt="Shruti Sharma"
            // fill
            // priority
            className="relative z-10 h-100"
          />

          {/* CTA BUTTON */}
          <Button
            size="lg"
            className="max-w-[200px] w-full absolute bottom-10 z-20 rounded-full bg-gray-300/30 hover:bg-gray-300/50! backdrop-filter-blur backdrop-blur-lg border-1 border-gray-200 px-10 py-6 text-base font-semibold hover:bg-orange-600"
          >
            Get in Touch <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
