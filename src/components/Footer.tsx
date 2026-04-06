import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">TinTức</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Đọc tin tức nhanh, chính xác và cập nhật nhất.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Chuyên mục
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="hover:text-white transition-colors"
                >
                  Tìm kiếm
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Liên hệ
            </h4>
            <p className="text-sm text-gray-400">Email: contact@tintuc.vn</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TinTức. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
