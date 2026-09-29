"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import { articleService } from "@/services/article";
import type { Article } from "@/types";
import { Spin } from "antd";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

async function fetchSearch(
  query: string,
  page: number,
): Promise<{ articles: Article[]; total: number; pages: number }> {
  if (!query.trim()) return { articles: [], total: 0, pages: 0 };
  const result = await articleService.search({ keyword: query, page, size: 9 });
  return {
    articles: result.result,
    total: result.meta.total,
    pages: result.meta.pages,
  };
}

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQ = searchParams.get("q") ?? "";
  const initialPage = Number(searchParams.get("page") ?? "1");
  const [input, setInput] = useState(initialQ);
  const [page, setPage] = useState(initialPage);
  const debouncedQ = useDebounce(input, 400);

  useEffect(() => {
    setInput(searchParams.get("q") ?? "");
    setPage(Number(searchParams.get("page") ?? "1"));
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQ]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQ.trim()) params.set("q", debouncedQ.trim());
    if (page > 1) params.set("page", String(page));
    const qs = params.toString() ? `?${params.toString()}` : "";
    router.replace(`/search${qs}`, { scroll: false });
  }, [debouncedQ, page, router]);

  const { data, isLoading, error } = useSWR(
    debouncedQ.trim() ? ["search", debouncedQ, page] : null,
    () => fetchSearch(debouncedQ, page),
    { keepPreviousData: true },
  );

  const articles = data?.articles ?? [];
  const totalPages = data?.pages ?? 0;
  const total = data?.total ?? 0;

  return (
    <div className="min-h-screen bg-[#fcfdfe]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb phong cách Lacroix */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-teal-600">
            Trang chủ
          </Link>
          <span className="text-slate-400">-</span>
          <span className="font-semibold text-slate-800">Tìm kiếm</span>
        </nav>

        {/* Tiêu đề & Giới thiệu */}
        <div className="max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#0c2340] sm:text-4xl md:text-5xl">
            Tìm kiếm bài viết
          </h1>
          <p className="mb-2 text-lg font-semibold text-slate-800 sm:text-xl">
            Tra cứu thông tin, bài viết và tin tức nhanh chóng
          </p>
        </div>

        {/* Khối tìm kiếm phong cách Lacroix */}
        <div className="mt-8 rounded-2xl bg-[#edf4f8] p-4 sm:rounded-3xl sm:p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="relative min-w-[240px] flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm bài viết..."
                className="w-full rounded-full border border-slate-700 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4] active:scale-95"
            >
              Tìm kiếm
            </button>

            {input.trim() && (
              <button
                type="button"
                onClick={() => setInput("")}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white active:scale-95"
              >
                <span>Xóa từ khóa</span>
              </button>
            )}
          </form>
        </div>

        {/* Trạng thái tải / kết quả */}
        {isLoading && (
          <div className="flex justify-center py-20">
            <Spin size="large" />
          </div>
        )}

        {error && (
          <div className="my-10 rounded-2xl bg-[#ebf4f6] border border-[#1cd0b4]/30 p-8 text-center">
            <p className="text-base font-semibold text-[#0c2340]">
              Có lỗi khi tìm kiếm. Vui lòng thử lại.
            </p>
          </div>
        )}

        {!isLoading && !error && debouncedQ.trim() && articles.length === 0 && (
          <div className="my-12 rounded-[28px] bg-[#ebf4f6] p-12 text-center">
            <h3 className="mb-2 text-xl font-bold text-[#0c2340]">Không tìm thấy kết quả</h3>
            <p className="text-slate-500">
              Không có bài viết nào khớp với từ khóa &quot;{debouncedQ}&quot;.
            </p>
            <Link
              href="/news"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] transition hover:bg-[#18bda4]"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        )}

        {articles.length > 0 && (
          <>
            <div className="mb-6 mt-8">
              <p className="text-sm font-medium text-slate-600">
                Tìm thấy <span className="font-bold text-[#0c2340]">{total}</span> kết quả cho &quot;{debouncedQ}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="rounded-full border border-slate-700 bg-transparent px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
                >
                  ← Trang trước
                </button>
                <span className="px-3 text-sm font-semibold text-slate-700">
                  Trang {page} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4] disabled:pointer-events-none disabled:opacity-40"
                >
                  Trang sau →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
