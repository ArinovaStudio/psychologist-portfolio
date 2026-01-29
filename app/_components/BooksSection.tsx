"use client";
import ButtonWithBadge from '@/components/ButtonWithBadge'
import ProductCard from '@/components/cards/ProductCard'
import { SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'
const CustomSwiper = dynamic(()=>import("@/components/CustomSwiper"),{ssr:false});
import { Unbounded } from "next/font/google";
import { useEffect, useState } from 'react';
import {client} from "@/sanity/lib/client";
import {booksQuery} from "@/lib/queries";
import { Loader2 } from 'lucide-react';
import Loader from '@/components/Loader';
const unbounded = Unbounded({
  subsets: ["latin"],
})
export default function BooksSection() {
  const [loaded,setLoaded] = useState(false);
  const [books,setBooks] = useState([]);
    useEffect(()=>{
      const fetchData = async () =>{
        const response = await client.fetch(booksQuery);
        setBooks(response)
        setLoaded(true);
      }
      fetchData();
    },[]);
  return (
    <div className='relative mb-10'>
      <div className={`absolute text-9xl -z-1 w-full text-center grid items-center h-full min-h-[300px] ${unbounded.className}`}>
        MY BOOKS
      </div>
      <div className='px-3 w-full flex flex-col items-center gap-10 my-3'>
      <CustomSwiper >
          {
            loaded ? 
            books.map((product,index)=>{
              return <SwiperSlide key={index}><ProductCard product={product}/></SwiperSlide>
            }):<Loader/>
          }
      </CustomSwiper>
        {/* <Badge className='text-black bg-transparent border-1 py-2 px-3 border-gray-200'>
           <div className='h-2 w-2 rounded-full bg-black'/> Explore More
        </Badge> */}
        <ButtonWithBadge text={"Explore More"} color="foreground"/>
      </div>
    </div>
  )
}
