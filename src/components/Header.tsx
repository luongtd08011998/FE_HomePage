"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, useMemo } from "react";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import type { Category, Article } from "@/types";

interface HeaderProps {
  rootCategories: Category[];
}

type CategoryWithActive = Category & { active?: number };

function isCategoryActive(c: CategoryWithActive): boolean {
  const a = c.active;
  return a === undefined || a === 1;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function Header({ rootCategories }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [open, setOpen] = useState(false);
  const debouncedQ = useDebounce(query, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const roots = useMemo(
    () =>
      rootCategories.filter((c) => isCategoryActive(c as CategoryWithActive)),
    [rootCategories],
  );

  const [childrenByRootId, setChildrenByRootId] = useState<
    Record<number, Category[]>
  >({});

  useEffect(() => {
    if (roots.length === 0) {
      setChildrenByRootId({});
      return;
    }
    let cancelled = false;
    Promise.all(
      roots.map((r) =>
        categoryService
          .getChildren(r.id)
          .then((list) => ({
            id: r.id,
            list: list.filter((c) =>
              isCategoryActive(c as CategoryWithActive),
            ),
          })),
      ),
    )
      .then((pairs) => {
        if (cancelled) return;
        const next: Record<number, Category[]> = {};
        for (const { id, list } of pairs) {
          next[id] = list;
        }
        setChildrenByRootId(next);
      })
      .catch(() => {
        if (!cancelled) setChildrenByRootId({});
      });
    return () => {
      cancelled = true;
    };
  }, [roots]);

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
    <header className="sticky top-0 z-50 relative border-b border-white/10 shadow-[0_14px_34px_-18px_rgba(2,132,199,0.75)]">
      {/* Background only: overflow-hidden để blob không tràn, không cắt dropdown */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient (brighter, closer to homepage hero) */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-400" />

        {/* Contrast layer so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/25 to-slate-950/20" />

        {/* Soft animated glow blobs */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl animate-headerFloat" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl animate-headerFloat2" />

        {/* Specular highlight / glass sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/22 via-white/8 to-transparent" />

        {/* Subtle grid for depth */}
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <style jsx>{`
        @keyframes headerFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(80px, 18px, 0) scale(1.06);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes headerFloat2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-70px, -12px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        :global(.animate-headerFloat) {
          animation: headerFloat 7.5s ease-in-out infinite;
          will-change: transform;
        }
        :global(.animate-headerFloat2) {
          animation: headerFloat2 9s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-headerFloat),
          :global(.animate-headerFloat2) {
            animation: none;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HÀNG 1: Logo + Search ===== */}
        <div className="flex items-center justify-between h-20 gap-6 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logocty1.jpg"
              alt="Logo Công ty"
              className="h-[3.75rem] w-[3.75rem] object-contain rounded-full ring-2 ring-white/30"
            />
            <span className="hidden sm:block whitespace-nowrap">
              <span className="block text-[0.8rem] uppercase tracking-[0.28em] text-white/70">
                TẬP ĐOÀN HẢI CHÂU
              </span>
              <span className="block text-lg lg:text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
              </span>
            </span>
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 w-full max-w-sm"
          >
            <div className="relative flex-1" ref={wrapperRef}>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60"
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
                className="w-full pl-9 pr-3 py-2 text-sm bg-white/15 border border-white/30 text-white placeholder:text-white/60 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 transition-all"
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
              className="px-4 py-2 text-sm font-medium bg-white text-blue-800 rounded-full hover:bg-blue-50 transition-colors shrink-0"
            >
              Tìm
            </button>
          </form>
        </div>

        {/* ===== HÀNG 2: Nav ===== */}
        <div className="border-t border-white/20 relative z-10">
          <nav className="flex flex-wrap items-center gap-1 text-sm font-semibold py-1">
            <Link
              href="/"
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                pathname === "/"
                  ? "bg-white/25"
                  : "hover:bg-white/20"
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                Trang chủ
              </span>
            </Link>

            {roots.map((root) => {
              const children = childrenByRootId[root.id] ?? [];
              const rootActive =
                pathname === `/category/${root.slug}` ||
                children.some((c) => pathname === `/category/${c.slug}`);
              const navLabel = (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                  {root.name}
                </span>
              );

              if (children.length === 0) {
                return (
                  <Link
                    key={root.id}
                    href={`/category/${root.slug}`}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                      pathname === `/category/${root.slug}`
                        ? "bg-white/25"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {navLabel}
                  </Link>
                );
              }

              return (
                <div key={root.id} className="relative group">
                  <Link
                    href={`/category/${root.slug}`}
                    className={`flex items-center gap-1 whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                      rootActive ? "bg-white/25" : "hover:bg-white/20"
                    }`}
                  >
                    {navLabel}
                    <svg
                      className="w-3.5 h-3.5 text-white/90 shrink-0 transition-transform group-hover:rotate-180"
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

                  <div className="absolute top-full left-0 z-[60] hidden w-56 pt-1 group-hover:block">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1">
                      {children.map((child) => (
                        <Link
                          key={child.id}
                          href={`/category/${child.slug}`}
                          className={`block px-4 py-2.5 text-sm tracking-tight transition-colors ${
                            pathname === `/category/${child.slug}`
                              ? "text-blue-600 bg-blue-50 font-semibold"
                              : "text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
