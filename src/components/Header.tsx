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
    "text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-[background-image,filter,opacity]";
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

  const navShadow =
    "shadow-[0_14px_34px_-18px_rgba(2,132,199,0.55)]";

  return (
    <>
      {/* Logo/search: trong <header>, cuộn theo trang */}
      <header className="relative z-40 border-b border-white/10">
      <div className="relative">
        <HeaderBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* —— Logo + Search + Hotline —— */}
        <div className="flex flex-col gap-2 sm:gap-2 sm:flex-row sm:items-center sm:justify-between pt-2 pb-1.5 sm:pt-3 sm:pb-2">
          <Link
            href="/"
            className={`nav-bounce-logo group/logo relative flex shrink-0 min-w-0 items-center gap-2 rounded-xl px-2 py-1.5 text-white/95 outline-none ring-white/0 transition-colors sm:gap-2.5 sm:px-2.5 sm:py-2 ${logoBlockTransition} focus-visible:ring-2 focus-visible:ring-white/35`}
          >
            <span
              className={`inline-flex shrink-0 transition-[filter] motion-reduce:transition-none motion-reduce:group-hover/logo:brightness-100 motion-reduce:group-hover/logo:saturate-100 ${logoBlockTransition} group-hover/logo:brightness-110 group-hover/logo:saturate-125`}
            >
              <AnimatedLogoMark />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span
                className={`block text-[0.72rem] uppercase tracking-[0.28em] text-white/70 transition-colors ${logoBlockTransition} group-hover/logo:text-[#FFFFFF]`}
              >
                TẬP ĐOÀN HẢI CHÂU
              </span>
              <NavLabelText forLogo className="mt-0.5 block text-base font-extrabold lg:text-lg">
                CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
              </NavLabelText>
            </span>
          </Link>

          <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 min-w-0 w-full sm:justify-end">
            <form
              onSubmit={handleSearch}
              onFocus={() => setSearchFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setSearchFocused(false);
                }
              }}
              className={`w-full sm:max-w-md transition-all duration-300 ease-out ${
                searchFocused ? "sm:max-w-xl scale-[1.01] sm:scale-[1.02]" : ""
              }`}
            >
              <div
                className={`relative flex-1 min-w-0 transition-all duration-300 ${
                  searchFocused
                    ? "shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] ring-2 ring-white/50 rounded-full"
                    : "rounded-full"
                }`}
                ref={wrapperRef}
              >
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/65 z-[1] pointer-events-none"
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
                  placeholder="Tìm kiếm bài viết..."
                  className={`w-full pl-9 py-1.5 text-sm bg-white/15 border border-white/30 text-white placeholder:text-white/60 rounded-full focus:outline-none focus:ring-2 focus:ring-white/55 focus:bg-white/25 transition-[padding,background-color,box-shadow] duration-200 ${
                    searchFocused ? "pr-[5.5rem] sm:pr-[5.75rem]" : "pr-3"
                  }`}
                />
                <button
                  type="submit"
                  tabIndex={searchFocused ? 0 : -1}
                  aria-hidden={!searchFocused}
                  className={`absolute right-1.5 top-1/2 z-[2] -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold bg-white text-blue-800 shadow-md transition-all duration-200 ease-out hover:bg-blue-50 hover:shadow-lg active:scale-[0.97] ${
                    searchFocused
                      ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                      : "pointer-events-none translate-x-2 scale-95 opacity-0 w-0 px-0 overflow-hidden border-0 py-0"
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

            <a
              href="tel:1900123456"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-2.5 py-1.5 text-sm font-bold text-slate-900 shadow-lg shadow-orange-500/30 ring-2 ring-white/30 transition hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 sm:px-3.5 sm:py-2 sm:rounded-2xl sm:gap-2"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-wide opacity-90">
                  Hotline
                </span>
                <span className="text-base font-black tabular-nums tracking-tight">
                  02543 894 894
                </span>
              </span>
            </a>
          </div>
        </div>
        </div>
      </div>
      </header>

      {/* Nav ngoài <header> — sticky; z trên dropdown gợi ý (95) khi chồng lên nhau */}
      <div
        className={`sticky top-0 z-[100] w-full border-b border-white/10 relative transition-[box-shadow] duration-300 ${navShadow}`}
      >
        <HeaderBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* —— Nav —— */}
        <div className="border-t border-white/20 pb-1.5 pt-1 sm:pb-2 sm:pt-1.5">
          <nav className="flex flex-wrap items-center gap-0.5 text-sm font-semibold">
            <Link
              href="/"
              className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap px-2 py-1.5 rounded-lg transition-colors sm:gap-2 sm:px-2.5 sm:py-2 sm:rounded-xl ${navMenuTransition} ${
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
              const rootActive =
                pathname === `/category/${root.slug}` ||
                children.some((c) => pathname === `/category/${c.slug}`);
              if (children.length === 0) {
                return (
                  <Link
                    key={root.id}
                    href={`/category/${root.slug}`}
                    className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap px-2 py-1.5 rounded-lg transition-colors sm:gap-2 sm:px-2.5 sm:py-2 sm:rounded-xl ${navMenuTransition} ${
                      pathname === `/category/${root.slug}`
                        ? "bg-white/25 text-white"
                        : "text-white/95 hover:bg-white/18"
                    }`}
                  >
                    <NavRootIcon slug={root.slug} className={navIconClass} />
                    <NavLabelText>{root.name}</NavLabelText>
                    {pathname === `/category/${root.slug}` && (
                      <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)] sm:left-3 sm:right-3" />
                    )}
                  </Link>
                );
              }

              return (
                <div key={root.id} className="relative group">
                  <Link
                    href={`/category/${root.slug}`}
                    className={`nav-bounce-hover group/nav-item relative flex items-center gap-1.5 whitespace-nowrap px-2 py-1.5 rounded-lg transition-colors sm:gap-2 sm:px-2.5 sm:py-2 sm:rounded-xl ${navMenuTransition} ${
                      rootActive
                        ? "bg-white/25 text-white"
                        : "text-white/95 hover:bg-white/18"
                    }`}
                  >
                    <NavRootIcon slug={root.slug} className={navIconClass} />
                    <NavLabelText>{root.name}</NavLabelText>
                    <svg
                      className={`w-3.5 h-3.5 shrink-0 text-white/90 transition-all ${navMenuTransition} group-hover:rotate-180 group-hover/nav-item:text-amber-200`}
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
        }
      `}</style>
    </>
  );
}
