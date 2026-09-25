"use client";

import { useState, useEffect, useRef } from "react";
import { QRCode } from "antd";
import { APP_LINKS } from "@/constants/appLinks";
import { Smartphone, Download, Check, Sparkles } from "lucide-react";

interface SmartQrCodeCardProps {
  size?: number;
  showDownloadButton?: boolean;
  className?: string;
  compact?: boolean;
}

export default function SmartQrCodeCard({
  size = 140,
  showDownloadButton = true,
  className = "",
  compact = false,
}: SmartQrCodeCardProps) {
  const [qrUrl, setQrUrl] = useState<string>(APP_LINKS.smartQrUrl);
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tự động nhận diện domain hiện tại khi chạy trên client
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const port = window.location.port ? `:${window.location.port}` : "";

      // Khi chạy test trên máy localhost, dùng IP mạng LAN máy tính để điện thoại quét được
      const baseOrigin =
        hostname === "localhost" || hostname === "127.0.0.1"
          ? `http://19.16.100.162${port}`
          : window.location.origin;

      const fullUrl = `${baseOrigin}${APP_LINKS.smartDownloadPath}`;
      const timer = setTimeout(() => {
        setQrUrl(fullUrl);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = "QR_Tai_App_Cap_Nuoc_Toc_Tien.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    // Nếu là SVG
    const svg = qrRef.current.querySelector("svg");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);
      const a = document.createElement("a");
      a.download = "QR_Tai_App_Cap_Nuoc_Toc_Tien.svg";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (compact) {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xs ${className}`}
      >
        <div
          ref={qrRef}
          className="flex shrink-0 items-center justify-center rounded-xl bg-white p-1 border border-slate-200 shadow-2xs"
        >
          <QRCode
            value={qrUrl}
            size={56}
            bordered={false}
            color="#0c2340"
            type="canvas"
          />
        </div>
        <div className="text-left pr-1">
          <div className="flex items-center gap-1.5">
            <span className="block text-[11px] font-bold text-[#0c2340] uppercase tracking-wide">
              1 Mã QR Thông Minh
            </span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-700">
              Tự động
            </span>
          </div>
          <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
            iOS & Android quét đều nhận đúng app
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm backdrop-blur-xs transition hover:shadow-md ${className}`}
    >
      {/* Huy hiệu Smart QR */}
      <div className="mb-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-2.5 py-1 text-[11px] font-bold text-teal-800 border border-teal-200/60">
        <Sparkles className="h-3 w-3 text-teal-600" />
        <span>1 Mã duy nhất (iOS & Android)</span>
      </div>

      {/* Khung mã QR */}
      <div
        ref={qrRef}
        className="relative flex items-center justify-center rounded-xl bg-white p-2.5 shadow-xs border border-slate-200/80 transition-transform duration-300 hover:scale-[1.02]"
      >
        <QRCode
          value={qrUrl}
          size={size}
          bordered={false}
          color="#0c2340"
          type="canvas"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs font-bold text-[#0c2340] flex items-center justify-center gap-1">
          <Smartphone className="h-3.5 w-3.5 text-teal-600" />
          <span>Quét bằng Camera hoặc Zalo</span>
        </p>
        <p className="mt-0.5 text-[11px] text-slate-500 max-w-[190px] leading-tight mx-auto">
          Tự động nhận diện iPhone hoặc máy Android để mở đúng kho ứng dụng
        </p>
      </div>

      {/* Nút sao chép link hoặc tải mã để in */}
      {showDownloadButton && (
        <div className="mt-3 flex items-center gap-2 w-full pt-2.5 border-t border-slate-100">
          <button
            type="button"
            onClick={handleDownloadQR}
            title="Tải ảnh mã QR để in lên hóa đơn, giấy thông báo"
            className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 transition hover:bg-slate-200 active:scale-95 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5 text-slate-600" />
            <span>Lưu ảnh để in</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            title="Sao chép đường link tải thông minh"
            className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 transition hover:border-[#1cd0b4] hover:text-[#0c2340] active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700">Đã chép</span>
              </>
            ) : (
              <span>Chép link</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
