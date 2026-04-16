import HomeArticleSidebarSection from "@/components/home/HomeArticleSidebarSection";
import ServiceCards from "@/components/ServiceCards";
import TvNewsHero from "@/components/home/TvNewsHero";
import Link from "next/link";
import Image from "next/image";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";
import { articleService } from "@/services/article";
import type { Article } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default async function HomePage() {
  let featuredArticles: Article[] = [];
  let mostViewedArticles: Article[] = [];
  let latestArticles: Article[] = [];

  try {
    const [featured, byViews, latest] = await Promise.all([
      articleService.getAll({
        type: 1,
        page: 0,
        size: 5,
        sort: "createdAt,desc",
      }),
      articleService.getAll({
        page: 0,
        size: 7,
        sort: "views,desc",
      }),
      articleService.getAll({
        page: 0,
        size: 6,
        sort: "createdAt,desc",
      }),
    ]);
    featuredArticles = featured.result;
    mostViewedArticles = byViews.result;
    latestArticles = latest.result;
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      {/* nền trang */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <section className="w-full" aria-label="Khu vực nổi bật">
          <div className="grid grid-cols-12 items-start gap-4 lg:items-stretch">
            {/* LEFT */}
            <div className="col-span-12 flex flex-col gap-4 lg:col-span-8 lg:h-full">
              {/* HERO */}
              <div
                className={`relative h-[340px] overflow-hidden sm:h-[420px] lg:flex-1 lg:h-auto lg:min-h-[520px] ${CARD_HOVER_CLASS}`}
              >
                <TvNewsHero />
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
              <HomeArticleSidebarSection
                mode="featured"
                title="Bài viết nổi bật"
                articles={featuredArticles}
                maxItems={5}
                showViews={false}
              />
              <HomeArticleSidebarSection
                mode="mostViewed"
                title="Được xem nhiều"
                articles={mostViewedArticles}
                maxItems={7}
                showViews
              />
            </div>
          </div>
        </section>

        {/* MỚI NHẤT — đặt dưới TV show (giữ thứ tự) */}
        <section className="mt-6" aria-label="Bài viết mới nhất">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-950/35 shadow-[0_18px_50px_-22px_rgba(2,132,199,0.65)] backdrop-blur-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            <div className="relative flex items-center justify-between gap-3 bg-gradient-to-r from-slate-900/55 via-slate-900/30 to-slate-900/15 px-4 py-2.5 text-sm font-semibold text-white sm:px-5">
              <span className="tracking-tight">Bài viết mới nhất</span>
              <Link
                href="/news"
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100/95 transition hover:bg-white/15 hover:text-white"
              >
                Xem tất cả →
              </Link>
            </div>
            <div className="relative px-4 py-4 sm:px-5">
              {latestArticles.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-400">
                  Chưa có bài viết.
                </p>
              ) : (
                <div className="flex gap-3 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
                  {latestArticles.map((a) => (
                    <Link
                      key={a.id}
                      href={`/news/${a.slug}`}
                      className="group/latest snap-start min-w-[260px] max-w-[260px] overflow-hidden rounded-2xl border border-white/12 bg-slate-950/35 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-950/45 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={resolveThumb(a.thumbnail)}
                          alt={a.title}
                          fill
                          sizes="260px"
                          className="object-cover transition-transform duration-300 group-hover/latest:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>
                      <div className="p-3.5">
                        <p className="text-sm font-semibold leading-snug text-slate-100 line-clamp-2 group-hover/latest:text-white">
                          {a.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400 tabular-nums">
                          {new Date(a.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Giữ thứ tự: phần dịch vụ ở dưới cùng */}
      <ServiceCards />
    </div>
  );
}
