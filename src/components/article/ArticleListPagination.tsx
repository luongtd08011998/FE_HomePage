import Link from "next/link";

type ArticleListPaginationProps = {
  current: number;
  lastPage: number;
  buildUrl: (page: number) => string;
};

/** Phân trang dạng nút bo tròn (Pill) phong cách Lacroix */
export default function ArticleListPagination({
  current,
  lastPage,
  buildUrl,
}: ArticleListPaginationProps) {
  if (lastPage <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {current > 1 && (
        <Link
          href={buildUrl(current - 1)}
          className="rounded-full border border-slate-700 bg-transparent px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-white active:scale-95"
        >
          ← Trang trước
        </Link>
      )}
      <span className="px-3 text-sm font-semibold text-slate-700">
        Trang {current} / {lastPage}
      </span>
      {current < lastPage && (
        <Link
          href={buildUrl(current + 1)}
          className="rounded-full bg-[#1cd0b4] px-6 py-2.5 text-sm font-bold text-[#0c2340] shadow-sm transition hover:bg-[#18bda4] active:scale-95"
        >
          Trang sau →
        </Link>
      )}
    </div>
  );
}
