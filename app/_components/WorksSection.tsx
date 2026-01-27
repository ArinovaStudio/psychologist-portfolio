"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Learnlogicify Landing Page",
    image: "/example.jpg",
  },
  {
    title: "Winzee Web Chat application",
    image: "/example.jpg",
  },
  {
    title: "Learnlogicify Landing Page",
    image: "/example.jpg",
  },
  {
    title: "Learnlogicify Landing Page",
    image: "/example.jpg",
  },
]

export default function WorksSection() {
  return (
    <section className="bg-white py-28 flex items-center flex-col gap-4">
      <div className="container mx-auto px-10">

        {/* HEADER */}
        <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            IMPRESSIVE{" "}
            <span className="text-primary">WORKS</span>
          </h2>

          <p className="max-w-xs text-sm text-justify uppercase text-foreground lg:ml-auto">
            Here’s a selection of projects that showcase my passion for design
            and development, reflecting creativity and innovation.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="group">
              
              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={520}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TITLE + ARROW */}
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  <Button size="icon" className="rounded-full mr-4 bg-transparent border-1 border-black text-black hover:bg-black hover:text-white"><ArrowRight size={18} /></Button>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Badge variant={"outline"} className='border-1 border-primary text-primary text-md px-3 py-1'>
           <div className='h-2 w-2  rounded-full bg-primary'/> Explore More
        </Badge>
    </section>
  )
}
