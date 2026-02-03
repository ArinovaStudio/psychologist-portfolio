import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { Poppins } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
const geistSans = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '100', '100'], // Specify needed weights
  variable: '--font-poppins'
});

interface Blog {
  blog: any;
}
export default function BlogCard({ blog }: Blog) {
  return (
    <Card className="border-none md:max-w-xs max-md:max-w-md w-full mx-auto! shadow-none p-0 m-0">
      <CardContent className="p-0 ">
        {/* Image Box */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", position: "absolute" }}
          width="0"
          height="0"
        >
          <defs>
            <clipPath id="clip" clipPathUnits="objectBoundingBox">
              <path d="M0.1,0H0.9A0.1,0.1,0,0,1,1,0.1V0.6A0.1,0.1,0,0,1,0.9,0.7H0.82A0.1,0.1,0,0,0,0.72,0.8V0.9A0.1,0.1,0,0,1,0.62,1H0.1A0.1,0.1,0,0,1,0,0.9V0.1A0.1,0.1,0,0,1,0.1,0Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="relative max-md:h-[400px] md:h-[300px] w-full overflow-hidden rounded-2xl">
          <Image
            src={urlFor(blog.coverImage).width(600).height(400).url()}
            alt={blog.title}
            fill 
            className="object-cover w-full h-full"
            style={{clipPath:`url("#clip")`}}
          />

          <Link href={`/blog/${blog.slug.current}`}>
          <Button className="absolute hover:bg-gray-800! text-3xl! h-18! w-18! max-md:right-3 max-md:bottom-3 md:bottom-1 md:right-1 max-md:scale-125 md:scale-110 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
            <ArrowUpRight className="scale-200" size={40} />
          </Button> 
          </Link>
        </div>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-3">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
            {blog.tagline}
          </span>
        </div>
 
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <span className="text-orange-500">•</span>
          <span>{blog.author}</span>
          <span className="text-orange-500">•</span>
          <span>{(new Date(blog.publishedAt).toLocaleDateString())}</span>
        </div>

        {/* Title */}
        <h3 className={`mt-4 text-lg font-semibold leading-snug text-slate-800 font-normal! ${geistSans.className}!`}>
          {blog.title}
        </h3>
      </CardContent>
    </Card>
  );
}
