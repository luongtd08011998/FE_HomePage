import Link from "next/link";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";
import PaymentChannels from "./servicecard/PaymentChannels";

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .94h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
      />
    </svg>
  );
}

function IconInvoice({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

/** Giấy tờ + bút — gợi đăng ký / hồ sơ lắp đặt. */
function IconRegisterOnline({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

const cardShell = `flex flex-col items-center rounded-2xl border p-6 text-center backdrop-blur-md transition-colors sm:p-8 ${CARD_HOVER_CLASS}`;

/**
 * Trang dịch vụ: Hotline, tra cứu hóa đơn, thanh toán — dùng tại `/servicecard`.
 * Cùng nhịp visual với các khối giới thiệu (nền gradient xanh đậm).
 */
export default function ServiceCards() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900"
      aria-labelledby="service-cards-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div
            className={`${cardShell} border-emerald-500/30 bg-white/[0.06] hover:border-emerald-400/50 hover:bg-white/[0.08]`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
              <IconPhone className="h-8 w-8" />
            </div>
            <p className="text-sm font-semibold text-emerald-200/90">
              Hotline{" "}
              <a
                href="tel:02543894894"
                className="font-bold tabular-nums text-white underline-offset-2 hover:underline"
              >
                0254 3 894 894
              </a>
            </p>
            <h2 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
              Hỗ trợ trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Tư vấn, tiếp nhận đăng ký lắp mới, sửa chữa, thay thế và di dời hệ
              thống nước.
            </p>
          </div>

          <Link
            href="/category/tra-cuu-hoa-don"
            className={`${cardShell} border-cyan-500/30 bg-white/[0.06] hover:border-cyan-400/50 hover:bg-white/[0.08]`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30">
              <IconInvoice className="h-8 w-8" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wide text-white">
              Tra cứu hóa đơn
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Tra cứu hóa đơn tiền nước nhanh chóng theo mã khách hàng.
            </p>
            <span className="mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Mở tra cứu →
            </span>
          </Link>

          <Link
            href="/category/dang-ky-lap-dat-truc-tuyen"
            className={`${cardShell} border-violet-500/30 bg-white/[0.06] hover:border-violet-400/50 hover:bg-white/[0.08]`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30">
              <IconRegisterOnline className="h-8 w-8" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wide text-white">
              Đăng ký lắp đặt trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Gửi yêu cầu lắp mới trực tuyến qua website — Sau đó bộ phận CSKH
              hướng dẫn hồ sơ và lịch khảo sát.
            </p>
            <span className="mt-4 text-sm font-semibold text-violet-300 hover:text-violet-200">
              Mở đăng ký online →
            </span>
          </Link>
        </div>

        <div className="mt-10 sm:mt-12">
          <PaymentChannels />
        </div>
      </div>
    </section>
  );
}
