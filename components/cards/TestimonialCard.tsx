import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

import { Poppins, Unbounded } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
const geistSans = Unbounded({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Unbounded({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '100', '100'], // Specify needed weights
  variable: '--font-poppins'
})

interface Review{
    review: any
}
export default function TestimonialCard({review}: Review) {
  return (
    <Card className="relative w-full min-w-lg! max-w-lg max-h-[280px] rounded-2xl h-full! border border-white/10 bg-gray-300/20 backdrop-blur-lg">
      <CardContent className={`p-6 space-y-4 flex flex-col max-h-full ${geistMono.className} ${geistSans.className}`}>
        {/* Quote icon */}
        <div className="absolute right-6 top-6 text-white text-9xl">
          <Quote fill="white" stroke="white"/>
        </div>

        {/* Profile */} 
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={urlFor(review.avatar).width(600).height(400).url()}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-100">{review.name}</p>
            <p className="text-sm text-gray-400">{review.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: Math.round(review.rating) }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-orange-500 text-orange-500"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-300">{Math.round(review.rating)}</span>
        </div>

        {/* Content */}
        <p className={`text-sm text-gray-300 leading-relaxed flex-1 h-full ${poppins.className}`}>{review.message}</p>
      </CardContent>
    </Card>
  );
}
