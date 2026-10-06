"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
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

function formatArticleDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/** Thẻ bài viết chuẩn phong cách Lacroix Environment (nền pastel dịu, bo góc lớn, ảnh lọt lòng, badge teal) */
function ArticleGridCard({ article }: { article: Article }) {
  const readMin = estimateReadMinutes(article.content);
  const href = `/news/${article.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col h-full rounded-[28px] bg-[#ebf4f6] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-950/10"
    >
      {/* Ảnh lọt lòng với góc bo mềm mại */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-slate-200">
        <Image
          src={resolveThumb(article.thumbnail)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Tiêu đề bài viết màu xanh thẫm đậm nét */}
      <div className="mt-5 flex-1">
        <h3 className="line-clamp-3 text-lg sm:text-xl font-bold leading-snug text-[#0c2340] transition-colors group-hover:text-teal-700">
          {article.title}
        </h3>
      </div>

      {/* Huy hiệu phân loại màu xanh ngọc (Teal / Turquoise pill) chuẩn Lacroix */}
      <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
        {article.tags && article.tags.length > 0
          ? article.tags.slice(0, 2).map((t) => (
              <span
                key={t.id}
                className="inline-flex items-center rounded-full bg-[#1cd0b4] px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[#0c2340]"
              >
                {t.name}
              </span>
            ))
          : null}

        {readMin > 0 ? (
          <span className="ml-auto text-xs font-medium text-slate-500 tabular-nums">
            {readMin} phút đọc
          </span>
        ) : null}
      </div>
    </Link>
  );
}

/** Dạng danh sách hàng ngang đồng bộ bảng màu Lacroix */
function ArticleListRow({ article }: { article: Article }) {
  const excerpt = articleExcerpt(article.content, 220);
  const readMin = estimateReadMinutes(article.content);
  const href = `/news/${article.slug}`;

  return (
    <Link
      href={href}
      className="group block rounded-[28px] bg-[#ebf4f6] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-200 sm:w-56 md:w-64">
          <Image
            src={resolveThumb(article.thumbnail)}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 256px"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-1">
          <div>
            <h3 className="mb-2 text-lg font-bold leading-snug text-[#0c2340] transition-colors group-hover:text-teal-700 sm:text-xl">
              {article.title}
            </h3>
            {excerpt ? (
              <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                {excerpt}
              </p>
            ) : null}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {article.tags && article.tags.length > 0
              ? article.tags.slice(0, 2).map((t) => (
                  <span
                    key={t.id}
                    className="inline-flex items-center rounded-full bg-[#1cd0b4] px-3.5 py-1 text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[#0c2340]"
                  >
                    {t.name}
                  </span>
                ))
              : null}
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <IconCalendar className="h-3.5 w-3.5" />
              {formatArticleDate(article.createdAt)}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <IconClock className="h-3.5 w-3.5" />
              {readMin} phút đọc
            </span>
          </div>
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
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCat, setSelectedCat] = useState<string>(activeCategorySlug ?? "");

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name, "vi")),
    [categories],
  );

  const allActive = activeCategorySlug == null || activeCategorySlug === "";

  function handleFilterApply() {
    if (!selectedCat) {
      router.push("/news");
    } else {
      router.push(`/category/${selectedCat}`);
    }
  }

  function handleCategoryChange(slug: string) {
    setSelectedCat(slug);
    if (!slug) {
      router.push("/news");
    } else {
      router.push(`/category/${slug}`);
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfdfe]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* BREADCRUMB PHONG CÁCH LACROIX */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-teal-600">
            Trang chủ
          </Link>
          <span className="text-slate-400">-</span>
          <span className="font-semibold text-slate-800">{heroTitle}</span>
        </nav>

        {/* TIÊU ĐỀ TRANG */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0c2340] sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
        </div>

        {/* KHỐI LỌC BÀI VIẾT (FILTER BAR PHONG CÁCH LACROIX) */}
        {showCategoryTabs && (
          <div className="mt-8 rounded-2xl bg-[#edf4f8] p-4 sm:rounded-3xl sm:p-5">
            <div className="flex flex-wrap items-center gap-3">
              {/* Dropdown danh mục dạng viên thuốc (Pill Select) */}
              <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                <select
                  value={selectedCat}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-full border border-slate-700 bg-white px-5 py-2.5 pr-10 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-900 focus:border-teal-500 focus:outline-none"
                >
                  <option value="">Tất cả chuyên mục</option>
                  {sortedCategories.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                  <IconChevronDown className="h-4 w-4" />
                </div>
              </div>

              {/* Nút Lọc bài viết (Turquoise Pill Button) */}
              <button
                type="button"
                onClick={handleFilterApply}
                className="rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4] active:scale-95"
              >
                Lọc bài viết
              </button>

              {/* Nút Đặt lại (Reset button với mũi tên chéo lên góc) */}
              <Link
                href="/news"
                onClick={() => setSelectedCat("")}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white active:scale-95"
              >
                <IconArrowUpRight className="h-4 w-4 text-slate-800" />
                <span>Đặt lại</span>
              </Link>

              {/* Chuyển đổi Dạng lưới / Dạng danh sách */}
              <div className="ml-auto hidden items-center gap-1 rounded-full border border-slate-300 bg-white p-1 sm:flex">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full p-2 transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#0c2340] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  title="Dạng lưới"
                  aria-label="Dạng lưới"
                >
                  <IconGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`rounded-full p-2 transition-colors ${
                    viewMode === "list"
                      ? "bg-[#0c2340] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  title="Dạng danh sách"
                  aria-label="Dạng danh sách"
                >
                  <IconList className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SỐ LƯỢNG KẾT QUẢ */}
        <div className="mb-6 mt-8 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600">
            Hiển thị{" "}
            <span className="font-bold text-[#0c2340]">
              {articles.length}
              {totalCount > articles.length ? ` / ${totalCount}` : ""}
            </span>{" "}
            bài viết
          </p>
        </div>

        {/* DANH SÁCH BÀI VIẾT (3 CỘT DẠNG THẺ LACROIX) */}
        {articles.length === 0 ? (
          <div className="my-12 rounded-[28px] bg-[#ebf4f6] p-12 text-center">
            <h3 className="mb-2 text-xl font-bold text-[#0c2340]">Không có bài viết</h3>
            <p className="text-slate-500">Chưa có bài viết nào trong mục này. Vui lòng chọn danh mục khác.</p>
            <Link
              href="/news"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] transition hover:bg-[#18bda4]"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {articles.map((article) => (
              <ArticleGridCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {articles.map((article) => (
              <ArticleListRow key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* PHÂN TRANG */}
        {articles.length > 0 && children ? (
          <div className="mt-12 sm:mt-16">{children}</div>
        ) : null}
      </div>
    </div>
  );
}
