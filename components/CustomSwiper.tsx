import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function CustomSwiper({
  children,
}: React.ComponentProps<typeof Swiper>) {
  return (
    <Swiper
      observer={true}
      observeParents={true}
      watchSlidesProgress={true}
      modules={[Pagination]}
      spaceBetween={30}
      navigation
      loop
      className="mt-5 justify-center items-center py-3! pb-10! px-4! w-full"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1040: { slidesPerView: 3 },
      }}
    >
      {children}
    </Swiper>
  );
}
