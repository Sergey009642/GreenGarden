'use client'
import Image from 'next/image';
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
    { label: "Bed", value: 12 },
    { label: "People", value: 18 },
    { label: "Bathroom", value: 2 },
    { label: "Toilet", value: 3 }
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
  const images: { src: string; href: string; alt: string }[] = [
    { src: "/fb.png", href: "https://www.facebook.com/profile.php?id=61563290124228#", alt: "Facebook" },
    { src: "/Inst.webp", href: "https://www.instagram.com/___greengardendilijan_/", alt: "Instagram" },
    { src: "/watsap.png", href: "tel:093766506", alt: "WhatsApp" },
  ];

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
            {images.map((img) => (
              <a
                key={img.src}
                href={img.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={img.src}
                  width={100}
                  height={100}
                  alt={img.alt}
                  className="w-12 h-12 p-1 rounded-full hover:scale-110 duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-sm pt-4">
        <a href="mailto:marin_78@list.ru" className="text-[#0454ff] hover:underline text-[20px]">
          marin_78@list.ru
        </a>
        <a href="tel:093766506" className="hover:underline text-[16px]">
          093-76-65-06
        </a>
      </div>
    </footer>
  );
}
