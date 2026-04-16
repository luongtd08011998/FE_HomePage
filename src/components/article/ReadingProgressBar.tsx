"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      const next = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      setProgress(next);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[200] h-1 w-full bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 transition-[width] duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

