"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  '/Images.jpg',
  '/home1.jpg',
  '/Home2.jpg',
  '/Home3.jpg',
  '/xaruyk.jpg',
  '/Home8.jpg',
  '/Home5.jpg',
  '/Home10.jpg',
  '/Home11.jpg',
  '/Home12.jpg',
  '/Home6.jpg',
];

export default function SwiperGallery() {
  return (
    <div className="w-[600px] max-w-5xl mx-auto py-10 pt-[60px] text-center max-xl:w-[500px] max-lg:w-[360px] max-md:w-[260px]">
      <h1 className="text-[80px] text-[#00ff2a] max-md:text-[60px]"><strong>GARDEN</strong></h1>
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
            <div className="h-[450px] w-full overflow-hidden rounded-xl shadow-md flex  max-xl:h-[350px] max-lg:h-[250px] max-md:h-[150px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}




