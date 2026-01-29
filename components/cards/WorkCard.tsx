"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
export default function WorkCard({ project }: { project: any }) {
  return (
    <div>
      {/* IMAGE CARD */}
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={urlFor(project.image).width(600).height(400).url()}
          alt={project.title}
          width={720}
          height={520}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* TITLE + ARROW */}
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-medium">
          <Button
            size="icon"
            className="rounded-full mr-4 bg-transparent border-1 border-black text-black hover:bg-black hover:text-white"
          >
            <ArrowRight size={18} />
          </Button>
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <Card className="w-full overflow-hidden">
      {/* Image */}
      <Skeleton className="h-48 w-full rounded-none" />

      <CardContent className="space-y-3 pt-4">
        {/* Title */}
        <Skeleton className="h-5 w-3/4" />

        {/* Subtitle / meta */}
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}
