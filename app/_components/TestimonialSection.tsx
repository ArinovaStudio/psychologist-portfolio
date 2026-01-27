import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden py-24 bg-black text-white font-['lufga']">

      {/* Content */}
      <div className="relative z-10 w-full px-5 mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Testimonials That <br />
            Speak to <span className="text-primary">My Results</span>
          </h2>

          <p className="mt-4 text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="relative rounded-2xl border border-white/10 bg-gray-300/20 backdrop-blur-lg"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote icon */}
                <div className="absolute  right-6 top-6 text-white text-6xl font-serif">
                  “
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">5.0</span>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
