"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
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
  const result = await articleService.search({ keyword: query, page, size: 6 });
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

  // Sync input when URL changes (e.g. search from header)
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tìm kiếm</h1>

      {isLoading && (
        <div className="flex justify-center py-16">
          <Spin size="large" />
        </div>
      )}

      {error && (
        <p className="text-red-500 text-center py-16">
          Có lỗi khi tìm kiếm. Vui lòng thử lại.
        </p>
      )}

      {!isLoading && !error && debouncedQ.trim() && articles.length === 0 && (
        <p className="text-gray-500 text-center py-16">
          Không tìm thấy kết quả cho &quot;{debouncedQ}&quot;.
        </p>
      )}

      {articles.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {total} kết quả cho &quot;{debouncedQ}&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
              >
                ← Trước
              </button>
              <span className="text-sm text-gray-600">
                Trang {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
              >
                Sau →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
