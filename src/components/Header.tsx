"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { articleService } from "@/services/article";
import type { Category, Article } from "@/types";

interface HeaderProps {
  categories: Category[];
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function Header({ categories }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [open, setOpen] = useState(false);
  const debouncedQ = useDebounce(query, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch suggestions
  useEffect(() => {
    if (!debouncedQ.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    articleService
      .search({ keyword: debouncedQ.trim(), page: 1, size: 5 })
      .then((res) => {
        setSuggestions(res.result);
        setOpen(res.result.length > 0);
      })
      .catch(() => {
        setSuggestions([]);
        setOpen(false);
      });
  }, [debouncedQ]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function pickSuggestion(slug: string) {
    setOpen(false);
    setQuery("");
    router.push(`/news/${slug}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HÀNG 1: Logo + Search ===== */}
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logocty1.jpg"
              alt="Logo Công ty"
              className="h-10 w-10 object-contain rounded-full ring-2 ring-blue-100"
            />
            <span className="hidden sm:block text-base font-bold text-blue-800 whitespace-nowrap">
              CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
            </span>
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 w-full max-w-sm"
          >
            <div className="relative flex-1" ref={wrapperRef}>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => suggestions.length > 0 && setOpen(true)}
                placeholder="Tìm kiếm bài viết..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
              />

              {/* Suggestion dropdown */}
              {open && (
                <ul className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {suggestions.map((article) => (
                    <li key={article.id}>
                      <button
                        type="button"
                        onMouseDown={() => pickSuggestion(article.slug)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors truncate block"
                      >
                        {article.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shrink-0"
            >
              Tìm
            </button>
          </form>
        </div>

        {/* ===== HÀNG 2: Nav ===== */}
        <div className="border-t border-gray-100">
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium py-1">
            <Link
              href="/"
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                pathname === "/"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Trang chủ
            </Link>

            {/* Dropdown Giới thiệu — hover shows dropdown, click navigates */}
            <div className="relative group">
              <Link
                href="/category/gioi-thieu"
                className={`flex items-center gap-1 whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                  [
                    "/category/gioi-thieu",
                    "/category/hinh-thanh-phat-trien",
                    "/category/lien-he",
                    "/category/hoat-dong-su-kien",
                  ].includes(pathname)
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Giới thiệu
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              <div className="absolute top-full left-0 pt-1 w-56 z-50 hidden group-hover:block">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1">
                  <Link
                    href="/news/hinh-thanh-phat-trien"
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === "/category/hinh-thanh-phat-trien"
                        ? "text-blue-600 bg-blue-50 font-medium"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    Hình thành phát triển
                  </Link>
                  <Link
                    href="/news/thong-tin-lien-he"
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === "/category/lien-he"
                        ? "text-blue-600 bg-blue-50 font-medium"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    Liên hệ
                  </Link>
                  <Link
                    href="/news/hoat-dong-su-kien-va-thu-nghiem"
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === "/category/hoat-dong-su-kien"
                        ? "text-blue-600 bg-blue-50 font-medium"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    Hoạt động sự kiện
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/category/van-ban"
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                pathname === "/category/van-ban"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Văn bản
            </Link>
            <Link
              href="/category/tin-tuc"
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                pathname === "/tin-tuc"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Tin tức
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
