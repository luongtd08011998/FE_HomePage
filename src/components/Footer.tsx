"use client";

import Link from "next/link";
import AppDownloadBadges from "@/components/common/AppDownloadBadges";

function IconArrowUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const ADDRESS = "Ấp Tóc Tiên 1, Xã Châu Pha, TP. Hồ Chí Minh, Việt Nam";
const MAP_URL = "https://maps.app.goo.gl/nY1ZkzVAGcV9LwKc9";

const menuLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Tin tức & Sự kiện", href: "/news" },
  { label: "Tra cứu hóa đơn", href: "/category/tra-cuu-hoa-don" },
  { label: "Đăng ký lắp đặt", href: "/category/dang-ky-lap-dat-truc-tuyen" },
] as const;

const linkRow =
  "group inline-flex min-h-[40px] items-center gap-2 py-1 text-left text-sm text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4] hover:translate-x-1.5 sm:min-h-0";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="mt-auto bg-[#0c2440] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-7 sm:pt-14 lg:px-8 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Cột 1: Thông tin liên hệ */}
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="mb-2.5 border-b border-white/15 pb-2 text-sm font-bold sm:mb-6 sm:pb-3 sm:text-lg">
              Thông tin liên hệ
            </h4>
            <div className="space-y-2.5 sm:space-y-4">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-xs text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4] sm:gap-2.5 sm:text-sm"
              >
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1cd0b4] transition-all duration-300 ease-out group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="min-w-0 break-words text-pretty leading-relaxed">
                  {ADDRESS}
                </span>
              </a>
              <a
                href="mailto:office@toctienltd.vn"
                className="group flex items-center gap-2 text-xs text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4] sm:gap-2.5 sm:text-sm"
              >
                <IconMail className="h-4 w-4 shrink-0 text-[#1cd0b4] transition-all duration-300 ease-out group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="min-w-0">office@toctienltd.vn</span>
              </a>
              <div className="flex items-start gap-2 text-xs text-white/90 sm:gap-2.5 sm:text-sm">
                <IconPhone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#1cd0b4] sm:h-5 sm:w-5"
                  aria-hidden
                />
                <div className="min-w-0 flex-1 leading-relaxed">
                  <span className="text-white/70">Điện thoại:</span>{" "}
                  <a
                    href="tel:02543894894"
                    className="tabular-nums font-semibold text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4]"
                  >
                    0254 3 894 894
                  </a>
                  <span className="text-white/70"> - </span>
                  <a
                    href="tel:0865379119"
                    className="tabular-nums font-semibold text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4]"
                  >
                    0865 379 119
                  </a>
                </div>
              </div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-white/80 sm:text-sm">
                <span className="font-medium text-white">MST:</span>
                <span className="tabular-nums">3500815711</span>
              </p>

              {/* Nút liên hệ dạng pill */}
              <div className="pt-1 sm:pt-2">
                <a
                  href="tel:02543894894"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1cd0b4] px-4 py-1.5 text-xs font-bold text-[#0c2440] shadow-sm transition-all duration-300 ease-out hover:bg-white hover:text-[#0c2440] hover:scale-105 active:scale-95 sm:px-6 sm:py-2.5"
                >
                  <svg
                    className="h-3.5 w-3.5 -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Menu liên kết (Trên mobile chia 2 cột tiết kiệm 50% chiều cao) */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="mb-2.5 border-b border-white/15 pb-2 text-sm font-bold sm:mb-6 sm:pb-3 sm:text-lg">
              Liên kết nhanh
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1 sm:gap-y-3">
              {menuLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 py-0.5 text-left text-xs text-white/90 transition-all duration-300 ease-out hover:text-[#1cd0b4] sm:min-h-0 sm:py-1 sm:text-sm sm:hover:translate-x-1.5"
                >
                  <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-[#1cd0b4] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110 sm:h-4 sm:w-4" />
                  <span className="leading-snug truncate">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cột 3: Tải ứng dụng Android & iOS */}
          <div className="md:col-span-12 lg:col-span-4">
            <h4 className="mb-2.5 border-b border-white/15 pb-2 text-sm font-bold sm:mb-6 sm:pb-3 sm:text-lg">
              Ứng dụng di động
            </h4>
            <p className="hidden sm:block text-sm text-white/80 leading-relaxed mb-4">
              Cài đặt ứng dụng CSKH Cấp Nước Tóc Tiên để tra cứu hóa đơn, chỉ số tiêu thụ và nhận thông báo tức thì trên điện thoại.
            </p>

            {/* Badges tải app */}
            <AppDownloadBadges variant="footer" />

            {/* Nút cuộn lên đầu trang: Thu gọn trên mobile */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Cuộn lên đầu trang"
              className="sm:hidden mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2 px-3 text-xs font-semibold text-white/90 transition hover:bg-white/10 active:scale-[0.98]"
            >
              <IconArrowUp className="h-3.5 w-3.5 text-[#1cd0b4]" />
              <span>Cuộn lên đầu trang</span>
            </button>

            {/* Nút cuộn lên đầu trang: Đầy đủ trên desktop */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Cuộn lên đầu trang"
              className="hidden sm:flex group mt-4 w-full items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-xs transition-all duration-300 hover:border-[#1cd0b4] hover:bg-white/10 active:scale-[0.98] cursor-pointer text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1cd0b4]/20 text-[#1cd0b4] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#1cd0b4] group-hover:text-[#0c2440]">
                <IconArrowUp className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white group-hover:text-[#1cd0b4] transition-colors">
                  Cuộn lên đầu trang
                </span>
                <span className="text-[11px] text-white/60 leading-tight">
                  Quay lại thanh điều hướng và menu chính
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Dòng bản quyền dưới chân trang */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-white/60 sm:mt-12 sm:pt-6 sm:text-xs">
          <p>© {new Date().getFullYear()} CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
