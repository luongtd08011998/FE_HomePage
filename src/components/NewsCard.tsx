"use client";

import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types";

interface NewsCardProps {
  article: Article;
}

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-[#ebf4f6] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-950/10 sm:p-5">
      <Link href={`/news/${article.slug}`} className="flex h-full flex-col">
        {/* Ảnh lọt lòng bo tròn lớn phong cách Lacroix */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-slate-200">
          <Image
            src={resolveThumb(article.thumbnail)}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Tiêu đề */}
        <div className="mt-5 flex-1">
          <h3 className="line-clamp-3 text-lg font-bold leading-snug text-[#0c2340] transition-colors group-hover:text-teal-700 sm:text-xl">
            {article.title}
          </h3>
        </div>

        {/* Huy hiệu teal pill chuẩn Lacroix */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
          <span className="inline-flex items-center rounded-full bg-[#1cd0b4] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#0c2340] transition-transform duration-200 group-hover:scale-105">
            {article.category?.name ?? "Tin tức"}
          </span>

          {article.tags && article.tags.length > 0
            ? article.tags.slice(0, 2).map((tag) =>
                tag ? (
                  <span
                    key={tag.id}
                    className="inline-flex items-center rounded-full bg-[#1cd0b4] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#0c2340]"
                  >
                    #{tag.name}
                  </span>
                ) : null,
              )
            : null}

          <span className="ml-auto text-xs text-slate-500">
            {new Date(article.createdAt).toLocaleDateString("vi-VN")}
          </span>
        </div>
      </Link>
    </article>
  );
}
