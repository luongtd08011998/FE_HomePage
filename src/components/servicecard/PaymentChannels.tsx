"use client";

import { motion } from "motion/react";
import { CreditCard, CheckCircle2, ShieldCheck } from "lucide-react";

const banks = [
  {
    abbr: "Vietinbank",
    name: "Ngân hàng TMCP Công Thương Việt Nam",
    color: "#60a5fa",
  },
  {
    abbr: "VCB",
    name: "Ngân hàng TMCP Ngoại Thương Việt Nam",
    color: "#34d399",
  },
  {
    abbr: "Agribank",
    name: "Ngân hàng Nông nghiệp và Phát triển nông thôn",
    color: "#4ade80",
  },
  {
    abbr: "BIDV",
    name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    color: "#818cf8",
  },
  { abbr: "BVBank", name: "Ngân hàng Bản Việt", color: "#f87171" },
  {
    abbr: "HDBank",
    name: "Ngân hàng TMCP Phát triển TP Hồ Chí Minh",
    color: "#38bdf8",
  },
  { abbr: "HSBC", name: "Ngân hàng TNHH MTV HSBC", color: "#fb7185" },
  {
    abbr: "Eximbank",
    name: "Ngân hàng Xuất nhập Khẩu Việt Nam",
    color: "#7dd3fc",
  },
  {
    abbr: "VPBank",
    name: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
    color: "#6ee7b7",
  },
];

export default function PaymentChannels() {
  return (
    <section aria-label="Kênh thanh toán">
      <div className="mx-auto max-w-5xl">
        {/* Badge tiêu đề */}
        <motion.div
          className="mb-4 sm:mb-8 text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#1cd0b4] px-4 py-1.5 sm:px-5 sm:py-2 text-[#0c2340] shadow-sm">
            <CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0c2340]" aria-hidden />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em]">
              Thanh toán trực tuyến
            </span>
          </div>
        </motion.div>

        {/* Gợi ý vuốt ngang trên mobile */}
        <div className="mb-2 flex items-center justify-between px-1 text-[11px] text-slate-500 sm:hidden">
          <span className="font-semibold text-slate-600">Ngân hàng & ví liên kết</span>
          <span className="text-[10px] font-semibold text-teal-700">Vuốt ngang (10+) →</span>
        </div>

        {/* Bank Cards: Mobile cuộn ngang mượt mà 1 hàng, Desktop giữ lưới 10 cột */}
        <motion.div
          className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-5 lg:grid-cols-10 sm:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {banks.map((bank, index) => (
            <motion.div
              key={bank.abbr}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.07,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.06,
                y: -4,
                transition: { duration: 0.18 },
              }}
              className="relative group cursor-pointer shrink-0 snap-start w-22 sm:w-auto"
            >
              <div
                className="relative overflow-hidden rounded-xl sm:rounded-2xl p-2 sm:p-3 h-16 sm:h-24 flex flex-col items-center justify-center border border-slate-200/90 bg-white shadow-2xs sm:shadow-sm transition-all duration-300 group-hover:border-[#1cd0b4] group-hover:shadow-md"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${bank.color}14 0%, ${bank.color}25 100%)`,
                  }}
                />

                {/* Tên viết tắt */}
                <div className="relative z-10 text-center">
                  <div
                    className="font-bold tracking-tight group-hover:scale-110 transition-transform duration-300 text-xs sm:text-[1.05rem]"
                    style={{
                      color: bank.color,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {bank.abbr}
                  </div>

                  {/* Đường trang trí */}
                  <div
                    className="h-px w-5 sm:w-7 mx-auto rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${bank.color}, transparent)`,
                      opacity: 0.6,
                    }}
                  />
                </div>

                {/* Tooltip tên đầy đủ */}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-y-1 z-20 hidden sm:block"
                  style={{
                    background: "#0c2340",
                    color: "white",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 16px rgba(12, 35, 64, 0.25)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {bank.name}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "4px solid #0c2340",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            key="more-banks"
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.3 + banks.length * 0.07,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.06,
              y: -4,
              transition: { duration: 0.18 },
            }}
            className="relative group cursor-pointer shrink-0 snap-start w-22 sm:w-auto"
          >
            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl p-2 sm:p-3 h-16 sm:h-24 flex flex-col items-center justify-center border border-slate-200/90 bg-white shadow-2xs sm:shadow-sm transition-all duration-300 group-hover:border-[#1cd0b4] group-hover:shadow-md"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl bg-slate-50"
              />

              <div className="relative z-10 text-center">
                <div
                  className="font-bold tracking-tight text-slate-500 group-hover:scale-110 transition-transform duration-300 text-xs sm:text-[1.05rem]"
                  style={{
                    letterSpacing: "-0.01em",
                    marginBottom: "0.15rem",
                  }}
                >
                  ...+
                </div>
                <div
                  className="h-px w-5 sm:w-7 mx-auto rounded-full bg-slate-300"
                />
              </div>

              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-y-1 z-20 hidden sm:block"
                style={{
                  background: "#0c2340",
                  color: "white",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 16px rgba(12, 35, 64, 0.25)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Nhiều ngân hàng khác
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: "4px solid #0c2340",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hướng dẫn 3 bước: Gọn gàng trên mobile, đầy đủ trên desktop */}
        <motion.div
          className="mt-4 sm:mt-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-[#ebf4f6] p-3.5 sm:p-6 shadow-2xs sm:shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6">
            {[
              "Mở app ngân hàng / ví điện tử",
              "Chọn mục Thanh toán hóa đơn",
              'Tìm "Cấp nước Tóc Tiên" và nhập mã KH',
            ].map((t, idx) => (
              <div
                key={t}
                className="flex items-center gap-2.5 sm:gap-3 py-1 sm:py-0 border-b border-slate-200/50 last:border-b-0 sm:border-b-0"
              >
                <div className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-2xs ring-1 ring-slate-200/60 text-[11px] sm:text-xs font-bold text-teal-700">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug sm:leading-relaxed text-[#0c2340]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Badge bảo mật */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
