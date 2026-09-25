import HomeArticleSidebarSection from "@/components/home/HomeArticleSidebarSection";
import ServiceCards from "@/components/ServiceCards";
import TvNewsHero from "@/components/home/TvNewsHero";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import Link from "next/link";
import Image from "next/image";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";
import { articleService } from "@/services/article";
import { categoryService } from "@/services/category";
import type { Article } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default async function HomePage() {
  let featuredArticles: Article[] = [];
  let maintenanceArticles: Article[] = [];
  let latestArticles: Article[] = [];
  let waterTestingArticles: Article[] = [];

  try {
    const [featured, maintenance, latest, waterTesting] = await Promise.all([
      articleService.getAll({
        type: 1,
        page: 0,
        size: 5,
        sort: "createdAt,desc",
      }),
      categoryService.getArticlesBySlug("lich-cup-nuoc-bao-duong", { size: 7 }),
      articleService.getAll({
        page: 0,
        size: 6,
        sort: "createdAt,desc",
      }),
      categoryService.getArticlesBySlug("xet-nghiem-nuoc", { size: 5 }),
    ]);
    featuredArticles = featured.result;
    maintenanceArticles = maintenance.result;
    latestArticles = latest.result;
    waterTestingArticles = waterTesting.result;
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden bg-white">
      {/* Nền trang sáng nhẹ nhàng */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <section className="w-full" aria-label="Khu vực nổi bật">
          <div className="grid grid-cols-12 items-start gap-4 lg:items-stretch">
            {/* LEFT */}
            <div className="col-span-12 order-2 flex flex-col gap-4 lg:order-1 lg:col-span-8 lg:h-full">
              {/* HERO */}
              <div
                className={`relative h-[340px] overflow-hidden rounded-2xl sm:h-[420px] lg:flex-1 lg:h-auto lg:min-h-[520px] shadow-sm ${CARD_HOVER_CLASS}`}
              >
                <TvNewsHero articles={waterTestingArticles} />
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 order-1 flex flex-col gap-4 lg:order-2 lg:col-span-4">
              <HomeArticleSidebarSection
                mode="featured"
                title="Bài viết nổi bật"
                articles={featuredArticles}
                maxItems={5}
                showViews={false}
              />
              <HomeArticleSidebarSection
                mode="maintenance"
                title="Lịch cúp nước bảo dưỡng"
                articles={maintenanceArticles}
                maxItems={7}
                showViews={false}
              />
            </div>
          </div>
        </section>

        {/* MỚI NHẤT — đặt dưới TV show (giữ thứ tự) */}
        <section className="mt-8" aria-label="Bài viết mới nhất">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="relative flex items-center justify-between gap-3 bg-[#0c2340] px-4 py-3 text-white sm:px-5">
              <span className="text-base font-bold tracking-tight text-white">Bài viết mới nhất</span>
              <Link
                href="/news"
                className="rounded-full bg-[#1cd0b4] px-4 py-1.5 text-xs font-bold text-[#0c2340] transition hover:bg-[#18bda4]"
              >
                Xem tất cả →
              </Link>
            </div>
            <div className="relative px-4 py-4 sm:px-5">
              {latestArticles.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-500">
                  Chưa có bài viết.
                </p>
              ) : (
                <div className="flex gap-4 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
                  {latestArticles.map((a) => (
                    <Link
                      key={a.id}
                      href={`/news/${a.slug}`}
                      className="group/latest snap-start min-w-[260px] max-w-[260px] overflow-hidden rounded-2xl border border-slate-100 bg-[#ebf4f6] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={resolveThumb(a.thumbnail)}
                          alt={a.title}
                          fill
                          sizes="260px"
                          className="object-cover transition-transform duration-300 group-hover/latest:scale-[1.05]"
                        />
                      </div>
                      <div className="p-3.5">
                        <p className="text-sm font-bold leading-snug text-[#0c2340] line-clamp-2 transition-colors group-hover/latest:text-teal-700">
                          {a.title}
                        </p>
                        <p className="mt-1.5 text-xs font-medium text-slate-500 tabular-nums">
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

      {/* Khu vực giới thiệu Ứng dụng Di động Tóc Tiên (iOS & Android) */}
      <AppDownloadSection />
    </div>
  );
}
