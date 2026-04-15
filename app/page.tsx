import VanBanSidebar from "@/components/VanBanSidebar";
import ServiceCards from "@/components/ServiceCards";
import TvNewsHero from "@/components/home/TvNewsHero";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";
import { categoryService } from "@/services/category";
import type { Article } from "@/types";

export default async function HomePage() {
  let vanBanArticles: Article[] = [];

  try {
    const vanBanResult = await categoryService.getArticlesBySlug("van-ban", {
      page: 1,
      size: 30,
    });
    vanBanArticles = vanBanResult.result;
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto flex w-full min-h-0 max-w-7xl flex-1 flex-col px-4 py-1 sm:px-6 sm:py-2">
        {/* Chiều cao = 100dvh − (header + nav + padding trang); offset lớn để khối không tràn khỏi màn hình. */}
        <section
          className="flex w-full shrink-0 flex-col overflow-x-hidden overscroll-y-auto min-h-0 overflow-y-auto h-[calc(100dvh-15rem)] max-h-[calc(100dvh-15rem)] sm:h-[calc(100dvh-13rem)] sm:max-h-[calc(100dvh-13rem)] lg:h-[calc(100dvh-11rem)] lg:max-h-[calc(100dvh-11rem)] lg:overflow-hidden"
          aria-label="Khu vực nổi bật"
        >
          <div className="grid h-full min-h-0 grid-cols-12 items-stretch gap-2 sm:gap-3 lg:grid-rows-1">
            {/* LEFT */}
            <div className="col-span-12 flex min-h-0 flex-col gap-1.5 sm:gap-2 lg:col-span-8 lg:h-full lg:min-h-0">
              {/* HERO — carousel theo docs/TV.md */}
              <div
                className={`relative min-h-[280px] shrink-0 overflow-hidden lg:min-h-0 lg:flex-1 lg:basis-0 ${CARD_HOVER_CLASS}`}
              >
                <TvNewsHero />
              </div>
            </div>
            {/* RIGHT SIDEBAR — số dòng theo chiều cao khung (VanBanSidebar) */}
            <div className="col-span-12 flex min-h-0 flex-col gap-2 sm:gap-2.5 lg:col-span-4 lg:h-full lg:min-h-0">
              <VanBanSidebar articles={vanBanArticles} />
            </div>
          </div>
          
        </section>
      </div>

      <ServiceCards />
    </div>
  );
}
