import Link from "next/link";
import type { Article } from "@/types";

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 2z" />
    </svg>
  );
}

function IconEye({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

const rowClass =
  "group/homeart relative block rounded-xl px-2.5 py-2 transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/10";

const headerStyles = {
  featured: "bg-gradient-to-r from-amber-600 to-orange-600",
  mostViewed: "bg-gradient-to-r from-sky-600 to-cyan-600",
} as const;

const accentIcon = {
  featured: "text-amber-300 group-hover/homeart:text-amber-200",
  mostViewed: "text-cyan-300 group-hover/homeart:text-cyan-200",
} as const;

export type HomeArticleSidebarMode = "featured" | "mostViewed";

interface Props {
  mode: HomeArticleSidebarMode;
  title: string;
  articles: Article[];
  /** Số bài tối đa hiển thị. */
  maxItems?: number;
  /** Luôn hiện số views (dùng cho “xem nhiều”). */
  showViews?: boolean;
}

export default function HomeArticleSidebarSection({
  mode,
  title,
  articles,
  maxItems,
  showViews,
}: Props) {
  const list = articles.slice(0, maxItems ?? 4);
  const displayViews = showViews ?? mode === "mostViewed";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-blue-900/25 backdrop-blur-xl">
      <div
        className={`flex shrink-0 items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white sm:px-5 sm:text-base ${headerStyles[mode]}`}
      >
        {mode === "featured" ? (
          <IconStar className="h-4 w-4 shrink-0 text-amber-100" />
        ) : (
          <IconEye className="h-4 w-4 shrink-0 text-cyan-100" />
        )}
        <span className="tracking-tight">{title}</span>
      </div>

      <div className="px-4 py-2 sm:px-5">
        {list.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate-400">Chưa có bài viết.</p>
        ) : (
          <ul className="divide-y divide-white/10">
            {list.map((article) => (
              <li key={article.id}>
                <Link href={`/news/${article.slug}`} className={rowClass}>
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 ${accentIcon[mode]}`} aria-hidden>
                      {mode === "featured" ? (
                        <IconStar className="h-3.5 w-3.5" />
                      ) : (
                        <IconEye className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <p className="min-w-0 flex-1 text-left text-sm text-slate-200 line-clamp-2 group-hover/homeart:text-white">
                      {article.title}
                    </p>
                  </div>
                  {displayViews ? (
                    <p className="mt-1 pl-6 text-xs text-slate-500 tabular-nums group-hover/homeart:text-slate-400">
                      {(article.views ?? 0).toLocaleString("vi-VN")} lượt xem
                    </p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
