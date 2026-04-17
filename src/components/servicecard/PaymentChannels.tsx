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
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-teal-300 backdrop-blur">
            <CreditCard className="h-4 w-4" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Thanh toán trực tuyến
            </span>
          </div>
        </motion.div>

        {/* Bank Cards Grid */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10 sm:gap-3"
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
              className="relative group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-xl p-3 h-24 flex flex-col items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/20"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${bank.color}14 0%, ${bank.color}22 100%)`,
                  }}
                />

                {/* Tên viết tắt */}
                <div className="relative z-10 text-center">
                  <div
                    className="font-bold tracking-tight group-hover:scale-110 transition-transform duration-300"
                    style={{
                      fontSize: "1.05rem",
                      color: bank.color,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {bank.abbr}
                  </div>

                  {/* Đường trang trí */}
                  <div
                    className="h-px w-7 mx-auto rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${bank.color}, transparent)`,
                      opacity: 0.45,
                    }}
                  />
                </div>

                {/* Tooltip tên đầy đủ */}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-y-1 z-20"
                  style={{
                    background: "rgba(15, 23, 42, 0.96)",
                    color: "white",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.08)",
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
                      borderTop: "4px solid rgba(15, 23, 42, 0.96)",
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
            className="relative group cursor-pointer"
          >
            <div
              className="relative overflow-hidden rounded-xl p-3 h-24 flex flex-col items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/20"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(148,163,184,0.10) 0%, rgba(148,163,184,0.16) 100%)",
                }}
              />

              <div className="relative z-10 text-center">
                <div
                  className="font-bold tracking-tight group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontSize: "1.05rem",
                    color: "#cbd5e1",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.2rem",
                  }}
                >
                  ...+
                </div>
                <div
                  className="h-px w-7 mx-auto rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(203,213,225,0.85), transparent)",
                    opacity: 0.45,
                  }}
                />
              </div>

              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-y-1 z-20"
                style={{
                  background: "rgba(15, 23, 42, 0.96)",
                  color: "white",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                    borderTop: "4px solid rgba(15, 23, 42, 0.96)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hướng dẫn 3 bước */}
        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:grid-cols-3 sm:gap-5 sm:p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          {[
            "Mở app ngân hàng / ví điện tử",
            "Chọn mục Thanh toán hóa đơn",
            'Tìm "Cấp nước Tóc Tiên" và nhập mã KH',
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-teal-300"
                aria-hidden
              />
              <p className="text-sm font-medium leading-relaxed text-slate-200">
                {t}
              </p>
            </div>
          ))}
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
