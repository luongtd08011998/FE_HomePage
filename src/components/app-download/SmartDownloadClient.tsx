"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/appLinks";
import SmartQrCodeCard from "@/components/common/SmartQrCodeCard";
import AppDownloadBadges from "@/components/common/AppDownloadBadges";
import {
  Smartphone,
  ArrowLeft,
  FileText,
  CreditCard,
  BellRing,
  ShieldCheck,
} from "lucide-react";

interface SmartDownloadClientProps {
  initialPlatform?: "ios" | "android" | "desktop";
}

export default function SmartDownloadClient({
  initialPlatform = "desktop",
}: SmartDownloadClientProps) {
  const [detectedPlatform, setDetectedPlatform] = useState<"ios" | "android" | "desktop">(
    initialPlatform
  );
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent || navigator.vendor || "";
    let platform: "ios" | "android" | "desktop" = "desktop";

    if (/iPad|iPhone|iPod/.test(ua)) {
      platform = "ios";
    } else if (/android/i.test(ua)) {
      platform = "android";
    }

    const timer = setTimeout(() => {
      setDetectedPlatform(platform);

      // Nếu người dùng truy cập từ điện thoại di động và không có cờ ?stay=1
      const params = new URLSearchParams(window.location.search);
      const stayOnPage =
        params.get("stay") === "1" || params.get("preview") === "1";

      if (!stayOnPage && (platform === "ios" || platform === "android")) {
        setRedirecting(true);
        const targetUrl =
          platform === "ios" ? APP_LINKS.appStore : APP_LINKS.googlePlay;

        // Chuyển hướng sau 250ms để người dùng thấy thông báo
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 250);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const targetAppUrl =
    detectedPlatform === "ios" ? APP_LINKS.appStore : APP_LINKS.googlePlay;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f0f8f9] to-[#e4f3f5] text-slate-800">
      {/* Thanh điều hướng tối giản */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0c2340] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Về trang chủ Cấp Nước Tóc Tiên</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kênh CSKH Chính thức</span>
          </div>
        </div>
      </header>

      {/* Thông báo nếu đang tự động chuyển hướng trên điện thoại */}
      {redirecting && (
        <div className="mx-auto mt-4 max-w-md px-4">
          <div className="rounded-2xl border border-teal-200 bg-teal-500/10 p-4 text-center backdrop-blur-md">
            <div className="mx-auto mb-2 h-7 w-7 animate-spin rounded-full border-3 border-teal-600 border-t-transparent" />
            <p className="text-sm font-bold text-[#0c2340]">
              Đang chuyển đến {detectedPlatform === "ios" ? "App Store" : "Google Play"}...
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Nếu trình duyệt không tự mở, vui lòng{" "}
              <a
                href={targetAppUrl}
                className="font-bold text-teal-700 underline"
              >
                bấm vào đây để tải ngay
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Cột trái: Thông tin và Nút bấm */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#0c2340] px-4 py-1.5 text-xs font-bold text-white shadow-xs">
              <Smartphone className="h-3.5 w-3.5 text-[#1cd0b4]" />
              <span>Ứng dụng di động Cấp Nước Tóc Tiên</span>
            </div>

            <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0c2340] leading-tight">
              Tải ứng dụng CSKH tiện lợi <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                cho cả iOS và Android
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Tra cứu tiền nước, thanh toán online nhanh chóng, nhận thông báo cắt nước tức thì và gửi phản ánh dịch vụ mọi lúc mọi nơi ngay trên điện thoại thông minh của bạn.
            </p>

            {/* Khối tải nhanh cho điện thoại */}
            <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Chọn kho ứng dụng phù hợp với thiết bị của bạn:
              </p>
              <AppDownloadBadges variant="default" showSubtitle={true} />

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Phiên bản 1.4 chính thức phát hành bởi Cấp Nước Tóc Tiên — Miễn phí 100%</span>
              </div>
            </div>

            {/* 3 Lợi ích nổi bật */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white/70 p-3">
                <FileText className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0c2340]">Hóa đơn minh bạch</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Xem chỉ số và tiền nước từng kỳ</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white/70 p-3">
                <CreditCard className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0c2340]">Thanh toán 1 chạm</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Qua tài khoản ngân hàng & ví điện tử</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white/70 p-3">
                <BellRing className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0c2340]">Báo cúp nước</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Nhận thông báo lịch cúp nước ngay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: 1 Mã QR Thông Minh duy nhất */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[320px]">
              <SmartQrCodeCard size={180} showDownloadButton={true} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
