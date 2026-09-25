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

const cardShell = `flex flex-col items-center rounded-3xl border border-slate-200/80 bg-[#ebf4f6] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8 ${CARD_HOVER_CLASS}`;

/**
 * Trang dịch vụ: Hotline, tra cứu hóa đơn, thanh toán — dùng tại `/servicecard`.
 * Phong cách Lacroix Environment: nền sáng, card #ebf4f6, chữ #0c2340, nút #1cd0b4.
 */
export default function ServiceCards() {
  return (
    <section
      className="relative overflow-hidden bg-white border-t border-slate-100"
      aria-labelledby="service-cards-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-sky-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className={cardShell}>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0c2340] shadow-sm ring-1 ring-slate-200/60">
              <IconPhone className="h-7 w-7 text-teal-600" />
            </div>
            <p className="text-sm font-medium text-slate-500">
              Hotline{" "}
              <a
                href="tel:02543894894"
                className="font-bold tabular-nums text-[#0c2340] underline-offset-2 hover:underline"
              >
                0254 3 894 894
              </a>
            </p>
            <h2 className="mt-2 text-lg font-bold uppercase tracking-wide text-[#0c2340]">
              Hỗ trợ trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tư vấn, tiếp nhận đăng ký lắp mới, sửa chữa, thay thế và di dời hệ
              thống nước.
            </p>
            <a
              href="tel:02543894894"
              className="mt-5 inline-flex items-center rounded-full bg-[#1cd0b4] px-6 py-2 text-xs font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4]"
            >
              Gọi ngay →
            </a>
          </div>

          <Link
            href="/category/tra-cuu-hoa-don"
            className={cardShell}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0c2340] shadow-sm ring-1 ring-slate-200/60">
              <IconInvoice className="h-7 w-7 text-teal-600" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#0c2340]">
              Tra cứu hóa đơn
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tra cứu hóa đơn tiền nước nhanh chóng theo mã khách hàng.
            </p>
            <span className="mt-5 inline-flex items-center rounded-full bg-[#1cd0b4] px-6 py-2 text-xs font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4]">
              Mở tra cứu →
            </span>
          </Link>

          <Link
            href="/category/dang-ky-lap-dat-truc-tuyen"
            className={cardShell}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0c2340] shadow-sm ring-1 ring-slate-200/60">
              <IconRegisterOnline className="h-7 w-7 text-teal-600" />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wide text-[#0c2340]">
              Đăng ký lắp đặt trực tuyến
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Gửi yêu cầu lắp mới trực tuyến qua website — Sau đó bộ phận CSKH
              hướng dẫn hồ sơ và lịch khảo sát.
            </p>
            <span className="mt-5 inline-flex items-center rounded-full bg-[#1cd0b4] px-6 py-2 text-xs font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4]">
              Mở đăng ký online →
            </span>
          </Link>
        </div>

        <div className="mt-12 sm:mt-16">
          <PaymentChannels />
        </div>
      </div>
    </section>
  );
}
