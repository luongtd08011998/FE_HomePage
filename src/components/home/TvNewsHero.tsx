"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Article } from "@/types";

interface TvNewsHeroProps {
  articles: Article[];
}

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...";
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const swipeConfidenceThreshold = 10000;
function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}

export default function TvNewsHero({ articles = [] }: TvNewsHeroProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsArticles = articles.map(a => ({
    id: a.id,
    slug: a.slug,
    url: resolveThumb(a.thumbnail),
    title: a.title,
    description: stripHtml(a.content),
    category: a.category?.name || "Tin tức",
    date: new Date(a.createdAt).toLocaleDateString("vi-VN"),
    readTime: "5 phút đọc",
    author: a.author?.name || "Tóc Tiên",
  }));

  useEffect(() => {
    if (!isAutoPlaying || newsArticles.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % newsArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, newsArticles.length]);

  function paginate(newDirection: number) {
    if (newsArticles.length === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return newsArticles.length - 1;
      if (next >= newsArticles.length) return 0;
      return next;
    });
  }

  if (newsArticles.length === 0) {
    return (
      <div className="relative h-full min-h-[220px] w-full flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/50 sm:min-h-[280px] sm:rounded-2xl lg:min-h-0">
        <p className="text-white/60">Không có tin tức</p>
      </div>
    );
  }

  const current = newsArticles[currentIndex];


  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[280px] sm:rounded-2xl lg:min-h-0"
      style={{
        background: "rgba(15, 23, 42, 0.55)",
        backdropFilter: "blur(16px)",
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative aspect-[16/10] min-h-[200px] overflow-hidden sm:aspect-[16/9]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.35 },
              scale: { duration: 0.35 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            onClick={() => router.push(`/news/${current.slug}`)}
            className="absolute inset-0 cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.url}
              alt={current.title}
              className="h-full w-full object-cover brightness-[0.92]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 70%)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-500/20 px-3 py-1.5 backdrop-blur-md sm:mb-4 sm:px-4 sm:py-2"
              >
                <Tag className="h-3.5 w-3.5 text-teal-400 sm:h-4 sm:w-4" />
                <span className="text-[0.7rem] font-medium tracking-wider text-teal-300 sm:text-xs">
                  {current.category}
                </span>
              </motion.div>
              <h2
                className="mb-2 font-[family-name:var(--font-cormorant)] text-2xl font-normal leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
              >
                {current.title}
              </h2>

            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 py-3 sm:gap-3 sm:py-5">
        {newsArticles.map((_, index: number) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className="rounded-full transition-all duration-300 ease-out"
            style={{
              width: index === currentIndex ? 40 : 10,
              height: 10,
              background:
                index === currentIndex
                  ? "linear-gradient(90deg, #14b8a6 0%, #06b6d4 100%)"
                  : "rgba(255, 255, 255, 0.25)",
              boxShadow:
                index === currentIndex
                  ? "0 0 16px rgba(20, 184, 166, 0.45)"
                  : undefined,
            }}
            aria-label={`Chọn slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hidden px-3 pb-4 sm:block sm:px-6 sm:pb-6">
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {newsArticles.map((article, index: number) => (
            <motion.button
              key={article.id}
              type="button"
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-opacity ${
                index === currentIndex
                  ? "border-teal-400 opacity-100 ring-2 ring-teal-400/50"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.url}
                alt=""
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                aria-hidden
              />
              <p className="absolute bottom-0 left-0 right-0 line-clamp-2 p-2 text-left text-[0.6rem] leading-tight text-white drop-shadow-md md:text-xs">
                {article.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
