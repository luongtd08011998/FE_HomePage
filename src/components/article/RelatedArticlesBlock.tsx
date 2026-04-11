import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default function RelatedArticlesBlock({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-gray-900">Bài viết liên quan</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.slug}`}
            className="group flex gap-3 transition-transform motion-safe:duration-300 motion-safe:hover:translate-x-1"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={resolveThumb(article.thumbnail)}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                sizes="80px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                {article.title}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(article.createdAt).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
