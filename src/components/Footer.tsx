import Image from "next/image";
import Link from "next/link";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
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
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const ADDRESS = "Ấp 6, Xã Châu Pha, TP. Hồ Chí Minh, Việt Nam";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const menuLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/category/gioi-thieu" },
  { label: "Văn bản", href: "/category/van-ban" },
  { label: "Tin tức", href: "/category/tin-tuc" },
  { label: "Liên hệ", href: "/news/thong-tin-lien-he" },
  { label: "Tra cứu hóa đơn", href: "/tra-cuu-hoa-don" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/",
    icon: (
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    ),
  },
] as const;

const linkRow =
  "group flex items-center gap-2 text-blue-100 transition-colors hover:text-white motion-safe:transition-transform motion-safe:hover:translate-x-1";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-white/40 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:rotate-12 motion-reduce:hover:rotate-0">
                <Image
                  src="/logocty1.jpg"
                  alt="Logo Công ty TNHH Cấp Nước Tóc Tiên"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight tracking-tight md:text-xl">CÔNG TY TNHH</h3>
                <h3 className="text-lg font-semibold leading-tight tracking-tight md:text-xl">CẤP NƯỚC TÓC TIÊN</h3>
              </div>
            </div>
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-blue-200/90">Tập đoàn Hải Châu</p>
            <p className="mb-4 leading-relaxed text-blue-100">
              Cung cấp nước sạch chất lượng cao, đảm bảo sức khỏe cho mọi gia đình.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-6 border-b border-white/20 pb-3 text-lg font-semibold">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkRow} items-start`}
              >
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-200 transition-colors group-hover:text-amber-200" />
                <span>{ADDRESS}</span>
              </a>
              <a href="mailto:office@toctienltd.vn" className={linkRow}>
                <IconMail className="h-5 w-5 shrink-0 text-sky-200 transition-colors group-hover:text-amber-200" />
                <span>office@toctienltd.vn</span>
              </a>
              <a href="tel:02543894894" className={linkRow}>
                <IconPhone className="h-5 w-5 shrink-0 text-sky-200 transition-colors group-hover:text-amber-200" />
                <div>
                  <p className="text-white">Hotline: 0254 3 894 894</p>
                  <p className="text-sm text-blue-100">Fax: 0865 3 379 119</p>
                </div>
              </a>
              <p className="flex items-center gap-3 pl-0 text-sm text-blue-100">
                <span className="font-medium text-white/90">MST:</span>
                <span>3500815711</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-6 border-b border-white/20 pb-3 text-lg font-semibold">Menu</h4>
            <div className="grid grid-cols-2 gap-3">
              {menuLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkRow}>
                  <IconChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-blue-100 md:text-left">
              © {new Date().getFullYear()} Công ty TNHH Cấp Nước Tóc Tiên. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-blue-100">Kết nối:</span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-110 motion-safe:active:scale-95"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
