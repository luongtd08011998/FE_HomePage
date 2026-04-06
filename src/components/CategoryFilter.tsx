"use client";

import Link from "next/link";
import type { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  activeSlug?: string;
  basePath?: string;
}

export default function CategoryFilter({
  categories,
  activeSlug,
  basePath = "/category",
}: CategoryFilterProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-1 overflow-x-auto scrollbar-none -mb-px">
        <Link
          href="/news"
          className={`shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
            !activeSlug
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
          }`}
        >
          Tất cả
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`${basePath}/${cat.slug}`}
            className={`shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeSlug === cat.slug
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
