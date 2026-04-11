"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

interface Slide {
  href: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    [slides.length],
  );

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden mb-10 shadow-md bg-gray-200 ${CARD_HOVER_CLASS}`}
    >
      {slides.map((slide, idx) => (
        <Link
          key={idx}
          href={slide.href}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <p className="text-blue-300 text-sm font-medium mb-1">
              {slide.category}
            </p>
            <h2 className="text-white text-xl md:text-3xl font-bold leading-snug line-clamp-2">
              {slide.title}
            </h2>
          </div>
        </Link>
      ))}

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
        aria-label="Ảnh trước"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
        aria-label="Ảnh tiếp"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setCurrent(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Chuyển đến ảnh ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
