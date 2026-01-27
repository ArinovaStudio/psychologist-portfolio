import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title?: string;
  price?: number;
  image?: string;
}

export default function ProductCard({
  title = "Different Winter",
  price = 800,
  image = "/book.png",
}: BookCardProps) {
  return (
    <Card className="max-w-md w-full rounded-3xl bg-primary/30 shadow-lg backdrop-filter-blur backdrop-blur-xs">
      <CardContent className="p-5 flex flex-col items-center gap-4 pb-0!">
        {/* Book Image */}
        <div className="relative -translate-y-15 h-90 w-65 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover absolute! -top-30 "
            priority
          />
        </div>

        {/* Text Content */}
        <div className="w-full space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 text-base">
            Rs. {price}/-
          </p>
        </div>

        {/* CTA */}
        <Button className="mt-2 absolute -bottom-5 bg-orange-400! max-w-[150px] w-full rounded-xl bg-orange-500 hover:bg-orange-600">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}
