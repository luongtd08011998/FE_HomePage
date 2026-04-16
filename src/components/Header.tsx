"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import type { Category, Article } from "@/types";
import { IconDocuments } from "@/components/icons/IconDocuments";

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

function IconHome({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 5.25A2.75 2.75 0 015.25 2.5h1.1c.9 0 1.69.61 1.92 1.48l.8 3.02c.2.77-.1 1.59-.75 2.02l-1.17.78a14.7 14.7 0 006.5 6.5l.78-1.17c.43-.65 1.25-.95 2.02-.75l3.02.8c.87.23 1.48 1.02 1.48 1.92v1.1a2.75 2.75 0 01-2.75 2.75h-.25C9.1 21.95 2.05 14.9 2.05 6v-.75z"
      />
    </svg>
  );
}

function IconFolder({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/** Giới thiệu — tòa nhà / doanh nghiệp */
function IconIntro({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

/** Tin tức — báo / tin */
function IconNews({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v4.5H6v-4.5z"
      />
    </svg>
  );
}

/** Quan hệ khách hàng — đối tác / chăm sóc KH */
function IconCustomerRel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function NavRootIcon({ slug, className }: { slug: string; className?: string }) {
  const s = slug.toLowerCase().replace(/_/g, "-");
  if (s.includes("gioi-thieu") || s.includes("gioithieu")) {
    return <IconIntro className={className} />;
  }
  if (s.includes("tin-tuc") || s.includes("tintuc")) {
    return <IconNews className={className} />;
  }
  if (s.includes("van-ban") || s.includes("vanban")) {
    return <IconDocuments className={className} />;
  }
  if (
    s.includes("khach-hang") ||
    s.includes("quan-he") ||
    s.includes("qlkh") ||
    s.includes("khachhang")
  ) {
    return <IconCustomerRel className={className} />;
  }
  return <IconFolder className={className} />;
}

/** Menu dưới: 1400ms. Logo + tên cty: `logoBlockTransition` 1800ms + `navBounceLogo` 2s / -6px. */
const navMenuTransition = "duration-[1400ms] ease-in-out";

const logoBlockTransition = "duration-[1800ms] ease-in-out";

/** Chữ menu nav: gradient mặc định; hover ấm (amber). `forLogo`: chỉ khối logo — hover #FFFFFF + nhịp dài. */
function NavLabelText({
  children,
  className,
  forLogo,
}: {
  children: React.ReactNode;
  className?: string;
  forLogo?: boolean;
}) {
  const base =
    "uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-[background-image,filter,opacity]";
  if (forLogo) {
    return (
      <span
        className={`${base} ${logoBlockTransition} group-hover/logo:from-[#FFFFFF] group-hover/logo:via-[#FFFFFF] group-hover/logo:to-[#FFFFFF] ${className ?? ""}`}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={`${base} ${navMenuTransition} group-hover/nav-item:from-amber-200 group-hover/nav-item:via-yellow-100 group-hover/nav-item:to-orange-100 group-hover/nav-item:brightness-110 group-hover/nav-item:saturate-125 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

const navIconClass = `h-4 w-4 shrink-0 transition-colors ${navMenuTransition} text-white/90 group-hover/nav-item:text-amber-200`;

/** Logo tròn: ảnh (nét) + viền gradient xoay + glow. */
function AnimatedLogoMark() {
  return (
    <span className="relative inline-block h-14 w-14 sm:h-16 sm:w-16 shrink-0">
      <span
        className="absolute inset-0 rounded-full p-[2.5px] animate-logoRingSpin"
        aria-hidden
      >
        <span className="block h-full w-full rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#38bdf8,#0ea5e9,#06b6d4,#22d3ee)]" />
      </span>
      <span className="absolute inset-[2.5px] overflow-hidden rounded-full bg-sky-950/50 ring-1 ring-white/35 animate-logoGlow">
        <span className="relative block h-full min-h-0 w-full backface-hidden [transform:translateZ(0)]">
          <Image
            src="/logocty1.jpg"
            alt="Logo Công ty"
            fill
            sizes="(max-width: 640px) 3.5rem, 4rem"
            quality={95}
            priority
            className="object-contain object-center p-px animate-logoImgDrift [image-rendering:auto]"
          />
        </span>
      </span>
    </span>
  );
}

/** Nền gradient + lưới — dùng cho khối logo và khối nav sticky. */
function HeaderBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-400" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/25 to-slate-950/20" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl animate-headerFloat" />
      <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl animate-headerFloat2" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/22 via-white/8 to-transparent" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  );
}

export default function Header({ rootCategories }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [open, setOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const debouncedQ = useDebounce(query, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const [suggestBox, setSuggestBox] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  /** Tọa độ viewport — dropdown render qua portal (tránh fixed bị neo bởi transform scale trên <form>). */
  const updateSuggestBox = useCallback(() => {
    const wrap = wrapperRef.current;
    if (!wrap || !open || suggestions.length === 0) {
      setSuggestBox(null);
      return;
    }
    const r = wrap.getBoundingClientRect();
    if (r.width < 8) {
      setSuggestBox(null);
      return;
    }
    setSuggestBox({
      top: r.bottom + 6,
      left: r.left,
      width: r.width,
    });
  }, [open, suggestions.length]);

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
        categoryService.getChildren(r.id).then((list) => ({
          id: r.id,
          list: list.filter((c) => isCategoryActive(c as CategoryWithActive)),
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

  useLayoutEffect(() => {
    updateSuggestBox();
  }, [updateSuggestBox]);

  useEffect(() => {
    if (!open) {
      setSuggestBox(null);
      return;
    }
    updateSuggestBox();
    const ro = new ResizeObserver(() => updateSuggestBox());
    ro.observe(document.documentElement);
    window.addEventListener("scroll", updateSuggestBox, true);
    window.addEventListener("resize", updateSuggestBox);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", updateSuggestBox, true);
      window.removeEventListener("resize", updateSuggestBox);
    };
  }, [open, updateSuggestBox]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const t = e.target as Node;
      if (
        wrapperRef.current?.contains(t) ||
        suggestionsRef.current?.contains(t)
      ) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileNavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileNavOpen]);

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

  function isIntroRoot(slug: string): boolean {
    const s = slug.toLowerCase().replace(/_/g, "-");
    return s.includes("gioi-thieu") || s.includes("gioithieu");
  }

  const navShadow =
    "shadow-[0_14px_34px_-18px_rgba(2,132,199,0.55)]";

  return (
    <>
      {/* Thanh trên: theo docs/headermoi.md — nền sáng, tìm kiếm + hotline + trạng thái */}
      <header className="relative z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-lg supports-[backdrop-filter]:bg-white/85">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-4">
          <div className="flex w-full min-w-0 items-center justify-between gap-2 sm:w-auto sm:justify-start sm:gap-3">
          <Link
            href="/"
            className={`group/logo relative flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2 py-1.5 text-gray-900 outline-none ring-gray-200/0 transition-transform duration-300 ease-[cubic-bezier(0.22,0.75,0.32,1)] motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.99] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:shrink-0 sm:gap-3 sm:px-2 sm:py-1 ${logoBlockTransition} focus-visible:ring-2 focus-visible:ring-blue-500/40`}
          >
            <span
              className={`nav-bounce-logo flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5 ${logoBlockTransition}`}
            >
              <span className="relative inline-flex h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <span
                  className="logo-hover-ripple pointer-events-none absolute inset-0 z-0 rounded-full bg-sky-300/40"
                  aria-hidden
                />
                <span
                  className={`logo-mark-wiggle relative z-[1] inline-flex shrink-0 rounded-full shadow-lg transition-[filter,box-shadow] motion-reduce:shadow-md motion-reduce:transition-none motion-reduce:group-hover/logo:brightness-100 motion-reduce:group-hover/logo:saturate-100 motion-safe:group-hover/logo:shadow-2xl motion-safe:group-hover/logo:shadow-sky-400/45 ${logoBlockTransition} group-hover/logo:brightness-110 group-hover/logo:saturate-125`}
                >
                  <AnimatedLogoMark />
                </span>
              </span>
              <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 sm:gap-1">
                <span className="block text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.14em] text-gray-500 sm:text-[0.65rem] sm:tracking-[0.22em]">
                  Tập đoàn Hải Châu
                </span>
                <span className="line-clamp-2 text-[0.7rem] font-bold leading-snug tracking-tight text-gray-900 sm:line-clamp-none sm:text-lg md:text-xl">
                  CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
                </span>
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="tel:02543894894"
              className="inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md transition hover:shadow-lg active:scale-[0.98]"
              aria-label="Gọi hotline 0254 3 894 894"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <button
              type="button"
              id="mobile-nav-open"
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileNavOpen(true)}
              className="inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:bg-gray-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
            <form
              onSubmit={handleSearch}
              onFocus={() => setSearchFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setSearchFocused(false);
                }
              }}
              className={`hidden w-full min-w-0 flex-1 transition-[max-width,transform] duration-300 ease-out md:mx-4 md:block md:max-w-md ${
                searchFocused ? "md:max-w-xl md:scale-[1.02]" : ""
              }`}
            >
              <div
                className={`relative min-w-0 rounded-full border-2 transition-[box-shadow,transform] duration-300 ${
                  searchFocused
                    ? "border-blue-500 shadow-[0_8px_24px_rgba(59,130,246,0.18)]"
                    : "border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                }`}
                ref={wrapperRef}
              >
                <svg
                  className={`pointer-events-none absolute left-4 top-1/2 z-[1] h-5 w-5 -translate-y-1/2 transition-colors ${
                    searchFocused ? "text-blue-500" : "text-gray-400"
                  }`}
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
                  onFocus={() => {
                    if (suggestions.length > 0) setOpen(true);
                  }}
                  placeholder="Tìm kiếm dịch vụ, tin tức..."
                  className={`w-full rounded-full bg-white py-3 pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition-[padding,box-shadow] duration-200 focus:outline-none ${
                    searchFocused && query.trim()
                      ? "pr-[4.5rem]"
                      : searchFocused
                        ? "pr-4"
                        : "pr-4"
                  }`}
                />
                <button
                  type="submit"
                  tabIndex={searchFocused && query.trim() ? 0 : -1}
                  aria-hidden={!(searchFocused && query.trim())}
                  className={`absolute right-3 top-1/2 z-[2] -translate-y-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600 active:scale-[0.96] ${
                    searchFocused && query.trim()
                      ? "pointer-events-auto scale-100 opacity-100"
                      : "pointer-events-none scale-90 opacity-0"
                  }`}
                >
                  Enter
                </button>
                {open &&
                  suggestBox &&
                  typeof document !== "undefined" &&
                  createPortal(
                    <ul
                      ref={suggestionsRef}
                      className="fixed z-[110] overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-xl"
                      style={{
                        top: suggestBox.top,
                        left: suggestBox.left,
                        width: suggestBox.width,
                        maxHeight: `min(20rem, calc(100dvh - ${suggestBox.top}px - 0.75rem))`,
                      }}
                    >
                      {suggestions.map((article) => (
                        <li key={article.id}>
                          <button
                            type="button"
                            onMouseDown={() => pickSuggestion(article.slug)}
                            className="block w-full truncate px-4 py-2.5 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                          >
                            {article.title}
                          </button>
                        </li>
                      ))}
                    </ul>,
                    document.body,
                  )}
              </div>
            </form>

            {/* Mobile: ô tìm kiếm full width — headermoi.md */}
            <form
              onSubmit={handleSearch}
              className="relative w-full md:hidden"
              onFocus={() => setSearchFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setSearchFocused(false);
                }
              }}
            >
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
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
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
              />
            </form>

            <a
              href="tel:02543894894"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2.5 text-white shadow-lg transition hover:shadow-xl motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.97] sm:inline-flex sm:px-5 sm:py-3"
            >
              <span className="relative inline-flex shrink-0">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span
                  className="header-hotline-ping pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white"
                  aria-hidden
                />
              </span>
              <span className="min-w-0 text-left leading-tight">
                <span className="block text-xs opacity-90">Hotline</span>
                <span className="block text-sm font-semibold tabular-nums">0254 3 894 894</span>
              </span>
            </a>
          </div>
            </div>
          </div>
        </div>
      </header>

      {/* Nav desktop (lg+): hover dropdown; mobile dùng drawer — tránh hover-only trên cảm ứng */}
      <div
        className={`sticky top-0 z-[100] hidden w-full border-b border-white/10 relative transition-[box-shadow] duration-300 lg:block ${navShadow}`}
      >
        <HeaderBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* —— Nav —— */}
          <div className="border-t border-white/20 pb-1.5 pt-1 sm:pb-2 sm:pt-1.5">
            <nav className="flex flex-wrap items-center gap-0.5 text-sm font-semibold lg:flex-nowrap lg:gap-1 lg:overflow-visible lg:pb-1">
              <Link
                href="/"
                className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2 ${navMenuTransition} ${
                  pathname === "/"
                    ? "bg-white/25 text-white"
                    : "text-white/95 hover:bg-white/18"
                }`}
              >
                <IconHome className={navIconClass} />
                <NavLabelText>Trang chủ</NavLabelText>
                {pathname === "/" && (
                  <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)] sm:left-3 sm:right-3" />
                )}
              </Link>

              {roots.map((root) => {
                const children = childrenByRootId[root.id] ?? [];
                const introRoot = isIntroRoot(root.slug);
                const isLienHe = root.slug === "lien-he";
                const rootHref = isLienHe ? "/lien-he" : `/category/${root.slug}`;
                const rootActive =
                  (introRoot
                    ? pathname === `/category/${root.slug}` ||
                      pathname === "/gioi-thieu" ||
                      pathname.startsWith("/gioi-thieu/")
                    : (isLienHe
                        ? pathname === "/lien-he"
                        : pathname === `/category/${root.slug}`) ||
                      children.some((c) => pathname === `/category/${c.slug}`));

                if (children.length === 0) {
                  const active = isLienHe
                    ? pathname === "/lien-he"
                    : pathname === `/category/${root.slug}`;
                  return (
                    <Link
                      key={root.id}
                      href={rootHref}
                      className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2 ${navMenuTransition} ${
                        active
                          ? "bg-white/25 text-white"
                          : "text-white/95 hover:bg-white/18"
                      }`}
                    >
                      <NavRootIcon slug={root.slug} className={navIconClass} />
                      <NavLabelText>{root.name}</NavLabelText>
                      {active && (
                        <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)] sm:left-3 sm:right-3" />
                      )}
                    </Link>
                  );
                }

                return (
                  <div key={root.id} className="relative group">
                    <Link
                      href={rootHref}
                      className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2 ${navMenuTransition} ${
                        rootActive
                          ? "bg-white/25 text-white"
                          : "text-white/95 hover:bg-white/18"
                      }`}
                    >
                      <NavRootIcon slug={root.slug} className={navIconClass} />
                      <NavLabelText>{root.name}</NavLabelText>
                      <svg
                        className={`h-3.5 w-3.5 shrink-0 text-white/90 transition-all ${navMenuTransition} group-hover/nav-item:text-amber-200 group-hover:rotate-180`}
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
                      {rootActive && (
                        <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)] sm:left-3 sm:right-3" />
                      )}
                    </Link>

                    <div className="absolute left-0 top-full z-[60] hidden w-56 pt-1 group-hover:block">
                      <div className="rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
                        {children.map((child) => (
                          <Link
                            key={child.id}
                            href={
                              introRoot
                                ? `/gioi-thieu/${child.slug}`
                                : child.slug === "lien-he"
                                  ? "/lien-he"
                                  : `/category/${child.slug}`
                            }
                            className={[
                              "group/child relative block px-4 py-2.5 text-sm font-medium tracking-tight",
                              "transition-[color,background-color,transform] duration-200 ease-out",
                              "hover:bg-blue-50/90 hover:text-blue-700 hover:translate-x-[2px]",
                              "focus-visible:outline-none focus-visible:bg-blue-50/90 focus-visible:text-blue-700",
                              introRoot
                                ? pathname === `/gioi-thieu/${child.slug}`
                                  ? "bg-blue-50 text-blue-700 font-semibold"
                                  : "text-gray-800"
                                : child.slug === "lien-he"
                                  ? pathname === "/lien-he"
                                    ? "bg-blue-50 text-blue-700 font-semibold"
                                    : "text-gray-800"
                                  : pathname === `/category/${child.slug}`
                                    ? "bg-blue-50 text-blue-700 font-semibold"
                                    : "text-gray-800",
                            ].join(" ")}
                          >
                            <span
                              aria-hidden
                              className="absolute bottom-1.5 left-0 top-1.5 w-1 rounded-r bg-blue-600 opacity-0 transition-opacity duration-200 group-hover/child:opacity-100"
                            />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Link
                href="/lien-he"
                className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2 ${navMenuTransition} ${
                  pathname === "/lien-he"
                    ? "bg-white/25 text-white"
                    : "text-white/95 hover:bg-white/18"
                }`}
              >
                <IconPhone className={navIconClass} />
                <NavLabelText>Liên hệ</NavLabelText>
                {pathname === "/lien-he" && (
                  <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)] sm:left-3 sm:right-3" />
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {mobileNavOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              role="presentation"
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-[1px] lg:hidden"
              onClick={() => setMobileNavOpen(false)}
              aria-hidden
            />
            <div
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-nav-title"
              className="fixed inset-y-0 right-0 z-[210] flex w-full max-w-[min(100%,20rem)] flex-col bg-gradient-to-b from-sky-800 via-blue-900 to-slate-950 shadow-2xl lg:hidden"
              style={{
                paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
              }}
            >
              <div
                className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3"
                style={{
                  paddingTop: "max(0.75rem, env(safe-area-inset-top, 0px))",
                }}
              >
                <h2 id="mobile-nav-title" className="text-base font-bold tracking-tight text-white">
                  Danh mục
                </h2>
                <button
                  type="button"
                  aria-label="Đóng menu"
                  onClick={() => setMobileNavOpen(false)}
                  className="inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-white/95 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  <IconClose className="h-6 w-6" />
                </button>
              </div>
              <nav
                className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 pb-4 pt-2"
                aria-label="Menu chính"
              >
                <Link
                  href="/"
                  onClick={() => setMobileNavOpen(false)}
                  className={`mb-1 flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition active:bg-white/10 ${
                    pathname === "/"
                      ? "bg-white/20 text-white"
                      : "text-white/95 hover:bg-white/12"
                  }`}
                >
                  <IconHome className="h-5 w-5 shrink-0 text-cyan-100" />
                  Trang chủ
                </Link>

                {roots.map((root) => {
                  const children = childrenByRootId[root.id] ?? [];
                  const introRoot = isIntroRoot(root.slug);
                  if (children.length === 0) {
                    const isLienHe = root.slug === "lien-he";
                    const href = isLienHe ? "/lien-he" : `/category/${root.slug}`;
                    const active = isLienHe ? pathname === "/lien-he" : pathname === `/category/${root.slug}`;
                    return (
                      <Link
                        key={root.id}
                        href={href}
                        onClick={() => setMobileNavOpen(false)}
                        className={`mb-1 flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition active:bg-white/10 ${
                          active
                            ? "bg-white/20 text-white"
                            : "text-white/95 hover:bg-white/12"
                        }`}
                      >
                        <NavRootIcon slug={root.slug} className="h-5 w-5 shrink-0 text-cyan-100" />
                        <span className="min-w-0 truncate">{root.name}</span>
                      </Link>
                    );
                  }

                  return (
                    <details
                      key={root.id}
                      className="mobile-nav-details mb-2 overflow-hidden rounded-xl border border-white/15 bg-white/[0.07]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-3 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                        <span className="flex min-w-0 items-center gap-3">
                          <NavRootIcon slug={root.slug} className="h-5 w-5 shrink-0 text-cyan-100" />
                          <span className="truncate">{root.name}</span>
                        </span>
                        <svg
                          className="chevron-icon h-5 w-5 shrink-0 text-white/70 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="border-t border-white/10 bg-slate-950/35 py-1">
                        {children.map((child) => {
                          const href = introRoot
                            ? `/gioi-thieu/${child.slug}`
                            : child.slug === "lien-he"
                              ? "/lien-he"
                              : `/category/${child.slug}`;
                          const childActive = introRoot
                            ? pathname === `/gioi-thieu/${child.slug}`
                            : child.slug === "lien-he"
                              ? pathname === "/lien-he"
                              : pathname === `/category/${child.slug}`;
                          return (
                            <Link
                              key={child.id}
                              href={href}
                              onClick={() => setMobileNavOpen(false)}
                              className={`block min-h-[44px] border-t border-white/5 py-3 pl-12 pr-3 text-sm font-medium transition first:border-t-0 active:bg-white/10 ${
                                childActive
                                  ? "bg-white/15 text-cyan-100"
                                  : "text-white/90 hover:bg-white/8"
                              }`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </details>
                  );
                })}

                <Link
                  href="/lien-he"
                  onClick={() => setMobileNavOpen(false)}
                  className={`mb-1 mt-2 flex min-h-[48px] items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition active:bg-white/10 ${
                    pathname === "/lien-he"
                      ? "bg-white/20 text-white"
                      : "text-white/95 hover:bg-white/12"
                  }`}
                >
                  <IconPhone className="h-5 w-5 shrink-0 text-cyan-100" />
                  LIÊN HỆ
                </Link>
              </nav>
            </div>
          </>,
          document.body,
        )}

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
        @keyframes logoRingSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes logoGlow {
          0%,
          100% {
            box-shadow:
              0 8px 28px -6px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.2),
              0 0 18px rgba(34, 211, 238, 0.25);
          }
          50% {
            box-shadow:
              0 10px 32px -4px rgba(0, 0, 0, 0.55),
              0 0 0 1px rgba(255, 255, 255, 0.35),
              0 0 28px rgba(56, 189, 248, 0.45);
          }
        }
        @keyframes logoImgDrift {
          0%,
          100% {
            transform: rotate(-1.5deg);
          }
          50% {
            transform: rotate(1.5deg);
          }
        }
        @keyframes navBounceNav {
          0%,
          100% {
            transform: translateY(0);
          }
          35% {
            transform: translateY(-3px);
          }
          65% {
            transform: translateY(-1px);
          }
        }
        @keyframes navBounceLogo {
          0%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-6px);
          }
          48% {
            transform: translateY(-2.5px);
          }
          68% {
            transform: translateY(-1px);
          }
          88% {
            transform: translateY(0);
          }
        }
        @keyframes logoMarkWiggle {
          0% {
            transform: rotate(0deg) scale(1);
          }
          18% {
            transform: rotate(-14deg) scale(1.07);
          }
          36% {
            transform: rotate(12deg) scale(1.09);
          }
          54% {
            transform: rotate(-8deg) scale(1.05);
          }
          72% {
            transform: rotate(5deg) scale(1.02);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
        :global(.logo-hover-ripple) {
          opacity: 0;
          transform: scale(1);
          transition:
            opacity 0.55s cubic-bezier(0.22, 0.75, 0.32, 1),
            transform 0.55s cubic-bezier(0.22, 0.75, 0.32, 1);
        }
        :global(.nav-bounce-logo:hover .logo-hover-ripple) {
          opacity: 0.34;
          transform: scale(1.42);
        }
        :global(.nav-bounce-logo:hover .logo-mark-wiggle) {
          animation: logoMarkWiggle 0.62s ease-in-out;
        }
        @keyframes headerHotlinePing {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.45);
            opacity: 0.55;
          }
        }
        :global(.header-hotline-ping) {
          animation: headerHotlinePing 1.5s ease-in-out infinite;
        }
        :global(.animate-headerFloat) {
          animation: headerFloat 7.5s ease-in-out infinite;
          will-change: transform;
        }
        :global(.animate-headerFloat2) {
          animation: headerFloat2 9s ease-in-out infinite;
          will-change: transform;
        }
        :global(.animate-logoRingSpin) {
          animation: logoRingSpin 14s linear infinite;
          will-change: transform;
        }
        :global(.animate-logoGlow) {
          animation: logoGlow 3.5s ease-in-out infinite;
        }
        :global(.animate-logoImgDrift) {
          animation: logoImgDrift 4.5s ease-in-out infinite;
          will-change: transform;
          transform-origin: 50% 50%;
        }
        :global(.nav-bounce-hover:hover) {
          animation: navBounceNav 1.45s cubic-bezier(0.25, 0.8, 0.35, 1);
        }
        :global(.nav-bounce-logo:hover) {
          animation: navBounceLogo 2s cubic-bezier(0.22, 0.75, 0.32, 1);
        }
        :global(details.mobile-nav-details[open] summary .chevron-icon) {
          transform: rotate(180deg);
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-headerFloat),
          :global(.animate-headerFloat2),
          :global(.animate-logoRingSpin),
          :global(.animate-logoGlow),
          :global(.animate-logoImgDrift) {
            animation: none;
          }
          :global(.nav-bounce-hover:hover),
          :global(.nav-bounce-logo:hover) {
            animation: none;
          }
          :global(.nav-bounce-logo:hover .logo-hover-ripple) {
            opacity: 0;
            transform: scale(1);
          }
          :global(.nav-bounce-logo:hover .logo-mark-wiggle) {
            animation: none;
          }
          :global(.header-hotline-ping) {
            animation: none;
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
