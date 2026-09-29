"use client";

import { APP_LINKS } from "@/constants/appLinks";

export function IconApple({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function IconGooglePlay({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="#00C3FF"
        d="M32.5 15.1c-4.4 4.7-7 11.6-7 20.4v441c0 8.8 2.6 15.7 7 20.4l1.1 1.1 247-247v-5.8l-247-247-1.1 1.1z"
      />
      <path
        fill="#FFBB00"
        d="M363.3 325.8l-82.7-82.7v-5.8l82.7-82.7 1.8 1 97.9 55.6c28 15.9 28 41.9 0 57.8l-97.9 55.6-1.8 1.2z"
      />
      <path
        fill="#FF334B"
        d="M365.1 324.6l-84.5-84.5-248.1 248.1c9.2 9.8 24.5 10.9 41.9 1.1l290.7-164.7z"
      />
      <path
        fill="#00E676"
        d="M365.1 187.4L74.4 22.7C57 12.8 41.7 14 32.5 23.8l248.1 248.1 84.5-84.5z"
      />
    </svg>
  );
}

export function IconQrCode({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}

interface AppDownloadBadgesProps {
  variant?: "default" | "compact" | "footer" | "hero";
  appStoreUrl?: string;
  googlePlayUrl?: string;
  className?: string;
  showSubtitle?: boolean;
}

export default function AppDownloadBadges({
  variant = "default",
  appStoreUrl = APP_LINKS.appStore,
  googlePlayUrl = APP_LINKS.googlePlay,
  className = "",
  showSubtitle = true,
}: AppDownloadBadgesProps) {
  if (variant === "footer") {
    return (
      <div className={`grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-2.5 ${className}`}>
        {/* Apple App Store */}
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tải ứng dụng Cấp Nước Tóc Tiên trên App Store cho iOS"
          className="group relative flex items-center gap-2 sm:gap-3 rounded-xl border border-white/20 bg-white/10 px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#1cd0b4] hover:bg-white/15 hover:shadow-lg hover:shadow-[#1cd0b4]/10 hover:-translate-y-0.5 active:scale-95"
        >
          <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <IconApple className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70 leading-none truncate">
              Tải về trên
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight mt-0.5 group-hover:text-[#1cd0b4] transition-colors truncate">
              App Store
            </span>
          </div>
        </a>

        {/* Google Play */}
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tải ứng dụng Cấp Nước Tóc Tiên trên Google Play cho Android"
          className="group relative flex items-center gap-2 sm:gap-3 rounded-xl border border-white/20 bg-white/10 px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#1cd0b4] hover:bg-white/15 hover:shadow-lg hover:shadow-[#1cd0b4]/10 hover:-translate-y-0.5 active:scale-95"
        >
          <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <IconGooglePlay className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70 leading-none truncate">
              Tải về từ
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight mt-0.5 group-hover:text-[#1cd0b4] transition-colors truncate">
              Google Play
            </span>
          </div>
        </a>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {/* Apple App Store */}
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tải trên App Store"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[#0c2340] shadow-sm transition-all duration-300 hover:border-sky-500 hover:shadow-md hover:-translate-y-0.5"
        >
          <IconApple className="h-5 w-5 text-slate-900 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-medium leading-none">
              App Store
            </span>
            <span className="text-xs font-bold text-[#0c2340] leading-tight">iOS</span>
          </div>
        </a>

        {/* Google Play */}
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tải trên Google Play"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[#0c2340] shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5"
        >
          <IconGooglePlay className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-medium leading-none">
              Google Play
            </span>
            <span className="text-xs font-bold text-[#0c2340] leading-tight">Android</span>
          </div>
        </a>
      </div>
    );
  }

  // Variant: default / hero (Lớn, bắt mắt, bóng bẩy chuẩn thương hiệu Cấp Nước Tóc Tiên)
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 ${className}`}>
      {/* Nút App Store */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tải ứng dụng Cấp Nước Tóc Tiên trên Apple App Store"
        className="group relative flex items-center gap-3.5 rounded-2xl border border-slate-800 bg-[#0c2340] px-5 py-3 text-white shadow-md transition-all duration-300 hover:border-[#1cd0b4] hover:bg-[#07172c] hover:shadow-xl hover:shadow-[#1cd0b4]/20 hover:-translate-y-1 active:scale-95"
      >
        {/* Hiệu ứng viền sáng hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1cd0b4]/0 via-[#1cd0b4]/10 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <IconApple className="h-8 w-8 text-white drop-shadow-sm" />
        </div>

        <div className="flex flex-col text-left relative z-10">
          {showSubtitle && (
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium leading-none">
              Tải về trên
            </span>
          )}
          <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight mt-0.5 group-hover:text-[#1cd0b4] transition-colors">
            App Store
          </span>
          <span className="text-[10px] text-teal-400/80 font-medium">Dành cho iOS</span>
        </div>
      </a>

      {/* Nút Google Play */}
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tải ứng dụng Cấp Nước Tóc Tiên trên Google Play Store"
        className="group relative flex items-center gap-3.5 rounded-2xl border border-slate-800 bg-[#0c2340] px-5 py-3 text-white shadow-md transition-all duration-300 hover:border-[#1cd0b4] hover:bg-[#07172c] hover:shadow-xl hover:shadow-[#1cd0b4]/20 hover:-translate-y-1 active:scale-95"
      >
        {/* Hiệu ứng viền sáng hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1cd0b4]/0 via-[#1cd0b4]/10 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <IconGooglePlay className="h-8 w-8 drop-shadow-sm" />
        </div>

        <div className="flex flex-col text-left relative z-10">
          {showSubtitle && (
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium leading-none">
              Tải về từ
            </span>
          )}
          <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight mt-0.5 group-hover:text-[#1cd0b4] transition-colors">
            Google Play
          </span>
          <span className="text-[10px] text-teal-400/80 font-medium">Dành cho Android</span>
        </div>
      </a>
    </div>
  );
}
