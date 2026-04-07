import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* LOGO + COMPANY */}
          <div className="relative flex flex-col items-center text-center">
            {/* LOGO */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/logocty1.jpg"
                alt="Logo Công ty"
                className="h-28 w-28 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">
                Công ty TNHH Cấp nước Tóc Tiên
              </h3>
            </div>
          </div>

          {/* CONTACT */}
          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-extrabold uppercase text-white mb-5 tracking-wide">
              Thông tin liên hệ
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-base text-gray-200 leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Ấp 6, Xã Châu Pha, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>0254 3 894 894</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>office@toctienltd.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📠</span>
                <span>0865 3 379 119</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🧾</span>
                <span>MST: 3500815711</span>
              </li>
            </ul>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-lg font-extrabold uppercase text-white mb-5 tracking-wide">
              Menu
            </h4>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-200 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition duration-200"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/category/gioi-thieu"
                  className="hover:text-white transition duration-200"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/category/van-ban"
                  className="hover:text-white transition duration-200"
                >
                  Văn bản
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tin-tuc"
                  className="hover:text-white transition duration-200"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  href="/news/thong-tin-lien-he"
                  className="hover:text-white transition duration-200"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LINE */}
        <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm text-gray-300">
          © 2026 Công ty TNHH Cấp nước Tóc Tiên
        </div>
      </div>
    </footer>
  );
}
