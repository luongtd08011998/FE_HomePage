"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article, Category } from "@/types";
import { articleExcerpt, estimateReadMinutes } from "@/lib/articleText";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

function IconGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function IconList({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function formatArticleDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function ArticleGridCard({ article }: { article: Article }) {
  const excerpt = articleExcerpt(article.content, 160);
  const readMin = estimateReadMinutes(article.content);
  const href = `/news/${article.slug}`;

  return (
    <Link
      href={href}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-xl motion-reduce:hover:translate-y-0"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={resolveThumb(article.thumbnail)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white shadow-lg">
            {article.category?.name ?? "Tin tức"}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
          {article.title}
        </h3>
        {excerpt ? (
          <p className="mb-4 line-clamp-2 flex-1 leading-relaxed text-gray-600">{excerpt}</p>
        ) : (
          <div className="mb-4 flex-1" />
        )}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <IconUser className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{article.author?.name ?? "Ban biên tập"}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCalendar className="h-4 w-4 shrink-0" />
            <span>{formatArticleDate(article.createdAt)}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <IconClock className="h-4 w-4 shrink-0" />
            <span>{readMin} phút</span>
          </div>
          <span className="flex items-center gap-1 font-medium text-blue-500 transition-transform motion-safe:group-hover:translate-x-1">
            Đọc tiếp
            <IconChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleListRow({ article }: { article: Article }) {
  const excerpt = articleExcerpt(article.content, 220);
  const readMin = estimateReadMinutes(article.content);
  const href = `/news/${article.slug}`;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all motion-safe:hover:translate-x-1 motion-safe:hover:shadow-lg motion-reduce:hover:translate-x-0"
    >
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-stretch sm:gap-6 sm:p-6">
        <div className="relative mx-auto h-40 w-full shrink-0 overflow-hidden rounded-xl sm:mx-0 sm:h-32 sm:w-48">
          <Image
            src={resolveThumb(article.thumbnail)}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              {article.category?.name ?? "Tin tức"}
            </span>
            <span className="text-gray-400" aria-hidden>
              •
            </span>
            <span className="text-sm text-gray-500">{readMin} phút đọc</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
            {article.title}
          </h3>
          {excerpt ? <p className="mb-4 line-clamp-2 text-gray-600">{excerpt}</p> : null}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 sm:gap-6">
            <div className="flex items-center gap-2">
              <IconUser className="h-4 w-4 shrink-0" />
              <span>{article.author?.name ?? "Ban biên tập"}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar className="h-4 w-4 shrink-0" />
              <span>{formatArticleDate(article.createdAt)}</span>
            </div>
          </div>
        </div>
        <div className="hidden shrink-0 items-center self-center sm:flex">
          <IconChevronRight className="h-6 w-6 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-blue-500" />
        </div>
      </div>
    </Link>
  );
}

export type ArticleListViewProps = {
  heroTitle: string;
  heroDescription: string;
  articles: Article[];
  totalCount: number;
  categories?: Category[];
  /** `null` = trang /news (Tất cả); string = slug danh mục đang xem */
  activeCategorySlug?: string | null;
  showCategoryTabs?: boolean;
  children?: React.ReactNode;
};

export default function ArticleListView({
  heroTitle,
  heroDescription,
  articles,
  totalCount,
  categories = [],
  activeCategorySlug = null,
  showCategoryTabs = true,
  children,
}: ArticleListViewProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name, "vi")),
    [categories],
  );

  const allActive = activeCategorySlug == null || activeCategorySlug === "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{heroTitle}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">{heroDescription}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            {showCategoryTabs && sortedCategories.length > 0 ? (
              <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Link
                href="/news"
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  allActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Tất cả
              </Link>
              {sortedCategories.map((cat) => {
                const active = activeCategorySlug === cat.slug;
                return (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                      active
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
              </div>
            ) : null}
            <div className="flex shrink-0 items-center gap-2 self-start rounded-xl border-2 border-gray-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-lg p-2 transition-colors motion-safe:active:scale-95 ${
                  viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-label="Dạng lưới"
              >
                <IconGrid className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-2 transition-colors motion-safe:active:scale-95 ${
                  viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-label="Dạng danh sách"
              >
                <IconList className="h-5 w-5" />
              </button>
            </div>
          </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-gray-600">
            Hiển thị{" "}
            <span className="font-medium text-gray-900">
              {articles.length}
              {totalCount > articles.length ? ` / ${totalCount}` : ""}
            </span>{" "}
            bài viết
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <IconTrendingUp className="h-4 w-4 shrink-0" />
            <span>Mới nhất</span>
          </div>
        </div>

        {articles.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <IconList className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Không có bài viết</h3>
            <p className="text-gray-500">Thử chọn danh mục khác.</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleGridCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <ArticleListRow key={article.id} article={article} />
            ))}
          </div>
        )}

        {articles.length > 0 ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}
