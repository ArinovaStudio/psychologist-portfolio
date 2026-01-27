"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react";

const services = [
  "Mental Stress",
  "Relationship Therapist",
  "Anxiety Release",
  "Health improvements",
  "Consultant",
]
export default function HelpSection() {
  const [activeIndex,setActiveIndex] = useState(2);
    return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <h2 className="mb-20 text-center text-4xl font-semibold tracking-tight md:text-5xl">
          HOW can I{" "}
          <span className="text-primary">HELP</span> You?
        </h2>

        {/* CONTENT */}
        <div className="relative grid grid-cols-1 gap-16">

          {/* LEFT LIST */}
          <div className="relative divide-y">
            {services.map((item, index) => (
              <div
                key={item}
                onMouseOver={()=>setActiveIndex(index)}
                className={cn(
                  "cursor-pointer relative py-8 pl-6 text-3xl font-serif transition-colors",
                  index === activeIndex
                    ? "bg-primary text-white"
                    : "text-black italic"
                )}
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE (aligned with active row) */}
          <div className="absolute w-80 h-90 right-30 top-30 hidden lg:block">
              <Image
                src="/example.jpg"
                alt="Anxiety Release"
                fill
              />
          </div>
        </div>
      </div>
    </section>
  )
}
