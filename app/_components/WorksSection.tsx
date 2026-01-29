"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ButtonWithBadge from "@/components/ButtonWithBadge";
import { motion } from "framer-motion";
import {DM_Sans, Unbounded} from "next/font/google";
import WorkCard from "@/components/cards/WorkCard";
import {client} from "@/sanity/lib/client";
import {WorksQuery} from "@/lib/queries";
import Loader from "@/components/Loader";
const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
})

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
];

export default function WorksSection() {
  const [loaded,setLoaded] = useState(false);
  const [projects,setProjects] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await client.fetch(WorksQuery);
      setProjects(response)
      setLoaded(true);
    }
    fetchData();
  },[]);
  return (
    <section className="bg-white py-28 flex items-center flex-col gap-8">
      <div className={`container mx-auto px-10 ${unbounded.className}`}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            IMPRESSIVE <span className="text-primary">WORKS</span>
          </h2>

          <p className={`max-w-sm text-sm text-justify uppercase font-medium text-foreground lg:ml-auto ${dmSans.variable}`}>
            Here’s a selection of projects that showcase my passion for design and development, reflecting creativity and innovation.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          {loaded ? projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <WorkCard project={project}/>
            </motion.div>
          )):<Loader/>}
        </div>
      </div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ButtonWithBadge text={"Explore More"} color={"primary"} />
      </motion.div>
    </section>
  );
}
