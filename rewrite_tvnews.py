import re

with open('src/components/home/TvNewsHero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace interface and mock data
new_top = """import { useState, useEffect } from "react";
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

const slideVariants = {"""

content = re.sub(r'import \{ useState, useEffect \} from "react";\n\ninterface TvNewsArticle.*?const slideVariants = \{', new_top, content, flags=re.DOTALL)

# Replace function signature and add mapped data
new_func = """export default function TvNewsHero({ articles = [] }: TvNewsHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsArticles = articles.map(a => ({
    id: a.id,
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

  const current = newsArticles[currentIndex];"""

content = re.sub(r'export default function TvNewsHero\(\) \{.*?(?=  return \()', new_func + '\n\n', content, flags=re.DOTALL)

# Remove `TvNewsArticle` type annotations in map
content = content.replace('(newsArticles.map((_: TvNewsArticle, index: number)', '(newsArticles.map((_, index: number)')
content = content.replace('newsArticles.map((article: TvNewsArticle, index: number)', 'newsArticles.map((article, index: number)')


with open('src/components/home/TvNewsHero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

