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

async function fetchSearch(query: string): Promise<Article[]> {
  if (!query.trim()) return [];
  const result = await articleService.getAll({ search: query, size: 20 });
  return result.result;
}

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQ = searchParams.get("q") ?? "";
  const [input, setInput] = useState(initialQ);
  const debouncedQ = useDebounce(input, 400);

  useEffect(() => {
    const qs = debouncedQ.trim()
      ? `?q=${encodeURIComponent(debouncedQ.trim())}`
      : "";
    router.replace(`/search${qs}`, { scroll: false });
  }, [debouncedQ, router]);

  const { data: articles, isLoading } = useSWR(
    debouncedQ.trim() ? ["search", debouncedQ] : null,
    () => fetchSearch(debouncedQ),
    { keepPreviousData: true },
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tìm kiếm</h1>

      <div className="mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          autoFocus
          className="w-full max-w-xl px-4 py-2.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isLoading && (
        <div className="flex justify-center py-16">
          <Spin size="large" />
        </div>
      )}

      {!isLoading && debouncedQ.trim() && articles && articles.length === 0 && (
        <p className="text-gray-500 text-center py-16">
          Không tìm thấy kết quả cho &quot;{debouncedQ}&quot;.
        </p>
      )}

      {articles && articles.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {articles.length} kết quả cho &quot;{debouncedQ}&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
