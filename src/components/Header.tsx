"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import type { Category } from "@/types";

interface HeaderProps {
  categories: Category[];
}

export default function Header({ categories }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600 shrink-0">
            TinTức
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === "/" ? "text-blue-600 bg-blue-50" : "hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Trang chủ
            </Link>
            <Link
              href="/news"
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === "/news" ? "text-blue-600 bg-blue-50" : "hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Tin tức
            </Link>

            {/* Categories dropdown */}
            {categories.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${pathname.startsWith("/category") ? "text-blue-600 bg-blue-50" : "hover:text-blue-600 hover:bg-gray-50"}`}
                >
                  Chuyên mục
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {menuOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === `/category/${cat.slug}` ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 w-full max-w-xs"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm..."
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tìm
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
