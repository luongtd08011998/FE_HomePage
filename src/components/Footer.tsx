"use client";

import Link from "next/link";

const navLinkClass =
  "text-sky-100/90 tracking-tight font-medium hover:text-white transition-colors duration-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.2)]";

const sectionTitleClass =
  "text-base font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] mb-5";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 shadow-[0_-8px_28px_-12px_rgba(2,132,199,0.45)] text-white">
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-400" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/25 to-slate-950/20" />
        <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl animate-footerFloat" />
        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl animate-footerFloat2" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(to_right,rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <style jsx>{`
        @keyframes footerFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-40px, 12px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes footerFloat2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(36px, -10px, 0) scale(1.04);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        :global(.animate-footerFloat) {
          animation: footerFloat 12s ease-in-out infinite;
          will-change: transform;
        }
        :global(.animate-footerFloat2) {
          animation: footerFloat2 14s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-footerFloat),
          :global(.animate-footerFloat2) {
            animation: none;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-start">
          {/* LOGO + COMPANY */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-2">
            <img
              src="/logocty1.jpg"
              alt="Logo Công ty"
              className="h-28 w-28 rounded-full object-cover ring-2 ring-white/30 mb-4"
            />
            <span className="block text-[0.8rem] uppercase tracking-[0.28em] text-white/70 mb-1">
              TẬP ĐOÀN HẢI CHÂU
            </span>
            <h3 className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              CÔNG TY TNHH CẤP NƯỚC TÓC TIÊN
            </h3>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <h4 className={sectionTitleClass}>Thông tin liên hệ</h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base leading-relaxed">
              <li className={`flex items-start gap-2 ${navLinkClass}`}>
                <span className="shrink-0 opacity-90" aria-hidden>
                  📍
                </span>
                <span>Ấp 6, Xã Châu Pha, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className={`flex items-center gap-2 ${navLinkClass}`}>
                <span className="shrink-0 opacity-90" aria-hidden>
                  📞
                </span>
                <span>0254 3 894 894</span>
              </li>
              <li className={`flex items-center gap-2 ${navLinkClass}`}>
                <span className="shrink-0 opacity-90" aria-hidden>
                  ✉️
                </span>
                <span>office@toctienltd.vn</span>
              </li>
              <li className={`flex items-center gap-2 ${navLinkClass}`}>
                <span className="shrink-0 opacity-90" aria-hidden>
                  📠
                </span>
                <span>0865 3 379 119</span>
              </li>
              <li className={`flex items-center gap-2 ${navLinkClass}`}>
                <span className="shrink-0 opacity-90" aria-hidden>
                  🧾
                </span>
                <span>MST: 3500815711</span>
              </li>
            </ul>
          </div>

          {/* MENU */}
          <div className="md:col-span-1">
            <h4 className={sectionTitleClass}>Menu</h4>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              <li>
                <Link href="/" className={navLinkClass}>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/category/gioi-thieu" className={navLinkClass}>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/category/van-ban" className={navLinkClass}>
                  Văn bản
                </Link>
              </li>
              <li>
                <Link href="/category/tin-tuc" className={navLinkClass}>
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/news/thong-tin-lien-he" className={navLinkClass}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
