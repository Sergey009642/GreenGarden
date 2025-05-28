"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/room1.jpg',
  '/kuxni.jpg',
  '/room2.jpg',
  '/room3.jpg',
  '/room4.jpg',
  '/zal1.jpg'
  
];

export default function SwiperRoom() {
  return (
    <div className="w-[600px] max-w-5xl mx-auto py-10 pt-[60px] text-center max-xl:w-[500px] max-lg:w-[360px] max-md:w-[260px]">
      <h1 className="text-[80px] text-[#00ff2a] max-md:text-[60px]"><strong>HOME</strong></h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] w-full overflow-hidden rounded-xl shadow-md flex max-xl:h-[350px] max-lg:h-[250px] max-md:h-[150px]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}





