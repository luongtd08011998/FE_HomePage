import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import { categoryService } from "@/services/category";
import type { Article } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

function IconVanBanDoc({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V6A2.25 2.25 0 016.75 3.75h7.5L19.5 8.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 3.75V8.25h5.25"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75h9" />
    </svg>
  );
}

function IconMegaphone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783m0 0a24.255 24.255 0 01-1.913-2.432m0 0a24.24 24.24 0 01-2.932-2.193m0 0a23.76 23.76 0 01-3.283-3.15m0 0a23.74 23.74 0 01-2.98-4.25m0 0a20.88 20.88 0 01-1.35-4.5"
      />
    </svg>
  );
}

function IconRssFeed({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c0 8.284 6.716 15 15 15v.75M8.25 7.5H9m8.25 8.25V19.5"
      />
    </svg>
  );
}

function IconInformationCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default async function HomePage() {
  let tinTucArticles: Article[] = [];
  let vanBanArticles: Article[] = [];
  let gioiThieuArticles: Article[] = [];

  try {
    const [tinTucResult, vanBanResult, gioiThieuResult] = await Promise.all([
      categoryService.getArticlesBySlug("tin-tuc", { page: 1, size: 3 }),
      categoryService.getArticlesBySlug("van-ban", { page: 1, size: 8 }),
      categoryService.getArticlesBySlug("gioi-thieu", { page: 1, size: 3 }),
    ]);
    tinTucArticles = tinTucResult.result;
    vanBanArticles = vanBanResult.result;
    gioiThieuArticles = gioiThieuResult.result;
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* GRID */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-8 h-full min-h-0 flex flex-col gap-4">
            {/* HERO — flex-1 để cột trái cao bằng sidebar (lg) */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-sky-200 to-blue-400 min-h-[320px] lg:flex-1 flex items-center justify-center ring-1 ring-sky-100 shadow-sm">
              <div className="text-center px-6">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                  NƯỚC TÓC TIÊN
                </div>
                <p className="text-slate-700 mt-2">
                  Ứng dụng chăm sóc khách hàng
                </p>
              </div>
            </div>

            {/* SERVICE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
              {/* Hotline */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition">
                <div className="mb-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
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
                <p className="text-blue-700 font-semibold text-sm mb-1">
                  Hotline{" "}
                  <a href="tel:02543894894" className="font-extrabold hover:underline">
                    0254 3 894 894
                  </a>
                </p>
                <h3 className="text-slate-900 font-bold text-sm uppercase mb-2">
                  Hỗ trợ trực tuyến
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  Tư vấn, tiếp nhận đăng ký lắp mới, sửa chữa, thay thế và di dời hệ
                  thống nước.
                </p>
              </div>

              {/* Tra cứu hóa đơn */}
              <Link
                href="/tra-cuu-hoa-don"
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition"
              >
                <div className="mb-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
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
                <p className="text-blue-700 font-semibold text-sm mb-1">&nbsp;</p>
                <h3 className="text-slate-900 font-bold text-sm uppercase mb-2">
                  Tra cứu hóa đơn
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  Tra cứu hóa đơn tiền nước nhanh chóng theo mã khách hàng.
                </p>
              </Link>

              {/* Thanh toán */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition">
                <div className="mb-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
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
                <p className="text-blue-700 font-semibold text-sm mb-1">&nbsp;</p>
                <h3 className="text-slate-900 font-bold text-sm uppercase mb-2">
                  Thanh toán
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  Thanh toán qua app ngân hàng. Vào mục hóa đơn và chọn đơn vị cấp nước.
                </p>
              </div>
            </div>          
          </div>
          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-4 h-full flex flex-col gap-4">
            
            {/* Văn bản — 8 bài mới nhất danh mục Văn bản */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-sky-100 flex flex-col h-full min-h-0">
              <div className="bg-blue-700 text-white px-4 py-2 font-semibold flex items-center gap-2">
                <IconMegaphone className="w-5 h-5 shrink-0 opacity-95" />
                Văn bản
              </div>

              <div className="divide-y overflow-auto">
                {(vanBanArticles.length > 0
                  ? vanBanArticles
                  : [1, 2, 3, 4, 5, 6, 7, 8]
                ).map(
                  (item, idx) => {
                    const article = typeof item === "number" ? null : item;
                    const content = article ? (
                      <Link
                        href={`/news/${article.slug}`}
                        className="block p-3 hover:bg-gray-50"
                      >
                        <div className="flex items-start gap-2">
                          <span
                            className="mt-0.5 text-blue-600 shrink-0"
                            aria-hidden="true"
                          >
                            <IconVanBanDoc className="w-4 h-4" />
                          </span>
                          <p className="text-sm text-slate-800 line-clamp-2">
                            {article.title}
                          </p>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          {new Date(article.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      </Link>
                    ) : (
                      <div className="p-3 hover:bg-gray-50">
                        <div className="flex items-start gap-2">
                          <span
                            className="mt-0.5 text-blue-600 shrink-0"
                            aria-hidden="true"
                          >
                            <IconVanBanDoc className="w-4 h-4" />
                          </span>
                          <p className="text-sm text-slate-800 line-clamp-2">
                            Nội dung thông báo số {idx + 1}
                          </p>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">01/04/2026</p>
                      </div>
                    );
                    return <div key={article ? article.id : idx}>{content}</div>;
                  },
                )}
              </div>
            </div>          
          </div>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-3">
          {["Z", "YT", "R", "☎"].map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-50 border border-sky-100 text-slate-700 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Tin tức (cũ) */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <IconRssFeed className="w-6 h-6 text-blue-600 shrink-0" />
              Tin tức
            </h2>
            <Link
              href="/category/tin-tuc"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Xem tất cả →
            </Link>
          </div>
          {tinTucArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tinTucArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-10">Chưa có bài viết nào.</p>
          )}
        </div>

        {/* Giới thiệu */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <IconInformationCircle className="w-6 h-6 text-blue-600 shrink-0" />
              Giới thiệu
            </h2>
            <Link
              href="/category/gioi-thieu"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Xem tất cả →
            </Link>
          </div>
          {gioiThieuArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gioiThieuArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-10">Chưa có bài viết nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}
