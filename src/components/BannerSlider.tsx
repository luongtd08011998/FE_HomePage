"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

const IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % IMAGES.length),
    [],
  );

  const prev = () =>
    setCurrent((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div
      className={`relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden mb-10 shadow-md bg-gray-200 ${CARD_HOVER_CLASS}`}
    >
      {IMAGES.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Banner ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Nút trái */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
        aria-label="Ảnh trước"
      >
        ‹
      </button>

      {/* Nút phải */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
        aria-label="Ảnh tiếp"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
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
