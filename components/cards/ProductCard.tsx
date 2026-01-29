import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {DM_Sans} from "next/font/google";
import { urlFor } from "@/sanity/lib/image";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface BookCardProps {
  product: any
}

export default function ProductCard({
  product
}: BookCardProps) {
  return (
    <Card className={`w-full max-w-sm mx-auto! rounded-3xl bg-primary/30 shadow-lg backdrop-filter-blur backdrop-blur-xs ${dmSans.className}`}>
      <CardContent className="p-5 flex flex-col items-center gap-4 pb-0!">
        {/* Book Image */}
        <div className="relative -translate-y-15 h-90 w-60 rounded-xl overflow-hidden">
          <Image
            src={urlFor(product.coverImage).width(600).height(400).url()}
            alt={product.title}
            fill
            className="object-cover absolute! -top-30 "
            priority
          />
        </div>

        {/* Text Content */}
        <div className="w-full space-y-1">
          <h3 className="text-2xl font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="text-gray-600 text-base">
            Rs. {product.price}/-
          </p>
        </div>

        {/* CTA */}
        <Button className="mt-2 absolute rounded! -bottom-5 bg-primary/80! hover:bg-primary! max-w-[150px] w-full rounded-xl bg-orange-500 hover:bg-orange-600">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}
