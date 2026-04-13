import Link from "next/link";
import KhachHang from "@/components/KhachHang";
import LichSuCongTy from "@/components/LichSuCongTy";
import PhamViCapNuoc from "@/components/PhamViCapNuoc";
import QuyTrinhXuLyNuoc from "@/components/QuyTrinhXuLyNuoc";
import HeThongXuLy from "@/components/HeThongXuLy";
import KhuVucPhucVu from "@/components/KhuVucPhucVu";
import KhachHangDoiTac from "@/components/KhachHangDoiTac";
import VanBanSidebar from "@/components/VanBanSidebar";
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
              {/* HERO */}
              <div
                className={`relative flex min-h-[4.5rem] shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-cyan-700 px-3 py-2.5 ring-1 ring-blue-500/50 shadow-lg shadow-blue-900/50 sm:min-h-[5.25rem] lg:min-h-0 lg:flex-1 lg:basis-0 lg:py-3 ${CARD_HOVER_CLASS}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20" aria-hidden />
                <div className="relative text-center px-2 sm:px-3">
                  <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
                    NƯỚC TÓC TIÊN
                  </div>
                  <p className="mt-0.5 text-xs text-blue-100 sm:text-sm">
                    Ứng dụng chăm sóc khách hàng
                  </p>
                </div>
              </div>

              {/* SERVICE CARDS */}
              <div className="grid shrink-0 grid-cols-1 gap-2 md:grid-cols-3 md:gap-2">
                {/* Hotline */}
                <div
                  className={`flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur-lg sm:p-4 ${CARD_HOVER_CLASS}`}
                >
                  <div className="mb-1.5 text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-300 font-semibold text-sm mb-1">
                    Hotline{" "}
                    <a
                      href="tel:02543894894"
                      className="font-extrabold hover:underline text-white"
                    >
                      0254 3 894 894
                    </a>
                  </p>
                  <h3 className="mb-1 text-sm font-bold uppercase text-white">
                    Hỗ trợ trực tuyến
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                    Tư vấn, tiếp nhận đăng ký lắp mới, sửa chữa, thay thế và di
                    dời hệ thống nước.
                  </p>
                </div>

                {/* Tra cứu hóa đơn */}
                <Link
                  href="/tra-cuu-hoa-don"
                  className={`flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur-lg sm:p-4 ${CARD_HOVER_CLASS}`}
                >
                  <div className="mb-1.5 text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-300 font-semibold text-sm mb-1">
                    &nbsp;
                  </p>
                  <h3 className="mb-1 text-sm font-bold uppercase text-white">
                    Tra cứu hóa đơn
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                    Tra cứu hóa đơn tiền nước nhanh chóng theo mã khách hàng.
                  </p>
                </Link>

                {/* Thanh toán */}
                <div
                  className={`flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur-lg sm:p-4 ${CARD_HOVER_CLASS}`}
                >
                  <div className="mb-1.5 text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-300 font-semibold text-sm mb-1">
                    &nbsp;
                  </p>
                  <h3 className="mb-1 text-sm font-bold uppercase text-white">
                    Thanh toán
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                    Thanh toán qua app ngân hàng. Vào mục hóa đơn và chọn đơn vị
                    cấp nước.
                  </p>
                </div>
              </div>
            </div>
            {/* RIGHT SIDEBAR — số dòng theo chiều cao khung (VanBanSidebar) */}
            <div className="col-span-12 flex min-h-0 flex-col gap-2 sm:gap-2.5 lg:col-span-4 lg:h-full lg:min-h-0">
              <VanBanSidebar articles={vanBanArticles} />
            </div>
          </div>
        </section>
      </div>
      <LichSuCongTy />
      <QuyTrinhXuLyNuoc />
      <HeThongXuLy />
      <KhuVucPhucVu />
      <KhachHangDoiTac />
    </div>
  );
}
