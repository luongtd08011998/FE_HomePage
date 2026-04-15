"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

const IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
const CAPTIONS = [
  "Nâng cấp hệ thống đường ống cấp nước Tóc Tiên",
  "Báo cáo chất lượng nước sinh hoạt",
  "Quy trình xử lý nước hiện đại tại nhà máy",
  "Mở rộng mạng lưới cấp nước khu vực mới",
  "Hướng dẫn sử dụng nước tiết kiệm, hiệu quả",
] as const;

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
    <figure className="mb-10">
      <div
        className={`relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-md bg-gray-200 ${CARD_HOVER_CLASS}`}
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
              alt={CAPTIONS[idx] ?? `Banner ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

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

      <figcaption className="mt-4 px-1 text-center">
        <div className="mx-auto max-w-3xl text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
          {CAPTIONS[current] ?? " "}
        </div>
      </figcaption>
    </figure>
  );
}
