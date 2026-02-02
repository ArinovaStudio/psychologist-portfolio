"use client";

import BlogCard from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const CustomSwiper = dynamic(() => import("@/components/CustomSwiper"), { ssr: false });

const blogs = [
  {
    id: 1,
    image: "/example.jpg",
    category: "UI / UX Design",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    id: 2,
    image: "/example.jpg",
    category: "App Design",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    title: "Sugee: Loan Management System for Rural Sector.",
  },
  {
    id: 3,
    image: "/example.jpg",
    category: "App Design",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    title: "Cinetrade: Innovative way to invest in Digital Media",
  },
];
import {Lexend} from "next/font/google";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { blogsQuery } from "@/lib/queries";
import { Loader2 } from "lucide-react";
import Loader from "@/components/Loader";
const lexend = Lexend({
  subsets: ["latin"]
})

export default function BlogsReference() {
  const [loaded,setLoaded] = useState(false);
  const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await client.fetch(blogsQuery);
      setBlogs(response)
      setLoaded(true);
    }
    fetchData();
  },[]);
  return (
    <section className="w-full py-16" id={"blogs"}>
      <div className="container mx-auto md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center justify-between max-md:mx-5 md:mx-20"
        >
          <h2 className={`text-3xl font-bold text-slate-800 ${lexend.className}`}>
            From my <br /> blog post
          </h2>

          <Button className="rounded-full px-6">See All</Button>
        </motion.div>

        {/* Cards */}
        <CustomSwiper>
          {loaded ? blogs.map((blog: any, index) => (
            <SwiperSlide key={blog._id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex justify-center"
              >
                <BlogCard blog={blog} />
              </motion.div>
            </SwiperSlide>
          )):<Loader/>}
        </CustomSwiper>

      </div>
    </section>
  );
}
