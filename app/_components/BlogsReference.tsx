import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export default function BlogsReference() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-10">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">
            From my <br /> blog post
          </h2>

          <Button className="rounded-full px-6">See All</Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="border-none shadow-none p-0 m-0">
              <CardContent className="p-0">
                {/* Image Box */}
                <div
                  className="relative h-[300px] w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />

                  <Button className="absolute shadow-[0px_0px_0px_20px_white] bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                    <ArrowUpRight size={22} />
                  </Button>
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
                    {blog.category}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <span className="text-orange-500">•</span>
                  <span>{blog.author}</span>
                  <span className="text-orange-500">•</span>
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-800">
                  {blog.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
