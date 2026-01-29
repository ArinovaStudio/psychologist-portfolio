import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function CustomSlide({
  children,
}: React.ComponentProps<typeof SwiperSlide>) {
  return <SwiperSlide>{children}</SwiperSlide>;
}
