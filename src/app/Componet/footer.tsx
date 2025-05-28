'use client'

import Link from 'next/link';
import React from 'react';

interface InfoItem {
  label: string;
  value?: string | number;
}

interface SectionData {
  title: string;
  items: InfoItem[];
}

const homeData: SectionData = {
  title: "Home",
  items: [
    { label: "Floor", value: 2 },
    { label: "Room", value: 5 },
    { label: "Bed", value: 8 },
    { label: "People", value: 12 },
    { label: "Bathroom", value: 1 },
    { label: "Toilet", value: 2 }
  ]
};

const gardenData: SectionData = {
  title: "Garden",
  items: [
    { label: "Swimming Pool" },
    { label: "Campfire" },
    { label: "Bisetka", value: 3 },
    { label: "Swing", value: 3 }
  ]
};

export default function Footer() {
  const images: string[] = ["/Fb.png", "/inst.webp", "/watsap.png"];

  const renderSection = (data: SectionData) => (
    <div className="max-sm:py-8">
      <h1 className="pb-4 text-2xl font-bold">{data.title}</h1>
      <ul className="space-y-1 text-lg">
        {data.items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.label}{item.value !== undefined ? `: ${item.value}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flex flex-col p-10 w-full bg-[#1d1c1c] text-white">
      <div className="flex justify-center gap-[150px] max-md:gap-[60px] max-sm:flex-col">
        <div className="flex justify-center items-center">
        <div className="flex justify-center gap-[150px] max-sm:flex-col max-sm:gap-[30px]">
        {renderSection(homeData)}
        {renderSection(gardenData)}
</div>
</div>
        <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold pb-2">Contact</h1>

          <div className="flex justify-center gap-4">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Social ${index + 1}`}
                className="w-12 h-12 p-1 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-sm pt-4">
            <a href="mailto:GreenGardneHotelDilijan@mail.ru" className="text-[#0454ff] hover:underline text-[20px]">
              GreenGardneHotelDilijan@mail.ru
            </a>
            <a href="tel:093766506" className="hover:underline text-[16px]">
              093-76-65-06
            </a>
          </div>
    </footer>
  );
}
