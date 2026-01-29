"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import { SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const CustomSwiper = dynamic(() => import("@/components/CustomSwiper"), { ssr: false });

import {Lexend} from "next/font/google";
import { useEffect, useState } from "react";
import {client} from "@/sanity/lib/client";
import { testimonialsQuery } from "@/lib/queries";
import { Loader2 } from "lucide-react";
import Loader from "@/components/Loader";
const lexend = Lexend({
  subsets: ["latin"]
})

const testimonials = [
  {
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    image: "/person.png",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    image: "/person.png",
    rating: 5,
    content:
      "Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    image: "/person.png",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
];

export default function TestimonialsSection() {
  const [loaded,setLoaded] = useState(false);
  const [testimonials,setTestimonials] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await client.fetch(testimonialsQuery);
      setTestimonials(response)
      setLoaded(true);
    }
    fetchData();
  },[]);
  return (
    <section className={`relative overflow-hidden py-24 bg-black text-white font-['lufga'] ${lexend.className}`}>
      <div className="relative z-10 w-full px-5 mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Testimonials That <br />
            Speak to <span className="text-primary">My Results</span>
          </h2>

          <p className="mt-4 text-gray-200 text-base font-['Poppins']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet.
          </p>
        </motion.div>

        {/* Testimonials */}
        {/* <CustomSwiper>
          {loaded ? testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <TestimonialCard review={item} />
              </motion.div>
            </SwiperSlide>
          )):<Loader/>}
        </CustomSwiper> */}
        <div className="w-full">
          <Marquee pauseOnHover={true} className="flex w-full" speed={80}>
          {loaded ? testimonials.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="mr-5"
              >
                <TestimonialCard review={item} />
              </motion.div>
          )):<Loader/>}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
