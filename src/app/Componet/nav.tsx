    'use client';

import Link from "next/link";
import React, { useState } from "react";

interface Bar {
  id: number;
  name: string;
  slug: string;
}

const bars: Bar[] = [
  { id: 1, slug: "/", name: "Home" },
  { id: 2, slug: "/about", name: "About" },
  { id: 3, slug: "/contact", name: "Contact US" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative max-w-[full] mx-auto px-4">
      <ul className="hidden sm:flex gap-5 text-[24px] text-white">
        {bars.map((bar) => (
          <li key={bar.id} className="cursor-pointer">
            <Link href={bar.slug}>
              <strong>{bar.name}</strong>
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="sm:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      <ul
        className={`
          sm:hidden absolute left-0 top-full mt-1 bg-[#1d1c1c] text-white text-left z-50 transition-all duration-300 
          ${isOpen ? "max-h-40 py-4 overflow-y-auto" : "max-h-0 overflow-hidden "}
        `}
        style={{ width: '100px' }}
      >
        {bars.map((bar) => (
          <li key={bar.id} className="py-2 border-b border-[#333] px-4">
            <Link href={bar.slug} onClick={() => setIsOpen(false)}>
              <strong>{bar.name}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
