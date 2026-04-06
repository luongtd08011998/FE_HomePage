import Link from "next/link";
import Image from "next/image";
import { Tag } from "antd";
import type { Article } from "@/types";

interface NewsCardProps {
  article: Article;
}

function makeExcerpt(html: string, maxLen = 120): string {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
}

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="rounded-xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden bg-white h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={resolveThumb(article.thumbnail)}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="mb-2">
            <Tag color="blue">{article.category.name}</Tag>
          </div>
          <h3 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors flex-1">
            {article.title}
          </h3>
          {article.content && (
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {makeExcerpt(article.content)}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-3">
            {new Date(article.createdAt).toLocaleDateString("vi-VN")}
          </p>
        </div>
      </article>
    </Link>
  );
}
