"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  IconApple,
  IconGooglePlay,
} from "@/components/common/AppDownloadBadges";
import SmartQrCodeCard from "@/components/common/SmartQrCodeCard";
import {
  Smartphone,
  ArrowRight,
  QrCode,
  X,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AppDownloadSection() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <section
      className="hidden md:block relative py-6 sm:py-8 bg-slate-50/60 border-t border-slate-200/60"
      aria-label="Tải ứng dụng Cấp Nước Tóc Tiên"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner mỏng ngang chuẩn nhận diện Cấp Nước Tóc Tiên */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0c2340] via-[#0e2a4d] to-[#07172c] p-5 sm:p-7 text-white shadow-lg border border-slate-700/60">
          {/* Ánh sáng nền trang trí tinh tế */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1cd0b4]/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* VẾ TRÁI: Tiêu đề và mô tả ngắn gọn */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1cd0b4]/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#1cd0b4] border border-[#1cd0b4]/30">
                <Smartphone className="h-3 w-3" />
                <span>Ứng dụng di động CSKH</span>
                <span className="h-1 w-1 rounded-full bg-[#1cd0b4]" />
                <span className="text-white/80">iOS & Android</span>
              </div>

              <h2 className="mt-2.5 text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white leading-tight">
                Cấp Nước Tóc Tiên ngay trên{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd0b4] to-cyan-300">
                  điện thoại của bạn
                </span>
              </h2>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Tra cứu hóa đơn điện tử, thanh toán trực tuyến và nhận thông báo cúp nước tức thì mọi lúc, mọi nơi chỉ với một chạm.
              </p>

              {/* 3 gạch đầu dòng tiện ích siêu ngắn */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-[#1cd0b4]" />
                  Tra cứu chỉ số & tiền nước
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-[#1cd0b4]" />
                  Thanh toán không tiền mặt
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-[#1cd0b4]" />
                  Báo sự cố rò rỉ nhanh
                </span>
              </div>
            </div>

            {/* VẾ PHẢI: Các nút hành động nhanh & quét QR */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {/* Nút chính dẫn tới trang /tai-app */}
              <Link
                href="/tai-app"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1cd0b4] px-5 py-3 text-sm font-bold text-[#0c2440] shadow-md transition-all duration-300 hover:bg-white hover:text-[#0c2440] hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Tải ứng dụng ngay</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Nút bấm mở nhanh mã QR (cho người dùng máy tính) */}
              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                title="Quét mã QR để tải nhanh trên điện thoại"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:border-[#1cd0b4] hover:bg-white/20 active:scale-95 cursor-pointer"
              >
                <QrCode className="h-4 w-4 text-[#1cd0b4]" />
                <span>Quét mã QR</span>
              </button>
            </div>
          </div>

          {/* Dòng chân banner: Biểu tượng App Store & Google Play */}
          <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">Có sẵn trên:</span>
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex items-center gap-1 bg-white/10 rounded-md px-2 py-0.5">
                  <IconApple className="h-3.5 w-3.5 text-white" />
                  <span className="text-[10px] font-medium">App Store</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 rounded-md px-2 py-0.5">
                  <IconGooglePlay className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-medium">Google Play</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-teal-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Chính thức & Miễn phí</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal hiển thị mã QR thông minh khi bấm nút Quét mã */}
      <AnimatePresence>
        {isQrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div
              className="fixed inset-0"
              onClick={() => setIsQrModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
                aria-label="Đóng"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-[#0c2340]">
                  Mã QR Tải Ứng Dụng
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  1 mã dùng chung cho cả iPhone và máy Android
                </p>
              </div>

              <SmartQrCodeCard
                size={190}
                showDownloadButton={true}
                className="shadow-none border-0 p-0"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
