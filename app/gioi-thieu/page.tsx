import Link from "next/link";
import type { Metadata } from "next";

import { categoryService } from "@/services/category";
import { CARD_HOVER_CLASS } from "@/lib/cardHover";

export const metadata: Metadata = {
  title: "Giới thiệu",
};

function isIntroRootSlug(slug: string) {
  const s = slug.toLowerCase().replace(/_/g, "-");
  return s.includes("gioi-thieu") || s.includes("gioithieu");
}

function shouldHideIntroChildSlug(slug: string) {
  const s = slug.toLowerCase().replace(/_/g, "-");
  return (
    s.includes("he-thong") ||
    s.includes("doi-tac") ||
    s.includes("khach-hang") ||
    s.includes("doitac") ||
    s.includes("khachhang")
  );
}

export default async function GioiThieuIndexPage() {
  let items: { id: number; name: string; slug: string }[] = [];

  try {
    const roots = await categoryService.getRoots();
    const introRoot = roots.find((r) => isIntroRootSlug(r.slug));
    if (introRoot) {
      const children = await categoryService.getChildren(introRoot.id);
      items = children
        .filter((c) => !shouldHideIntroChildSlug(c.slug))
        .map((c) => ({ id: c.id, name: c.name, slug: c.slug }));
    }
  } catch {
    // ignore — still render empty state
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Giới thiệu
          </h1>
          <p className="mt-3 text-base text-slate-300">
            Chọn nội dung bạn muốn xem.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((c) => (
            <Link
              key={c.id}
              href={`/gioi-thieu/${c.slug}`}
              className={[
                "rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-white backdrop-blur transition",
                CARD_HOVER_CLASS,
              ].join(" ")}
            >
              <div className="text-lg font-semibold tracking-tight">
                {c.name}
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Xem chi tiết nội dung.
              </div>
            </Link>
          ))}
          {items.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center text-slate-200 backdrop-blur sm:col-span-2">
              Chưa có dữ liệu mục “Giới thiệu”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

