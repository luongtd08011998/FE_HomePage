import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import BannerSlider from "@/components/BannerSlider";
import { categoryService } from "@/services/category";
import type { Article } from "@/types";

function resolveThumb(thumbnail: string): string {
  if (!thumbnail) return "/placeholder.svg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:8080"}${thumbnail}`;
}

export default async function HomePage() {
  let tinTucArticles: Article[] = [];
  let vanBanArticles: Article[] = [];

  try {
    const [tinTucResult, vanBanResult] = await Promise.all([
      categoryService.getArticlesBySlug("tin-tuc", { page: 1, size: 3 }),
      categoryService.getArticlesBySlug("van-ban", { page: 1, size: 3 }),
    ]);
    tinTucArticles = tinTucResult.result;
    vanBanArticles = vanBanResult.result;
  } catch {
    // API not available — render empty state
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Banner Slider */}
      <BannerSlider />

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Hotline */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
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
          <p className="text-orange-500 font-semibold text-base mb-1">
            Hotline &nbsp;
            <a href="tel:19006366" className="font-bold hover:underline">
              0254 3 894 894
            </a>
          </p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Hỗ trợ trực tuyến
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tư vấn trực tuyến. Hỗ trợ đăng ký lắp mới đồng hồ nước. Hỗ trợ đăng
            ký sửa chữa và nâng dời. Tra cứu tiến độ thời gian giải quyết hồ sơ.
          </p>
        </div>

        {/* Tra cứu hóa đơn */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
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
          <p className="text-orange-500 font-semibold text-base mb-1">&nbsp;</p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Tra cứu hóa đơn điện tử
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Quý khách hàng có thể tra cứu hóa đơn tiền nước tại đây.
          </p>
        </div>

        {/* Thanh toán trực tuyến */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="mb-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
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
          <p className="text-orange-500 font-semibold text-base mb-1">&nbsp;</p>
          <h3 className="text-blue-800 font-bold text-lg uppercase mb-3">
            Thanh toán trực tuyến
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Khách hàng có thể thanh toán tiền nước trực tuyến qua cổng thanh
            toán điện tử VNPay trên Website chính thức của công ty.
          </p>
        </div>
      </div>

      {/* Tin tức */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Tin tức</h2>
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
          <p className="text-gray-500 text-center py-10">
            Chưa có bài viết nào.
          </p>
        )}
      </div>

      {/* Văn bản */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Văn bản</h2>
          <Link
            href="/category/van-ban"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Xem tất cả →
          </Link>
        </div>
        {vanBanArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vanBanArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10">
            Chưa có bài viết nào.
          </p>
        )}
      </div>
    </div>
  );
}
