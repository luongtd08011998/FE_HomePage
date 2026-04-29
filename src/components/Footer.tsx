import Image from "next/image";
import Link from "next/link";

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

const ADDRESS = "Ấp 6, Xã Châu Pha, TP. Hồ Chí Minh, Việt Nam";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const menuLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Tin tức", href: "/category/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Tra cứu hóa đơn", href: "/tra-cuu-hoa-don" },
] as const;

const linkRow =
  "group flex min-h-[44px] items-center gap-2 rounded-lg py-1.5 text-left text-sm text-blue-100 transition-colors hover:text-white sm:min-h-0 sm:py-0 motion-safe:transition-transform motion-safe:hover:translate-x-1";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="mb-8 grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="border-b border-white/15 pb-8 text-center sm:border-0 sm:pb-0 sm:text-left lg:col-span-4">
            <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-white/40 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:rotate-12 motion-reduce:hover:rotate-0 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src="/logocty1.jpg"
                  alt="Logo Công ty TNHH Cấp Nước Tóc Tiên"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 64px, 72px"
                />
              </div>
              <div className="min-w-0 max-w-md">
                <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-lg md:text-xl">
                  CÔNG TY TNHH
                </h3>
                <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-lg md:text-xl">
                  CẤP NƯỚC TÓC TIÊN
                </h3>
              </div>
            </div>
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-200/90 sm:text-[0.7rem] sm:tracking-[0.2em]">
              Tập đoàn Hải Châu
            </p>
            <p className="mx-auto max-w-md text-pretty leading-relaxed text-blue-100 sm:mx-0">
              Cung cấp nước sạch chất lượng cao, đảm bảo sức khỏe cho mọi gia
              đình.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 border-b border-white/20 pb-3 text-base font-semibold sm:mb-6 sm:text-lg">
              Thông tin liên hệ
            </h4>
            <div className="space-y-1 sm:space-y-4">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkRow} items-start`}
              >
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-200 transition-colors group-hover:text-amber-200" />
                <span className="min-w-0 break-words text-pretty">
                  {ADDRESS}
                </span>
              </a>
              <a
                href="mailto:office@toctienltd.vn"
                className={`${linkRow} break-all sm:break-normal`}
              >
                <IconMail className="h-5 w-5 shrink-0 text-sky-200 transition-colors group-hover:text-amber-200" />
                <span className="min-w-0">office@toctienltd.vn</span>
              </a>
              <div className="flex min-h-[44px] items-start gap-2 rounded-lg py-1.5 sm:min-h-0 sm:gap-2 sm:py-0">
                <IconPhone
                  className="mt-0.5 h-5 w-5 shrink-0 text-sky-200"
                  aria-hidden
                />
                <div className="min-w-0 flex-1 space-y-1 text-sm text-blue-100">
                  <a
                    href="tel:02543894894"
                    className="group/phone block font-medium text-white underline-offset-2 transition hover:underline"
                  >
                    Điện thoại:{" "}
                    <span className="tabular-nums">
                      0254 3 894 894 - 0865 3 379 119
                    </span>
                  </a>
                </div>
              </div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 py-2 text-sm text-blue-100 sm:py-0">
                <span className="font-medium text-white/90">MST:</span>
                <span className="tabular-nums">3500815711</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 border-b border-white/20 pb-3 text-base font-semibold sm:mb-6 sm:text-lg">
              Menu
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 sm:gap-2">
              {menuLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkRow}>
                  <IconChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  <span className="leading-snug">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
