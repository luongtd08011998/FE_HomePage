"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { Article } from "@/types";

function IconWaterDrop({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
    </svg>
  );
}

const vanBanRowClass =
  "group/vanban relative block rounded-md px-2.5 py-2 transition-[transform,background-color] duration-200 ease-out hover:-translate-x-3 hover:bg-white/10";

export default function VanBanSidebar({ articles }: { articles: Article[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() =>
    articles.length > 0 ? articles.length : 0,
  );

  const recompute = useCallback(() => {
    const el = listRef.current;
    if (!el || articles.length === 0) {
      setVisible(0);
      return;
    }
    const h = el.clientHeight;
    if (h < 24) return;

    const rowH = Math.max(
      40,
      firstRowRef.current?.getBoundingClientRect().height ?? 56,
    );
    const n = Math.max(1, Math.floor(h / rowH));
    setVisible(Math.min(n, articles.length));
  }, [articles.length]);

  useLayoutEffect(() => {
    recompute();
  }, [articles.length, recompute]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => recompute());
    ro.observe(el);
    return () => ro.disconnect();
  }, [recompute]);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-lg shadow-blue-900/30 backdrop-blur-lg">
      <div className="flex shrink-0 items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-1.5 text-sm font-semibold text-white sm:px-4 sm:py-1.5 sm:text-base">
        Văn bản
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {articles.length === 0 ? (
          <p className="px-3 py-6 text-center text-sm text-slate-400">
            Chưa có văn bản.
          </p>
        ) : (
          <>
            <div
              ref={listRef}
              className="min-h-0 flex-1 divide-y divide-white/10 overflow-hidden px-3"
            >
              {articles.slice(0, visible).map((article, idx) => (
                <div key={article.id} ref={idx === 0 ? firstRowRef : undefined}>
                  <Link
                    href={`/news/${article.slug}`}
                    className={vanBanRowClass}
                  >
                    <div className="relative z-10 flex items-start gap-2">
                      <span
                        className="mt-0.5 shrink-0 text-cyan-400 transition-colors group-hover/vanban:text-cyan-300"
                        aria-hidden
                      >
                        <IconWaterDrop className="h-4 w-4" />
                      </span>
                      <p className="min-w-0 flex-1 text-left text-sm text-slate-200 line-clamp-2 group-hover/vanban:line-clamp-none group-hover/vanban:text-white">
                        {article.title}
                      </p>
                    </div>
                    <p className="relative z-10 mt-1 pl-6 text-xs text-slate-500 group-hover/vanban:text-slate-400">
                      {new Date(article.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {visible < articles.length ? (
              <Link
                href="/category/van-ban"
                className="shrink-0 border-t border-white/20 px-3 py-2 text-center text-xs font-medium text-cyan-400 hover:bg-white/10 hover:underline"
              >
                Xem thêm ({articles.length - visible} bài)
              </Link>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
